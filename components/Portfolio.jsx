import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { MdExpandMore } from 'react-icons/md';

import Language1 from '../public/assets/java.png';
import Language2 from '../public/assets/python.png';
import Language3 from '../public/assets/react.png';
import Language4 from '../public/assets/spring-boot.png';

const Portfolio = () => {


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
    

  return (
    <div id= "portfolio" className="w-full">
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center">

            <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-gray-700
            font-bold"> Portfolio </h2>
            <p className=" text-center py-4 font-semibold"> I've been programming for around 7 years now - during
            this time, I've collated a number of projects that best showcase my skills and adoration
            for developing. The projects you see may not be finished yet, as student life is very busy!
            However, the depth covered in each is substantial for further application.
            </p>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2
            gap-8">

            {portfolios.map(({id, title, imageSrc, url}) => (
                <Link key={id} href={`/portfolio/${url}`}>

                

                    <div className="group-shadow-md
                    shadow-gray-600 overflow-hidden rounded-md max-h-70 max-w-80">
                        <Image src={imageSrc} alt={title} className="rounded-md
                        duration200 hover:scale-110" />

                     <h2 className="text-center text-base
                     capitalize my-4 duration-200 group-hover:underline-offset-4"> 
                     {title}</h2> 

                      
                        
                    </div>
                    </Link>

                

            ))} 

            </div>
            </div>
        </div>
    )
    }

    export default Portfolio;