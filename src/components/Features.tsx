import Feature1 from '/images/icon-access-anywhere.svg'
import Feature2 from '/images/icon-security.svg'
import Feature3 from '/images/icon-collaboration.svg'
import Feature4 from '/images/icon-any-file.svg'


const Features = () => {
  return (
    <>
    <div className="bg-darkBlue2 h-full w-[100%] py-14 relative mt-40">

    <div className='h-full text-white w-[70%] gap-14 mx-auto
     bg-darkBlue2 grid grid-cols-2 max-[1100px]:features-mobile-container items-center text-center z-20 relative grid-container'>
      <div className='mx-10 '>
        <img src={Feature1} alt="Feature1" className='mx-auto mb-8' />
        <h1 className='heading'>Access your files, anywhere</h1>
        <p className='opacity-80'>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
      </div>
      <div className='mx-10 '>
        <img src={Feature2} alt="Feature2" className='mx-auto mb-8 ' />
        <h1 className='heading'>Security you can trust</h1>
        <p className='opacity-80'>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
      </div>
      
      <div className='mx-10'>
        <img src={Feature3} alt="Feature3" className='mx-auto mb-8'/>
        <h1 className='heading'>Real-time collaboration</h1>
        <p className='opacity-80'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
      </div>
      <div className='mx-10'>
        <img src={Feature4} alt="Feature4" className='mx-auto mb-8'/>
        <h1 className='heading'>Store any type of file</h1>
        <p className='opacity-80'>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Features