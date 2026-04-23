import React, { useEffect, useState } from 'react';
import { getVideos } from '../../api/articles';

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
    <div className="w-full py-16 px-4 md:px-6">
      {/* TITRE SECTION */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-1 h-8 bg-cyan-400 rounded-full"></div>
        <h2 className="text-3xl font-bold text-white">Vidéos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            {/* LECTEUR VIDÉO */}
            <div className="relative overflow-hidden bg-black">
              <video
                src={`${import.meta.env.VITE_API_URL}/uploads/videos/${video.filename}`}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                preload="metadata"
                controls
              />
              {/* Overlay gradient subtil en bas de la vidéo */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
            </div>

            {/* INFOS */}
            <div className="p-5 space-y-3">
              {/* Catégorie badge */}
              <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                Vidéo
              </span>

              {/* TITRE */}
              <h3 className="text-white font-bold text-lg leading-snug group-hover:text-cyan-300 transition duration-300 line-clamp-2">
                {video.titre}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                {video.description}
              </p>

              {/* SÉPARATEUR */}
              <div className="border-t border-slate-700/60 pt-3">
                <div className="flex items-center justify-between">
                  {/* AUTEUR */}
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-slate-600 flex items-center justify-center text-white text-xs font-bold">
                      {video.pseudo?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-slate-400 text-xs font-medium">{video.pseudo}</span>
                  </div>
                  {/* DATE */}
                  <span className="text-slate-500 text-xs">
                    {new Date(video.createdAt).toLocaleDateString('fr-FR')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCard;