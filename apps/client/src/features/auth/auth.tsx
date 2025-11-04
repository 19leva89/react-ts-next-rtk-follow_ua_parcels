import React from 'react'
import { useCurrentQuery } from '../../app/services/auth'
import { Loader } from '../../components/load'

type Props = {
  children: JSX.Element
}

export const Auth: React.FC<Props> = ({ children }) => {
  const { isLoading } = useCurrentQuery()

  if (isLoading) {
    return <Loader />
  }

  return children
}
