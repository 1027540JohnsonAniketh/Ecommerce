import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({ id, title, image, price, rating }) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () =>{

        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })

    }

    return (
        <div className = 'product'>
            <div className = 'product-info'>
                <p>{title}</p>
                <p className='product-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className = 'product-rating'>
                    {Array(rating)
                        .fill()
                        .map((_,i)=> (
                            <p>🌟</p>
                        ))}
                </div>
            </div>

            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
