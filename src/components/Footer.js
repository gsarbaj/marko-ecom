import React from "react"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className={'footer__wrapper'}>
        <div className={'wrapper wrapper__footer'}>
          <div>
            <h4>Партнерам</h4>
            <ul>
              <li><Link to={'/'}>Зарегистрироваться</Link></li>
              <li><Link to={'/'}>Условия</Link></li>
              <li><Link to={'/'}>Возможности</Link></li>
              <li><Link to={'/'}>Правила</Link></li>
            </ul>
          </div>
          <div>
            <h4>Компания</h4>
            <ul>
              <li><Link to={'/'}>История</Link></li>
              <li><Link to={'/'}>Новости</Link></li>
              <li><Link to={'/'}>Вакансии</Link></li>
              <li><Link to={'/'}>Магазины</Link></li>
            </ul>
          </div>
          <div>
            <h4>Продукция</h4>
            <ul>
              <li><Link to={'/'}>Детская Обувь</Link></li>
              <li><Link to={'/'}>Мужская Обувь</Link></li>
              <li><Link to={'/'}>Женская Обувь</Link></li>
              <li><Link to={'/'}>Аксесcуары</Link></li>
            </ul>
          </div>
          <div>
            <h4>Контакты</h4>
            <ul>
              <li><Link to={'/'}>Отдел Продаж</Link></li>
              <li><Link to={'/'}>Закупки</Link></li>
              <li><Link to={'/'}>Реквизиты</Link></li>
              <li><Link to={'/'}>Доставка</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={'footer__copyright'}>
        <div className={'wrapper'}>
          <span>Разработка и Продвижение с любовью <a href="https://imta.icu" target={'_blank'}>imta.icu</a></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
