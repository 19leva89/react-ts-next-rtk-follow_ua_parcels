import { JSX } from 'react'

import { Loader } from '@/components/load'
import { useCurrentQuery } from '@/services/auth'

interface Props {
	children: JSX.Element
}

export const Auth = ({ children }: Props) => {
	const { isLoading } = useCurrentQuery()

	if (isLoading) {
		return <Loader />
	}

	return children
}
