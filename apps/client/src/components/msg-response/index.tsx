import { Alert } from 'antd'
import { AlertProps } from 'antd/lib/alert'
import { useEffect, useState } from 'react'

import styles from './style.module.css'

interface Props {
	msg?: string
	type: 'success' | 'info' | 'warning' | 'error' | undefined
}

export const MsgResponse = ({ msg, type }: Props) => {
	const [key, setKey] = useState<number>(0)
	const [closed, setClosed] = useState<boolean>(!msg)

	useEffect(() => {
		if (msg) {
			setClosed(false)

			const timer = setTimeout(() => {
				setClosed(true)
			}, 5000)

			return () => {
				clearTimeout(timer)
				setKey((prevKey) => prevKey + 1)
			}
		}
	}, [msg])

	const handleAfterClose = () => {
		// Optional: Do something after the msg is closed
	}

	const alertProps: AlertProps = {
		message: msg,
		type: type,
		showIcon: true,
		closable: true,
		afterClose: handleAfterClose,
		onClose: () => setClosed(true),
	}

	return !closed ? (
		<div key={key}>
			<Alert {...alertProps} />
		</div>
	) : null
}
