import React from 'react'

import { Button, Form } from 'antd'

import './style.css'

type Props = {
  children: React.ReactNode
  htmlType: 'button' | 'submit' | 'reset' | undefined
  type: 'default' | 'link' | 'text' | 'primary' | 'dashed' | undefined
  size?: 'large' | 'middle' | 'small'
  className?: string
  ghost?: boolean
  danger?: boolean
  block?: boolean
  loading?: boolean
  disabled?: boolean
  shape?: 'default' | 'circle' | 'round' | undefined
  icon?: React.ReactNode
  onClick?: () => void
}

export const ButtonAntd: React.FC<Props> = ({
  children,
  htmlType,
  type,
  size,
  className,
  ghost,
  danger,
  block,
  loading,
  disabled,
  shape,
  icon,
  onClick,
}) => {
  return (
    <Form.Item>
      <Button
        htmlType={htmlType}
        type={type}
        size={size}
        className={className}
        ghost={ghost}
        danger={danger}
        block={block}
        loading={loading}
        disabled={disabled}
        shape={shape}
        icon={icon}
        onClick={onClick}
      >
        {children}
      </Button>
    </Form.Item>
  )
}
