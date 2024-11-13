import {User,ShoppingCartSimple,CaretDown,Plant} from '@phosphor-icons/react'
import './index.css'


const Header = () => {
  return(
    <div>
      <nav className='header-main-container'>
        <div className="header-logo-container">
          <h1 className="header-logo-name">Chaperone</h1>
          <Plant size={32} weight="fill" color="#2A9E00" />
        </div>
        <div className='header-names-container'>
          <p className='header-name'>Home</p>
          <p className='header-name'>Tools <CaretDown size={32} className='header-name-sub-icon'/></p>
          <p className='header-name'>Our Services <CaretDown size={32} className='header-name-sub-icon'/></p>
          <p className='header-name'>Blog</p>
          <p className='header-name'>Our Story </p>
          <p className='header-name'>FAQs</p>
        </div>
        <div className='header-end-icon-container'>
          <div className='header-icon-container'>
            <User size={28} />
            <p className='header-icon-name'>My Profile</p>
          </div>
          <div className='header-icon-container'>
            <ShoppingCartSimple size={28} />
            <p className='header-icon-name'>Cart</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header