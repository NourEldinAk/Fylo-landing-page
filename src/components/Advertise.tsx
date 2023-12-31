import side_photo from '/images/illustration-stay-productive.png'
import icon_arrow from '/images/icon-arrow.svg'

const Advertise = () => {
  return (
    <div className='text-white grid grid-cols-2 place-items-center p-10 max-[1100px]:grid-cols-1'>
      <div>
        <img src={side_photo} alt="Pic" />
      </div>
      <div className='grid gap-4 w-[69%] max-[1100px]:w-full mr-14 max-[1100px]:pt-12 max-[1100px]:mx-auto'>
        <h1 className='text-4xl font-bold w-[70%] max-[1100px]:w-full max-[1100px]:text-2xl leading-[40px]'>Stay productive, wherever you are</h1>
        <p className='opacity-80'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p className='opacity-80'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. </p>
        <a  className='hover:brightness-200 cursor-pointer'><span className='text-outerCyan border-b border-outerCyan pb-3 hover:text-white 
        hover:border-white '>
          See how Fylo works
          <img src={icon_arrow} alt="arrow"  className='inline ml-1'/>
           </span></a>
      </div>
    </div>
  )
}

export default Advertise