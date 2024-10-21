import {User,ShoppingCartSimple,CaretDown} from '@phosphor-icons/react'
import './index.css'


const Header = () => {
  return(
    <div>
      <nav className='header-main-container'>
        <div className="header-logo-container">
          <img className="header-logo" src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__" alt="logo"/>
          <h1 className="header-logo-name">Chaperone</h1>
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