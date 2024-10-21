import {InstagramLogo, FacebookLogo, ThreadsLogo, YoutubeLogo,LinkedinLogo} from '@phosphor-icons/react'
import './index.css'


const Footer = () => {
  return(
    <div className='footer-container'>
      <div className="sub-container">
        <div className='footer-input-container'>
          <h1>SUBSCRIBE TO OUR <br/> NEWSLETTER</h1>
          <p className='sub-text-content'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
          <input className='footer-input' type="text" placeholder='Enter Your Email Address'/>
          <button className='footer-sub-button'>SUBSCRIBE</button>
        </div>
        <section className='section-container'>
          <h1>ABOUT US</h1>
            <p>Our Story</p>
            <p>Blogs</p>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>Help & Support</p>
          
        </section>
        <section  className='section-container'>
          <h1>OUR SERVICES</h1>
        
            <p>My Account</p>
            <p>Orders & Returns</p>
            <p>Track Order</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Return, Refund & Replacement Policy</p>
        
        </section>
        <section  className='section-container'>
          <h1>USEFUL LINKS</h1>
        
            <p>Our Story</p>
            <p>Blogs</p>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>Help & Support</p>
        
        </section>
        <section  className='section-container'>
          <h1>GET IN TOUCH</h1>
          
            <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
            <p>Call: <br/> +919958287272</p>
            <p>Email: <br/> care@chaperoneplants.com</p>
          
        </section>
      </div>
      <div className='sub-container-2'>
        <h1>CHAPERONE</h1>
        <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
        <h1>Follow us on</h1>
        <div>
          <InstagramLogo size={32} />
          <FacebookLogo size={32} weight="fill" />
          <ThreadsLogo size={32} weight="fill" />
          <YoutubeLogo size={32} weight="fill" />
          <LinkedinLogo size={32} weight="fill" />
        </div>
      </div>
      <hr/>
      <p className='footer-last-text'>© 2023, chaperone.com All rights reserved.</p>
    </div>
  )
}

export default Footer