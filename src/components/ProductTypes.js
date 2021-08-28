import React from 'react';
import {Link} from 'gatsby';

import { StaticImage } from "gatsby-plugin-image";

const ProductTypes = () => {
  return(
    <section className="products">
      <div className={'wrapper'}>
        <ul className="productsList">
          <li><Link to={'/'}>
            <StaticImage src={'../assets/images/types/u14105.png'} alt="Мужская обувь"/>
            <h3 className="product-heading">Мужская обувь</h3>
            <p>Более 958 моделей</p>
          </Link>
          </li>

          <li><Link to={'/'}>
            <StaticImage src={'../assets/images/types/u14097.png'} alt="Мужская обувь"/>
            <h3 className="product-heading">Женская обувь</h3>
            <p>Более 1495 моделей</p>
          </Link>
          </li>

          <li><Link to={'/'}>
            <StaticImage src={'../assets/images/types/u14117.png'} alt="Мужская обувь"/>
            <h3 className="product-heading">Детская обувь</h3>
            <p>Более 1395 моделей</p>
          </Link>
          </li>

          <li><Link to={'/'}>
            <StaticImage src={'../assets/images/types/u14127.png'} alt="Мужская обувь"/>
            <h3 className="product-heading">Спортивная обувь</h3>
            <p>Более 735 моделей</p>
          </Link>
          </li>

          <li><Link to={'/'}>
            <StaticImage src={'../assets/images/types/u14227.png'} alt="Мужская обувь"/>
            <h3 className="product-heading">Аксесуары</h3>
            <p>Более 230 моделей</p>
          </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ProductTypes