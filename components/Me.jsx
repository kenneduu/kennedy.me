import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-2xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-gray-700 font-bold">
          me
        </h2>

        <div className="shadow-2xl my-8 px-8 bg-gray-300">
          <p className="py-4 max-w-2xl mx-auto text-lg font-semibold text-black">
            Hi! My name is Kenna and I adore programming. 
          </p>
          <p className="text-bold py-4 max-w-2xl mx-auto text-lg">
            I'm currently a Y13 student studying Computer Science, and to
            no surprise this is something I want to pursue for the rest of my life.
            This is an endeavour I am particularly excited about as we move to 
            Industry 4.0, and I simply cannot wait to be at the core of such a
            revolutionary digital age. As of now, my most primal interest 
            is with both backend and frontend web development using Java 
            and JavaScript packages. I can't wait to learn more!
          

          </p>
          <p className="py-7 max-w-2xl mx-auto text-lg">
            When i'm not programming, I'm travelling or volunteering. 
            In recent years, I've visited an assortment of countries, 
            experiencing an influx of technological cultures - this is something that has 
            undoubtedly made me a better developer and inspired my interest
            in creating software that brings people together. Whilst everywhere
            i've visited has been amazing, Amsterdam, Lisbon, and Vigo remain 
            my favourites! I also volunteer regularly, teaching Computer Science 
            to younger students to avoid digital exclusion and tackle the current
            resources crisis.


          </p>

          <p className="py-3 "></p>
        </div>


      

      </div>
      
      <div className="flex items-center justify-center gap-10">
          <Link href="https://github.com/kenneduu">
            <div className="group flex items-center justify-center my-8 bg-green-200 text-gray-600 px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              My Github
              <span className="-rotate-90">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>


        <Link href='/#portfolio'>
          <div className="group flex items-center justify-center my-8 bg-green-200 text-gray-600 px-4 py-3 font-bold
          uppercase rounded-md tracking-wider cursor-pointer" >
            Revisit my projects 
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-180">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
        </div>

        <p className="py-4 max-w-2xl mx-auto text-center text-gray-700 font-semibold"> This website was
        created using React, Next.JS framework and love, alongside
        support from software developers' guidance  </p>

        <p className="py-4 max-w-2xl mx-auto text-center font text-gray-700 text-xs"> 
        The images you see on this page are royalty-free. No regulations have been broken. 
        Some images are placed temporarily until more representative ones can be sourced.  </p> 
      </div>

      
  );
};

export default Me;
