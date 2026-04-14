import React from 'react';
import { FaPlay, FaClock, FaEye } from 'react-icons/fa';
import TestVideo from "../../assets/test.mp4" 

const VideoCard = () => {
  const Video = [
    {
        id : 1,
        videoUrl : TestVideo, 
        decription : "Maîtrisez l'art de la prise de parole avec ces outils essentiels de communication.",
    },
     {
        id : 2, 
        videoUrl : TestVideo,
        decription :"Tu veux te lancer dans le dev ? Voici les fondamentaux pour bien démarrer ta carrière.",
    },
     {
        id : 3, 
        videoUrl : TestVideo,
        decription :"Découvrez les techniques éprouvées pour optimiser vos révisions et réussir vos examens.",
    }
  ]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full py-12 px-4 md:px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-3">
             {
                Video.map((video) => ( 
                    <div 
                    key={video.id}
                    className="groupe relative bg-gradient-to-br from-slate-400 to-slate-700 rounded-2xl border-2 border-white/50 overflow-hidden shadow-xl hover:shadow-xl hover:-transition-y-2 transition-all duration-100">
                       <div className="relative h-full md:h-66 bg-gray-800 overflow-hidden">
                        <video 
                        src={video.videoUrl}
                        className='w-full h-full object-cover'
                        preload='metadata'
                        controls 
                        />
                        
                       </div>
                       <div className="p-5 md:p-6 bg-slate-500 ">
                            <h4 className=' text-lg font-bold text-white mb-2 md:text-2xl transition-colors '>
                                {video.decription}
                            </h4>
                       </div>
                    </div>
                ))
             }
         </div>
    </div>
  );
};

export default VideoCard;
