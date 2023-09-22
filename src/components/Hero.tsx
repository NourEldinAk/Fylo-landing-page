import Logo from '/images/logo.svg'
import files_photo from '/images/illustration-intro.png'
import curvy_bg from '/images/bg-curvy-desktop.svg'

const Hero = () => {
  return (
    <div className="bg-darkBlue text-white h-full w-full  py-14 relative">

      <nav className='flex justify-between px-8  items-center '>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className='flex gap-10 mr-10'>
        <li>Features</li>
        <li>Team</li>
        <li>Sign in</li>
        </ul>
      </nav>
      <div className="flex flex-col w-full  items-center px-8 relative z-10">
        <img src={files_photo} alt="" />
        <div className="flex flex-col gap-6 items-center w-[550px] text-center mt-5 mb-14">
          <h1 className='text-3xl  font-bold leading-[40px]'>All your files in one secure location, accessible anywhere</h1>
          <p className='px-14  tracking-wide opacity-80 '>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
          <button className='bg-outerCyan  rounded-full py-3 text-xl w-2/5'>Get Started</button>
        </div>
      </div>
      <div className='absolute position-curve  z-0 '>
      <img  src={curvy_bg} width={1500} alt="curvy_bg" />
    </div>
      </div>
  )
}

export default Hero