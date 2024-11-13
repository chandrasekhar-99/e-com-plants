import {Link} from 'react-router-dom'
import {Heart, Star} from '@phosphor-icons/react'
import './index.css'

const ProductsList = (props) => {
  const {plantDetail} = props
  const {image,title,description,rating,price} = plantDetail
  

  return(
    <>
    <li className='main-products-container'>
      <div className='product-container-1'>
        <Heart size={28} weight="light" className='heart-icon'/>
        <img className='product-image-style' src={image} alt={title}/>
        <Link to="/cart"><button className='view-product-button-style' type="button">View Product</button></Link>
        
      </div>
      <div className='product-container-2'>
        <h2 className='title-style'>{title}</h2>
        <p className='desc-style'>{description}</p>
        <div className='rating-style'><Star size={28} weight="fill" color="#FFD700" /> {rating}</div>
        <p className='price-style'><span className='price-span-style'>₹ 359</span>₹ {price}</p>
        <button className='add-product-button-style' type="button">- Add to cart +</button>
        <button className='buy-product-button-style' type="button">Buy on Rent</button>
      </div>
    </li>
    </>
  )

}

export default ProductsList