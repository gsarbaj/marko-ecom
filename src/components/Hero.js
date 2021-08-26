import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"
import img from '../assets/images/hero-img.jpg'

const Hero = () => {
  return (
    <section className={'mainBanner'}>
      <div styleClass={'wrapper wrapper__hero'}>
        <div className={'hero'}>
          <h1>Обувь оптом от производителя</h1>
          <h2>Новая зимняя коллекция</h2>
          <a href='/'>Скачать Каталог</a>
          <a href='/'>Получить предложение</a>
          <p>Производство мужской, женской и детской обуви. Оптовая продажа с доставкой во все регионы России. Только для юридических лиц и ИП</p>
        </div>
        {/*<img src={img} alt="Обувь оптом от производителя" width={700}/>*/}
        <StaticImage src={'../assets/images/hero-img.jpg'} alt="Обувь оптом от производителя" width={700}/>
      </div>
    </section>
  )
}

export default Hero
