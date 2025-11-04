import { NavLink } from 'react-router-dom'

import { Paths } from '../../paths'

import logo from './logo-footer-v1-ua.svg'
import './style.css'

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__main">
        <div>
          <p className="footer__title">Відстеження посилок</p>
          <ul className="footer__list">
            <li>
              <NavLink to={Paths.home} className="footer__item">
                Відстежити посилку
              </NavLink>
            </li>

            <li>
              <NavLink to="/china/aliexpress" className="footer__item">
                Відстежити моє замовлення Aliexpress
              </NavLink>
            </li>

            <li>
              <NavLink to="/china/wish" className="footer__item">
                Відстежити мій список бажань
              </NavLink>
            </li>

            <li>
              <NavLink to="/china" className="footer__item">
                Відстежити мою посилку з Китаю
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer__title">Інформація</p>
          <ul className="footer__list">
            <li>
              <NavLink to="/shop" className="footer__item">
                Магазини
              </NavLink>
            </li>

            <li>
              <NavLink to="/delivery-stats" className="footer__item">
                Прогноз термінів доставки
              </NavLink>
            </li>

            <li>
              <NavLink to={Paths.carriers} className="footer__item">
                Служби доставки
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer__title">Послуги</p>
          <ul className="footer__list">
            <li>
              <NavLink to="#" className="footer__item" target="_blank">
                Додаток для iPhone та iPad
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="footer__item" target="_blank">
                Додаток для Android
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="footer__item" target="_blank">
                Бот для Telegram
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer__copyright">
          <img src={logo} alt="Відстеження поштових відправлень та посилок Follow UA Parcels" />

          <NavLink to="/support/contact-us" className="footer__item">
            Контакти
          </NavLink>

          <div className="footer__item">
            © <time dateTime="2024">2024</time> Follow UA Parcels
          </div>
        </div>
      </div>
    </footer>
  )
}
