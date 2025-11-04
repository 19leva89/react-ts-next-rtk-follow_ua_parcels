import React from 'react'
import { Alert } from 'antd'
import { AlertProps } from 'antd/lib/alert'

import styles from './style.module.css'

type Props = {
	msg?: string
	type: 'success' | 'info' | 'warning' | 'error' | undefined
}

export const MsgResponse: React.FC<Props> = ({ msg, type }) => {
	const [closed, setClosed] = React.useState(!msg)
	const [key, setKey] = React.useState(0)

	React.useEffect(() => {
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
		<React.Fragment key={key}>
			<Alert {...alertProps} />
		</React.Fragment>
	) : null
}
