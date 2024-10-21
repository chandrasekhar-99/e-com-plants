import {Link} from 'react-router-dom'
import './index.css'

const ThankYouPage = () => {
  return(
    <div class="main-cart-container">
      <div className='main-container-2'>
        <div className='blob-item-1'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F0FFE5" d="M40.7,-69.7C53.4,-63.3,64.6,-53.5,73.3,-41.4C81.9,-29.2,88.1,-14.6,88.3,0.1C88.5,14.9,82.9,29.7,74.8,43C66.8,56.2,56.3,67.8,43.5,73.7C30.6,79.6,15.3,79.7,0.3,79.1C-14.6,78.5,-29.2,77.2,-43.3,72C-57.3,66.9,-70.8,57.8,-79.3,45.1C-87.9,32.5,-91.4,16.2,-89.2,1.3C-87.1,-13.7,-79.2,-27.5,-69.8,-38.6C-60.5,-49.8,-49.6,-58.5,-37.7,-65.3C-25.8,-72.1,-12.9,-77.1,0.6,-78.1C14.1,-79.1,28.1,-76.1,40.7,-69.7Z" transform="translate(100 100)" />
          </svg>
          
          <div className='blob-item-2'>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#F0FFE5" d="M43,-50.8C57.6,-48.5,72.8,-38.5,70.4,-27.3C67.9,-16,48,-3.5,38.9,8.9C29.8,21.3,31.5,33.6,26.9,43.3C22.2,53,11.1,60.2,1.2,58.5C-8.7,56.9,-17.4,46.4,-33,40.2C-48.6,34.1,-71,32.2,-81.3,21.5C-91.7,10.7,-89.9,-9,-78.5,-19.8C-67.1,-30.6,-46.1,-32.6,-31.5,-34.8C-16.8,-37,-8.4,-39.5,2.9,-43.4C14.2,-47.4,28.3,-53,43,-50.8Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        <div className='svg-sub-container'>
            <p className='sub-heading'>Your Cart</p>
            <hr/>
            <div className='popup-container-2'>
              <h1 className='popup-heading'>Congratulations <br/> Order Placed!</h1>
              <img className='cart-image' alt="cart-image" src="https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgKKIrx1v2QUz4fX2mBvb3nPC3aOp2RcHYU7~TgXtlP4G4lDYmL0xuOY7DKJKdhum-USfGEqnBwhWQZ1nqspzsS8tmvwwkqXSHQoA7p3jz5L1sVJfMMbHBBLleqQpbQbNwTLtaEuEnYK5~sLf~p-nuYM8RLyt5KvfMwFOgM~UylWTzJOSmInN47VMWplVhiGENFa3Bl8MtN6A6cosEVsCZF~oosEu4IYdGCxnl69-nex04r6gR3ZoReAVb4ND0084qLGAwKXwNRfJPlT8MlEC1s2CZJArhC6Tw3CKWGQ2wz0Fr9y6xQlBLFXrKTrbMaXcgJps09Yvxi9EZ4zPgKRqg"/>
              <p className='text-content'>Thank you for choosing Chaperone services.<br/>
              We will soon get in touch with you!</p>
              <Link to="/"><button className='cart-button'>CONTINUE SHOPPING</button></Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ThankYouPage