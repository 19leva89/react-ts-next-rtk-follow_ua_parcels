import styles from './style.module.scss'

export const NotFoundBlock = () => {
	return (
		<div className={styles.root}>
			<h1 className={styles.title}>
				<div className={styles.smile} role='img' aria-label='sad face'>
					😕
				</div>
				Нічого не знайдено
			</h1>
			<p className={styles.description}>На жаль, ця сторінка відсутня на нашому сайті</p>
		</div>
	)
}
