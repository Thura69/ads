import React from 'react'
import LogoOne from '../../assets/images/cta-logo-one.svg';
import LogoTwo from '../../assets/images/cta-logo-two.png';



function Login() {
  return (
      <section
          className='
           overflow-hidden
           flex
           flex-col
           items-center
           justify-center
           h-[100svh]
          '>
          <div
              className='
              mb-[10px]
              w-full
              relative
              min-h-[100svh]
              flex
              justify-center
              items-center
              flex-col
              p-[20px]
              '>
              <div className=' max-w-[650px] w-full  flex flex-col flex-wrap  justify-center items-center text-center mx-auto  transition-opacity'>
                <img src={LogoOne} className=' w-auto lg:max-w-[500px] lg:mb-[24px] min-h-[100px] block ' alt='logo'/>
                <button className='w-full bg-blue-700 rounded-md hover:bg-blue-800 text-white p-[15px] tracking-wider font-bold text-[14px] lg:text-[18px]'><h3>GET ALL HERE</h3></button>
                <p className=' text-slate-300  text-[13px] lg:text-[18px] lg:leading-6  tracking-wider mt-[24px] leading-5'>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.As of 03/26/24, the price of Disney+ and The Disney Bundle will increase by $1 </p>
                 <img src={LogoTwo} className='max-w-auto min-h-auto mt-[24px] mb-[24px] block ' alt='logo'/>
              </div>
              <div className='loginBg'></div>
              </div>
    </section>
  )
}

export default Login
