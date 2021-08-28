import React from 'react';
import {Link} from "gatsby"

const LineForm = props => {
  return(
    <div className="LineForm">
      <h5>Не знаете с чего начать? <span>Скачайте каталог продукции...</span></h5>
      <Link to={'/'}>Скачать Каталог</Link>
    </div>
  )
}

export default LineForm