import React from 'react';
import {StaticImage} from "gatsby-plugin-image"

const Description = () => {
  return(
    <section className="desc">
      <div className={'wrapper wrapper__desc'}>
        <h2>Почему обувь Марко так популярна в России?</h2>
        <div className="desc__wrapper">
          <StaticImage src={'../assets/images/MarkoShop.jpeg'} alt="Обувь Марко" width={550} height={412}/>
          <div>
            <h3>Качество</h3>
            <p>Настоящее Беларусское качество. Производство более 4 000 000 пар в год. Узнаваемость и доверие к беларуской продукции по всей России</p>
            <h3>Качество</h3>
            <p>Настоящее Беларусское качество. Производство более 4 000 000 пар в год. Узнаваемость и доверие к беларуской продукции по всей России</p>
            <h3>Качество</h3>
            <p>Настоящее Беларусское качество. Производство более 4 000 000 пар в год. Узнаваемость и доверие к беларуской продукции по всей России</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Description