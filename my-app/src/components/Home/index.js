import Header from '../Header'
import Products from '../Products'
import Footer from '../Footer'
import './index.css'


const Home = () => {
  return(
    <div>
      <div className='sub-header-container'>
        <p className='sub-header-name-1'>Free Shipping on orders above 999/-</p>
        <p className='sub-header-name'>Call us on: +91 98768 05120</p>
      </div>
      <Header/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home