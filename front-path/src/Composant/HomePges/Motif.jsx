import React from 'react'
import { CiSun } from "react-icons/ci";
import { MdOutlineBolt } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";

const Motif = () => {
    const MotifCard =  [
        {
            num: "01",
            icon : (<CiSun className='' />
),
             title: "innovation",
             description: "Nous croyons en l'innovation comme moteur de changement et de progrès."
        },
        {
           num: "02",
            icon : (<MdOutlineBolt className='' />),
            title: "le pragmatisme",
                description: "Nous croyons en une approche pragmatique pour résoudre les défis technologiques et éducatifs."
        },
        {
            num: "03",
            icon : (<FaUserGraduate className='' />),
            title: "la communauté",
            description: "Nous valorisons la force de la communauté pour partager des connaissances, des expériences et des opportunités."
        }
    ]
    
  return (
    <>
       <div className='flex flex-col w-full h-full bg-gray-950 border-2 border-teal-200 mt-10 rounded-2xl justify-center items-center gap-5 p-9 shadow shadow-emerald-500 '>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
        Notre vision
      </p>
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">
        Les valeurs de{" "}
        <span className="text-emerald-600">LE TORCH</span>
      </h1>
      <p className="text-sm text-gray-500 font-light mb-8">
        Ce en quoi nous croyons profondément
      </p>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 gap-6  dark:border-gray-700 rounded-xl overflow-hidden">
            {
                MotifCard.map((item,index) => (
                   <div
                    key={index}
                     className="relative bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors p-6 group gap-6 rounded-3xl ">
                        <h1 className='border border-teal-200 rounded-4xl w-14 text-black bg-white text-center p-4'>{item.num}</h1>
                        <div className="text-4xl text-emerald-600 mb-4 mt-10">
                            {item.icon}
                        </div>
                        <h2 className="text-xl font-bold mt-6 text-gray-900 dark:text-white">
                            {item.title}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            {item.description}
                        </p>
                   </div>
                ))}
        </div>

       </div>
    </>
  )
}

export default Motif
