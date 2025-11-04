const { prisma } = require('./../prisma/prisma-client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

/**
* @route POST /api/user/login
* @desc Логін
* @access Public 
*/
const login = async (req, res) => {
	try {
		const { email, password } = req.body
		if (!email || !password) {
			return res.status(400).json({ msg: `Будь ласка, заповніть обов'язкові поля` })
		}

		const user = await prisma.user.findFirst({
			where: {
				email: email.toLowerCase()
			}
		})

		if (!user) {
			return res.status(404).json({ msg: `Користувача не знайдено` });
		}

		const isPasswordCorrect = user && (await bcrypt.compare(password, user.password))
		const secret = process.env.JWT_SECRET;

		if (user && isPasswordCorrect && secret) {
			return res.status(200).json({
				id: user.id,
				email: user.email,
				name: user.name,
				token: jwt.sign({ id: user.id }, secret, { expiresIn: '1d' })
			})
		} else {
			return res.status(400).json({ msg: `Логін або пароль введено невірно` })
		}
	} catch (error) {
		res.status(500).json({ msg: `Щось пішло не так` })
	}
}

/**
* @route POST /api/user/register
* @desc Реєстрація
* @access Public 
*/
const register = async (req, res) => {
	try {
		const { email, password, name, checkbox } = req.body
		if (!email || !password || !name || !checkbox) {
			return res.status(400).json({ msg: `Будь ласка, заповніть обов'язкові поля` })
		}

		const registredUser = await prisma.user.findFirst({
			where: {
				email: email.toLowerCase()
			}
		})

		if (registredUser) {
			return res.status(400).json({ msg: `Користувач з такою електронною адресою вже існує` })
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt)

		const user = await prisma.user.create({
			data: {
				email: email.toLowerCase(),
				password: hashedPassword,
				name: name,
				isConfirmed: false,
			}
		})

		const secret = process.env.JWT_SECRET;

		// Генеруємо унікальний код підтвердження
		const confirmCode = crypto.randomInt(100000, 999999).toString();

		// Зберігаємо код в базі даних
		await prisma.confirmCode.create({
			data: {
				userId: user.id,
				code: confirmCode,
				expiresAt: new Date(Date.now() + 360 * 60 * 1000), // Дійсний протягом 6 годин
			}
		});

		// Відправити код користувачеві, наприклад, по електронній пошті або SMS
		console.log("Email confirm code:", confirmCode);

		if (user && secret && confirmCode) {
			return res.status(201).json({
				id: user.id,
				email: user.email,
				name: user.name,
				token: jwt.sign({ id: user.id }, secret, { expiresIn: '1d' })
			})
		} else {
			return res.status(400).json({ msg: `Не вдалося створити користувача` })
		}

	} catch (error) {
		res.status(500).json({ msg: `Щось пішло не так` })
	}
}

/**
* @route POST /api/user/register-confirm
* @desc Підтвердження email
* @access Public 
*/
const registerConfirm = async (req, res) => {
	try {
		const { email, code } = req.body
		if (!email || !code) {
			return res.status(400).json({ msg: `Будь ласка, заповніть обов'язкові поля` })
		}

		const regUser = await prisma.user.findFirst({
			where: {
				email: email.toLowerCase()
			}
		})

		if (!regUser) {
			return res.status(400).json({ msg: `Користувача з такою електронною адресою не існує` })
		}

		// Отримуємо збережений код відновлення з бази даних або кешу
		const savedCodeRecord = await prisma.confirmCode.findFirst({
			where: {
				userId: regUser.id,
				code: code,
				expiresAt: {
					gte: new Date() // Перевірка часу закінчення терміну дії коду
				}
			}
		});

		if (!savedCodeRecord) {
			return res.status(400).json({ msg: `Невірний код підтвердження пошти або термін його дії закінчився` });
		}

		// Оновіть статус підтвердження email у базі даних
		await prisma.user.update({
			where: { id: regUser.id },
			data: { isConfirmed: true }
		});

		// Видаляємо використаний код відновлення
		await prisma.confirmCode.delete({
			where: {
				id: savedCodeRecord.id
			}
		});

		return res.status(200).json({ msg: `Пошту успішно підтверджено` });

	} catch (error) {
		res.status(500).json({ msg: `Щось пішло не так` })
	}
}

/**
* @route POST /api/user/recovery
* @desc Відновлення паролю
* @access Public 
*/
const recovery = async (req, res) => {
	try {
		const { email } = req.body
		if (!email) {
			return res.status(400).json({ msg: `Будь ласка, заповніть обов'язкові поля` })
		}

		const user = await prisma.user.findFirst({
			where: {
				email: email.toLowerCase()
			}
		})

		if (!user) {
			return res.status(400).json({ msg: `Користувача з такою електронною адресою не існує` });
		}

		// Генеруємо унікальний код відновлення
		const recoveryCode = crypto.randomInt(100000, 999999).toString();

		// Зберігаємо код в базі даних
		await prisma.recoveryCode.create({
			data: {
				userId: user.id,
				code: recoveryCode,
				expiresAt: new Date(Date.now() + 30 * 60 * 1000), // Дійсний протягом 30 хвилин
			}
		});

		// Відправити код користувачеві, наприклад, по електронній пошті або SMS
		console.log("Change password confirm code:", recoveryCode);

		return res.status(201).json({ msg: `Код для відновлення паролю відправлено у консоль` });

	} catch (error) {
		res.status(500).json({ msg: `Щось пішло не так` })
	}
}

/**
* @route POST /api/user/recovery-confirm
* @desc Підтвердження відновлення паролю
* @access Public 
*/
const recoveryConfirm = async (req, res) => {
	try {
		const { email, code, newPassword } = req.body;

		if (!email || !code || !newPassword) {
			return res.status(400).json({ msg: `Будь ласка, заповніть обов'язкові поля` });
		}

		const user = await prisma.user.findFirst({
			where: {
				email: email.toLowerCase()
			}
		});

		if (!user) {
			return res.status(400).json({ msg: `Користувача з такою електронною адресою не існує` });
		}

		// Отримуємо збережений код відновлення з бази даних або кешу
		const savedCodeRecord = await prisma.recoveryCode.findFirst({
			where: {
				userId: user.id,
				code: code,
				expiresAt: {
					gte: new Date() // Перевірка часу закінчення терміну дії коду
				}
			}
		});

		if (!savedCodeRecord) {
			return res.status(400).json({ msg: `Невірний код відновлення паролю або термін його дії закінчився` });
		}

		// Тут ви можете змінити пароль користувача
		// Наприклад, використовуючи bcrypt для збереження хеша нового паролю:
		const hashedPassword = await bcrypt.hash(newPassword, 10);

		// Оновіть пароль у базі даних
		await prisma.user.update({
			where: { id: user.id },
			data: { password: hashedPassword }
		});

		// Видаляємо використаний код відновлення
		await prisma.recoveryCode.delete({
			where: {
				id: savedCodeRecord.id
			}
		});


		return res.status(200).json({ msg: `Пароль успішно оновлено` });
	} catch (error) {
		res.status(500).json({ msg: `Щось пішло не так` });
	}
};

/**
* @route POST /api/user/new-email
* @desc Заміна email
* @access Private 
*/
const newEmail = async (req, res) => {
	try {
		const { newEmail, password } = req.body
		if (!newEmail || !password) {
			return res.status(400).json({ msg: `Будь ласка, заповніть обов'язкові поля` })
		}

		const user = await prisma.user.findFirst({
			where: {
				id: req.user.id,
			},
		});
		if (!user) {
			return res.status(404).json({ msg: `Користувача не знайдено` });
		}

		if (user.email.toLowerCase() === newEmail.toLowerCase()) {
			return res.status(400).json({ msg: `Новий email повинен відрізнятися від старого` });
		}

		const existingUserWithNewEmail = await prisma.user.findFirst({
			where: {
				email: newEmail.toLowerCase(),
				id: {
					not: req.user.id,
				},
			},
		})
		if (existingUserWithNewEmail) {
			return res.status(400).json({ msg: `Користувач з такою електронною адресою вже існує` })
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password)
		if (!isPasswordCorrect) {
			return res.status(400).json({ msg: `Пароль неправильний` });
		}

		await prisma.user.update({
			where: { id: req.user.id },
			data: { email: newEmail.toLowerCase() },
		});

		return res.status(200).json({ msg: `Пошту успішно оновлено` });

	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: `Щось пішло не так` })
	}
}

