import React from 'react'
import heroImage from '../public/assets/kenna.png';
import {MdExpandMore} from 'react-icons/md';
import Image from 'next/image';
import Link from "next/link";


const Homepage = () => {
  return (
    
      <div className="max-w-screen-2xl mx-auto w-full h-full pt-24 
        p-4 flex flex-col justify-around items-center bg-gray-400"> 
        <div className="w-55 h-65 max-w-none overflow-hidden rounded-3xl"> 
          <Image src={heroImage} alt="Kennedy"/>
        </div>

        <h1 className="uppercase font-bold text-gray-700 text-7xl"> Aspiring Developer </h1>

        <h2 className = "text-gray-900 text-xl max-w-sm mx-auto font-bold text-center">
          I'm Kennedy, a student Computer Scientist ready for the industry! </h2>

        <Link href='/#me'>
          <div className="group flex items-center justify-center my-8 bg-green-200 text-gray-600 px-6 py-3 font-bold
          uppercase rounded-md tracking-wider cursor-pointer">
            know more 
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
          
        </Link>

        <p className='text-center'> Please Note: This website is constantly changing, as my own skills progress
- make sure to check back regularly for the latest developments.
</p>
        </div>

  )
}

export default Homepage