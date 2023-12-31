import {useState} from 'react'

const EarlyAccess = () => {
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(false)

  const checkEmail = ()=>{
    if(!email.includes('@') && !email.includes('.') ){
      setIsValid(true)
    }else{
      setIsValid(false)
    }
  }

  return (
    <div className="bg-darkBlue flex flex-col items-center
     justify-center text-white w-[800px] max-[1100px]:w-[400px] h-[260px] max-[1100px]:h-[330px]
     gap-5 text-center shadow-box absolute bottom-[-300px] max-[1100px]:bottom-[-400px]
      z-50">
        <h1 className="text-3xl font-semibold max-[1100px]:text-2xl">Get early access today</h1>
        <p className="opacity-75 px-20">It only takes a minute to sign up and our free starter tier is extremely generous. if you have any questions, our support team would be happy to help you</p>
      <div className="flex items-start gap-5 w-full px-20 mt-4 max-[1100px]:flex-col">
       <div className='w-full flex flex-col gap-2'>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email@example.com" className="bg-white text-black rounded-full w-full px-10 py-3" />
        {isValid && <span className='text-outerRed font-bold text-xs text-start ml-5'>Please enter a valid email address</span>}
       </div>
       
        <span  className='bg-white rounded-full w-2/5 max-[1100px]:w-full'>
            < button 
            onClick={checkEmail}
            className='bg-gradient-to-r from-outerCyan
             to-outerBlue hover:opacity-60 
            rounded-full py-4 px-4 text-sm w-full font-bold'>Get Started For Free</button>
            </span>
      </div>

    </div>
  )
}

export default EarlyAccess