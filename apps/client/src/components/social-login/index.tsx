import React from 'react'
import { NavLink } from 'react-router-dom'
import googleLogo from './google-logo.svg'
import appleLogo from './apple-logo.svg'
import './style.css'

export const SocialLogin: React.FC = () => {
  return (
    <>
      <h4 className="social__login">Увійти як користувач</h4>

      <p className="social__links">
        <NavLink to="/auth/oauth/google">
          <img className="social__button social__button--google" src={googleLogo} alt="Google" />
        </NavLink>

        <NavLink to="/auth/oauth/apple">
          <img className="social__button social__button--apple" src={appleLogo} alt="Apple" />
        </NavLink>
      </p>
    </>
  )
}
