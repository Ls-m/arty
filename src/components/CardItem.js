import React from 'react'
import {Link} from 'react-router-dom';

function CardItem() {
  return (
    <>

        <li className='cards__item'>
            <Link className='cards__item__link'>
                <figure>
                    <img src="/" alt="Travel img"
                    className='cards__item__img'/>
                </figure>
                <div className='cards__item_info'>
                    <h5 className='cards__item_text'/>

                </div>
            </Link>

        </li>

    </>
  );
}

  

export default CardItem