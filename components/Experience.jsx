import Image from 'next/image';
import React from 'react';
import css from '../public/assets/css.png';
import github from '../public/assets/github.png';
import html from '../public/assets/html.png';
import java1 from '../public/assets/java1.png';
import jira from '../public/assets/jira.png';
import js from '../public/assets/js.png';
import jsreact from '../public/assets/jsreact.png';
import next from '../public/assets/next.png';
import tailwind from '../public/assets/tailwind.png';
import spring from '../public/assets/spring.png';
import rest from '../public/assets/rest.png';
import python1 from '../public/assets/python1.png';
import django from '../public/assets/django.png';
import tensorflow from '../public/assets/tensorflow.png';
import sqlite from '../public/assets/sqlite.png';
import h2 from '../public/assets/h2.png';



const Experience = () => {

  const experiences = [
  {
    id: 1,
    title: 'CSS',
    src: css
  },

  {
    id: 2,
      title: 'HTML',
      src: html
  },

  {
    id:3,
    title:'JavaScript',
    src: js
  },
  {
    id:4,
    title: 'JavaScript React',
    src: jsreact
  },
  {
    id: 5,
    title: 'Next.js',
    src: next
  },
  {
    id:6,
    title: 'Tailwind CSS',
    src: tailwind
  },
  {
    id: 7,
    title: 'Github',
    src: github
  },
  {
    id: 8,
    title: 'Jira',
    src: jira
  },
  {
    id: 9,
    title: 'Java',
    src: java1
  },
  {
    id:10,
    title:'Spring',
    src: spring,
  },
  {
    id:11,
    title: 'REST',
    src: rest,
  },
  {
    id:12,
    title: 'Python',
    src: python1
  },
  {
    id: 13,
    title: 'Django',
    src: django
  },
  {
    id:14,
    title: 'TensorFlow',
    src: tensorflow
  },
  {
    id:15,
    title:'SQLite',
    src: sqlite
  },
  {
    id:16,
    title: 'H2 DMS',
    src: h2
  },
  ]
  
  return <div id="experience" className="w-full">
    <div className="max-w-screen-2xl mx-auto px-8 py-16 text-center
        md:text-left bg-gray-300">

            <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-gray-700
            font-bold"> Experience </h2>
            <p className="text-center font-semibold py-4"> The curation of projects listed above
            have equipped me with a repository of skills that any developer would treasure. Listed below are these 
            competencies - I do still have a lot to learn though!
            </p>

            <div className="grid lg:grid-cols-4 gap-8">

              {
                experiences.map(({id, title, src}) => (

                  <div 
                  key={id} 
                  className="flex flex-col
                  lg:flex-row gap-10 lg:gap-0 items-center justify-between
                  p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
                  odd:shadow-black even:shadow-black">

                    <Image src={src} width='64px' height ='64px' alt =
                    {title} />
                    <h3 className="font-normal">{title}</h3>
                     
                     
                     
                 </div>
                ))
              }

            </div>
    </div>
  </div>
}

export default Experience
