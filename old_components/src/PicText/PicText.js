import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const PicText = props => {
    return(
        <div className="PicText__wrapper">
            <h3 className="PicText__title">{props.title}</h3>
            <span className="PicText__text">{props.text}</span>
            <StaticImage className="PicText__img" src={'../assets/images/9-min.png'} alt="Каталог Марко" width={550}/>
        </div>
    )
}

export default PicText