/**
* @route POST /api/user/new-password
* @desc Заміна паролю
* @access Private 
*/
const newPassword = async (req, res) => {
	try {
		const { oldPassword, newPassword } = req.body
		if (!oldPassword || !newPassword) {
			return res.status(400).json({ msg: `Будь ласка, заповніть обов'язкові поля` })
		}

		const user = await prisma.user.findFirst({ where: { id: req.user.id } });
		if (!user) {
			return res.status(404).json({ msg: `Користувача не знайдено` });
		}

		const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password)
		if (!isPasswordCorrect) {
			return res.status(400).json({ msg: `Старий пароль неправильний` });
		}

		if (oldPassword === newPassword) {
			return res.status(400).json({ msg: `Новий пароль повинен відрізнятися від старого` });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedNewPassword = await bcrypt.hash(newPassword, salt);

		await prisma.user.update({
			where: { id: req.user.id },
			data: { password: hashedNewPassword },
		});

		return res.status(200).json({ msg: `Пароль успішно оновлено` });

	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: `Щось пішло не так` })
	}
}

/**
* @route GET /api/user/current
* @desc Поточний користувач
* @access Private 
*/
const current = async (req, res) => {
	try {
		return res.status(200).json(req.user)
	} catch (error) {
		res.status(500).json({ msg: `Щось пішло не так` })
	}
}

module.exports = { login, register, registerConfirm, recovery, recoveryConfirm, newEmail, newPassword, current };