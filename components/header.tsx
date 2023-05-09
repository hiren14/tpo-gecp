import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold py-5 px-10'>
            <div className='flex items-center space-x-2'>
                <Link href={"/"} >
                    <img src={"./profile-pic.png"} className="rounded-full" width={50} height={50} alt="TNP"/>
                </Link>
                <h1>TNP GECPATAN</h1>
            </div>

            <div>
                <Link href={'https://www.linkedin.com/company/gec-patan/'}  target="_blank" className="px-5 py-3 text-xs sm:text-sm md:text-base  bg-gray-700 text-[#0ACBCB] flex items-center rounded-full text-center hover:bg-gradient-to-tr from-teal-400 via-violet-600 to-yellow-200 hover:text-white hover:shadow-2xl">Visit </Link>
            </div>
        </header>
    )
}

export default Header