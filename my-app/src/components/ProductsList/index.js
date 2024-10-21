import {Link} from 'react-router-dom'
import {Heart} from '@phosphor-icons/react'
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
        <p className='rating-style'><img className='rating-star-style' src="https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__" alt="rating"/> {rating}</p>
        <p className='price-style'><span className='price-span-style'>₹ 359</span>₹ {price}</p>
        <button className='add-product-button-style' type="button">- Add to cart +</button>
        <button className='buy-product-button-style' type="button">Buy on Rent</button>
      </div>
    </li>
    </>
  )

}

export default ProductsList