import address_icon from '/images/icon-location.svg'
import email_icon from '/images/icon-email.svg'
import phone_icon from '/images/icon-phone.svg'
import logo_icon from '/images/logo.svg'



const Footer = () => {
  return (
    <div className='footer bg-darkBlue3 flex flex-col py-20  gap-10 mx-auto '>
      <div className="logo">
        <img src={logo_icon} alt="" />
      </div>
      <div className='grid grid-cols-5 text-white w-[1200px] items-center mx-auto '>
        <div className="address flex  items-start gap-3">
          <img src={address_icon} alt="address" />
          <p className='opacity-75'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className="contact flex flex-col gap-5">
          <div className='flex items-start  gap-4'>
          <img src={phone_icon} alt="phone" />
          <span className='opacity-75'>+1-543-123-4567</span>
          </div>
          <div className='flex items-start gap-4'>
          <img src={email_icon} alt="email" />
          <span className='opacity-75'>example@fylo.com</span>
          </div>
        </div>
        <div className="list">
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="list2">
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="social-media">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer