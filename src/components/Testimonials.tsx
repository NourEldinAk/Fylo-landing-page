import profile1 from '/images/profile-1.jpg'
import profile2 from '/images/profile-2.jpg'
import profile3 from '/images/profile-3.jpg'
import quotes from '/images/bg-quotes.png'
import { EarlyAccess } from '.'

const Testimonials = () => {
  return (
    <div className="grid grid-cols-3 max-[1100px]:grid-cols-1 max-[1100px]:gap-7 place-items-center relative text-white w-[1200px] max-[1230px]:w-full mx-auto px-10 py-20  mb-60 max-[1100px]:mb-80 ">
      <div className=" bg-darkBlue4 p-6 pt-10 grid gap-6 w-[350px] relative z-20">
        <p className='opacity-80 relative '>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div className='flex gap-4  items-center shadow-2xl relative'>
          <img src={profile1} width={30} alt="profile" className='rounded-full'/>
          <div className='flex flex-col'>
            <p className='font-bold text-sm'>Satish Patel</p>
            <span className='opacity-80 text-xs'>Founder & CEO, Huddle</span>
          </div>
        </div>
      </div>
      <div className=" bg-darkBlue4 p-6 pt-10 grid gap-6 w-[350px] relative">
      <img className='absolute max-[1100px]:position-mobile min-[1100px]:position-desktop z-0' src={quotes} alt="quotes" />
        
        <p className='opacity-80'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. </p>
        <div className='flex gap-4  items-center shadow-2xl'>
          <img src={profile2} width={30} alt="profile" className='rounded-full'/>
          <div className='flex flex-col'>
            <p className='font-bold text-sm'>Bruce McKenzle</p>
            <span className='opacity-80 text-xs'>Founder & CEO, Huddle</span>
          </div>
        </div>
      </div>
      <div className=" bg-darkBlue4 p-6 pt-10 grid gap-6 w-[350px]">
        <p className='opacity-80'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div className='flex gap-4  items-center shadow-2xl'>
          <img src={profile3} width={30} alt="profile" className='rounded-full' />
          <div className='flex flex-col'>
            <p className='font-bold text-sm '>Iva Boyd</p>
            <span className='opacity-80 text-xs'>Founder & CEO, Huddle</span>
          </div>
        </div>
      </div>
      <EarlyAccess/>

    </div>
  )
}

export default Testimonials