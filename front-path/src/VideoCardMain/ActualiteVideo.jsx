import React, { useEffect, useState } from 'react';
import { getVideos } from '../../api/articles'; // ← import

const VideoCard = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos();
        setVideos(data);
      } catch (err) {
        console.error("Erreur chargement vidéos", err);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (loading) return <p className="text-center text-white py-8">Chargement des vidéos...</p>;
  if (videos.length === 0) return null;

  return (
    <div className="w-full py-12 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className="groupe relative bg-gradient-to-br from-slate-400 to-slate-700 rounded-2xl border-2 border-white/50 overflow-hidden shadow-xl hover:shadow-xl hover:-transition-y-2 transition-all duration-100"
          >
            <div className="relative h-full md:h-66 bg-gray-800 overflow-hidden">
              <video
                src={`${import.meta.env.VITE_API_URL}/uploads/videos/${video.video}`}
                className='w-full h-full object-cover'
                preload='metadata'
                controls
              />
            </div>
            <div className="p-5 md:p-6 bg-slate-500">
              <h4 className='text-lg font-bold text-white mb-2 md:text-2xl transition-colors'>
                {video.content}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCard;