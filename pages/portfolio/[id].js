import { useRouter } from "next/router";
import React from 'react'

import Language1 from '../../public/assets/java.png';
import Language2 from '../../public/assets/python.png';
import Language3 from '../../public/assets/react.png';
import Language4 from '../../public/assets/spring-boot.png';

import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";


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


const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}




const SinglePortfolio = ({ portfolio: { title, imageSrc } }) => {

  return ( 
  <div className="h-fit w-full text-center">
    <div className="max-w-screen-xl mx-auto w-full h-full pt-24
    p-8 flex flex-col">
        <div className="flex"> 
           <Link href = '/portfolio'>
             <div className="flex items-center justify-center my-8 
        text-indigo-500 font-bold capitalize cursor-pointer">
            <BiChevronLeft size={25} /> back
             </div>
            </Link>
         </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center
          md:text-left font-bold text-gray-600 tracking-wider">
            {title}
        </h1>

        <div className="relative w-96 h-56 mx-auto overflow-hidden
        my-8">

            <Image src = {imageSrc} alt='lang' layout="fill" 
            objectFit="cover" />
         </div>

         <h2 className="text-center md:text-left my-4 text-2xl
         font-bold"> Description </h2>

         <p >
          Accusam sea sadipscing eos dolor duo erat lorem sadipscing dolor, sit et sit nonumy magna est gubergren, ipsum eos eos dolores ipsum eirmod. No sed invidunt ut no at vero justo rebum lorem. Sit diam tempor sit sanctus dolores aliquyam stet, consetetur kasd magna erat eos vero sea, clita kasd sit eirmod clita vero, no sadipscing gubergren dolor nonumy at vero sed rebum. Accusam ea sanctus elitr et at elitr lorem et, dolor nonumy et eirmod sadipscing et, gubergren stet stet duo aliquyam dolore duo dolore eos sed. Sit takimata clita amet kasd amet. Tempor clita no diam dolor. Dolor. 
        </p> 
    </div>
 </div>
  )
}

export default SinglePortfolio; 
