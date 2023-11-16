import React from 'react'

export default function Quote() {
  return (
    <div className='quote bg-[#1F2632] h-[100vh] grid place-items-center '>
        <div className="quote-body bg-[#323A49] h-[40vh] w-[35vw] shadow-2xl mt-[-50px] rounded-3xl text-center">
            
            {/* title */}
            <div className='quote-title text-[#52FFA8] font-extrabold uppercase mt-14 mb-6 tracking-[0.25em]'>ADVICE #117</div>

            {/* quote */}
            <div className='quote-text text-white text-[28px] font-extrabold px-8'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, id dolor alias ducimus aspernatur, nisi officia eius culpa fugiat reiciendis nam, quam atque."</div>

            {/* divider */}
            <div className="inline-flex items-center justify-center w-full mt-16">
                <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
            </div>

        </div>
    </div>
  )
}
