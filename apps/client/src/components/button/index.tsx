import { ReactNode } from 'react'

import btnImg from './btn-ua-parcels.svg'
import './style.css'

type Props = {
  type: 'submit' | 'reset' | 'button'
  className: string
  disabled?: boolean
  children: ReactNode
}

export const Button: React.FC<Props> = ({ type, className, disabled, children }) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      <img height="15px" src={btnImg} alt="Button" />
      {children}
    </button>
  )
}
