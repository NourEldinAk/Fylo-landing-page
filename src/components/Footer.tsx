import address_icon from '/images/icon-location.svg'
import email_icon from '/images/icon-email.svg'
import phone_icon from '/images/icon-phone.svg'
import logo_icon from '/images/logo.svg'


const Footer = () => {
  return (
    <div className='bg-darkBlue3 px-20 py-15 pt-40 relative w-full '>

    <div className='footer  flex flex-col py-20  gap-10 '>
      <div className="logo ml-24 max-[1100px]:ml-0">
        <img src={logo_icon} alt="Logo" />
      </div>
      <div className='grid grid-cols-[25%,15%,12%,12%,10%] max-[1100px]:grid-cols-1 gap-20 text-white ml-24 max-[1100px]:ml-0'>
        <div className="address flex  items-start gap-5">
          <img src={address_icon} alt="address" />
          <p className='opacity-75'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className="contact flex flex-col gap-5">
          <div className='flex items-start  gap-5'>
          <img src={phone_icon} alt="phone" />
          <span className='opacity-75'>+1-543-123-4567</span>
          </div>
          <div className='flex items-start gap-5'>
          <img src={email_icon} alt="email" />
          <span className='opacity-75'>example@fylo.com</span>
          </div>
        </div>
        <div className="list">
          <ul className='flex flex-col gap-3'>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="list2">
          <ul className='flex flex-col gap-3'>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="flex items-start gap-3">
        <i className="fa-brands fa-facebook-f hover:text-blue-600 cursor-pointer hover:border-blue-600 text-[12px] border-[1px] border-white rounded-full w-[25px] h-[25px] flex items-center justify-center " ></i>
          
        <i className="fa-brands fa-twitter hover:text-outerCyan text-[12px] border-[1px] border-white hover:border-outerCyan cursor-pointer rounded-full w-[25px] h-[25px] flex items-center justify-center" ></i>
          
          
        <i className="fa-brands fa-instagram hover:text-red-400 hover:border-red-400 cursor-pointer
         text-[12px] border-[1px] border-white rounded-full
          w-[25px] h-[25px] flex items-center justify-center" ></i>
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer