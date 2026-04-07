import React from 'react';
import { artistData } from '../artistData';
import { Disc, Play } from 'lucide-react';

const MusicVault = () => {
  return (
    <section className="py-20 px-4 bg-west-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-16">
          <Disc className="w-10 h-10 text-west-gold mr-4 animate-spin-slow" />
          <h2 className="text-5xl md:text-7xl text-center text-west-gold font-gothic drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]">
            Music Vault
          </h2>
          <Disc className="w-10 h-10 text-west-gold ml-4 animate-spin-slow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artistData.albums.map((album) => (
            <div key={album.id} className="group relative bg-west-black border-4 border-west-gold-dark rounded-lg overflow-hidden shadow-[0_0_15px_rgba(184,134,11,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all duration-300 transform hover:-translate-y-2">
              {/* Chrome/Gold Plate Effect */}
              <div className="absolute inset-0 border-2 border-white/10 pointer-events-none rounded-lg z-20"></div>
              
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={album.cover} 
                  alt={album.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-16 h-16 text-west-gold fill-west-gold" />
                </div>
              </div>

              <div className="p-6 bg-gradient-to-b from-gray-900 to-black relative">
                <h3 className="text-2xl text-west-gold mb-2 font-gothic">{album.title}</h3>
                <p className="text-gray-400 font-sans mb-4">{album.year}</p>
                
                {/* Spotify Embed */}
                <div className="w-full rounded-md overflow-hidden border border-west-gold/30">
                  <iframe 
                    style={{borderRadius: '12px'}} 
                    src={`https://open.spotify.com/embed/album/${album.spotifyId}?utm_source=generator&theme=0`} 
                    width="100%" 
                    height="80" 
                    frameBorder="0" 
                    allowFullScreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicVault;
