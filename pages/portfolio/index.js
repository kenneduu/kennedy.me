import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { MdExpandMore } from 'react-icons/md';

import Language1 from '../../public/assets/java.png';
import Language2 from '../../public/assets/python.png';
import Language3 from '../../public/assets/react.png';
import Language4 from '../../public/assets/spring-boot.png';

export const getStaticProps = async () => {
    const portfolios = [
        {
            id: 1,
            title: 'Java Spring Communication Platform for Women in STEM',
            imageSrc: Language4,
            url: "spring-app",
        },
        {
            id: 2,
            title: 'Django Web Application for Computer Scientists',
            imageSrc: Language2,
            url: "python-app",
        },
        {
            id: 3,
            title: 'Personal JS React Resume',
            imageSrc: Language3,
            url: "react-app",
        },
        {
            id: 4,
            title: 'Java Intensive Collection',
            imageSrc: Language1,
            url: "java-app",
        },
    ];

    return {
        props: {portfolios}
    }
}

const DepthPortfolio  = ({portfolios}) => {
    
    return (
        <div id="portfolio" className="w-full">
          <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center">
          <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-gray-700
            font-bold pb-16"> Portfolio </h2>

            <p className="pb-10 text-2xl text-gray-800 font-bold underline"> This page is currently in development! </p>


    
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {portfolios.map(({ id, title, imageSrc, url }) => (
                <Link key={id} href={`/portfolio/${url}`}>
                  <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                    <Image
                      src={imageSrc}
                      alt={title}
                      className="rounded-md duration-200 
                      hover:scale-110"
                    />
                    <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                      {title}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
    )
}

export default DepthPortfolio