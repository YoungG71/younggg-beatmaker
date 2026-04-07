import React from 'react';
import { musicData } from '../musicData';
import { Disc } from 'lucide-react';

const Discography = () => {
  // Sorting logic: Newest to Oldest based on 'year'
  const sortedAlbums = [...musicData].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <section className="py-32 px-4 min-h-screen bg-west-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-16">
          <Disc className="w-10 h-10 text-west-gold mr-4 animate-spin-slow" />
          <h2 className="text-5xl md:text-7xl text-center text-west-gold drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]">
            Full Discography
          </h2>
          <Disc className="w-10 h-10 text-west-gold ml-4 animate-spin-slow" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedAlbums.map((album) => (
            <div 
              key={album.id} 
              className="group relative bg-black border-4 border-west-gold rounded-lg overflow-hidden shadow-[0_0_15px_rgba(184,134,11,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all duration-300"
              style={{ backgroundColor: '#000000' }}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-west-gold z-20"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-west-gold z-20"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-west-gold z-20"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-west-gold z-20"></div>

              {/* Release Year Label - West Coast Style */}
              <div className="bg-black border-b-2 border-west-gold/50 p-4 text-center relative z-10">
                <h2 className="year-title" style={{
                    color: '#D4AF37',
                    fontFamily: '"Cinzel", serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.2em',
                    textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                    margin: 0
                }}>
                  {album.year}
                </h2>
              </div>
              
              {/* Spotify Embed */}
              <div className="w-full bg-black p-2">
                <div className="spotify-wrapper">
                    <iframe 
                      src={`https://open.spotify.com/embed/${album.type || 'album'}/${album.spotifyId}?utm_source=generator&theme=0`} 
                      width="100%" 
                      height="352" 
                      frameBorder="0" 
                      allowFullScreen="" 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                      loading="lazy"
                      className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                      style={{ borderRadius: '12px', backgroundColor: '#000' }}
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

export default Discography;
