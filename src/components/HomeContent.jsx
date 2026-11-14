import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, Disc, Sparkles, Flame, Shield, ArrowRight, ExternalLink, Play, ShoppingCart, Award } from 'lucide-react';
import { artistData } from '../artistData';
import { useLanguage } from '../context/LanguageContext';
import AudioPlayer from './AudioPlayer';
import LazyEmbed from './LazyEmbed';

// Selection of top 3 featured beats for instant preview on home page
const featuredBeatIds = ["126", "136", "192"];

// Complete list of all 12 official YouTube productions by Young G
const featuredVideos = [
  { id: "BV-e07Nsu5E", title: "Young G feat. Jknuckles & Poison - I Said Biatch" },
  { id: "9Wr_qtoQ3iY", title: "J Knuckles feat. Mr Gauge - Ride It Out Tonight (Prod. by Young G)" },
  { id: "e5D7_yqw8GA", title: "Enois Scroggins - It's On Tonight (Prod. by Young G)" },
  { id: "MqGRD0DBUS4", title: "Ese Script Loc - Mission Unstoppable (Prod. by Young G)" },
  { id: "jSKb_PgoWbQ", title: "Tony G feat. Trigga Man & Yung Eazy - The Left Blow (Prod. by Young G)" },
  { id: "TcfcXBZVY2c", title: "Mr Seven - Hip Hop Bricks Remix (Prod. by Young G)" },
  { id: "h7h9XVpO6K0", title: "Tony G feat. DannyBoy - Keep Your Head Up" },
  { id: "ijg9UOOSgis", title: "Miss Lady Pinks - Murder She Wrote (Prod. by Young G)" },
  { id: "3Z0n6LI5Hyw", title: "Miss Lady Pinks - Grew Up In The 90's (Prod. by Young G)" },
  { id: "MOFjWbiaos4", title: "Mr Capone-E - FREE PALESTINE (Prod. by Young G)" },
  { id: "_BchdHYhpZ0", title: "Young G - West Coast Bomb (feat. Kokane, Dre'sta, BG Knocc Out...)" },
  { id: "t4RV3xg_dhg", title: "Tony G feat. Mistah Manndoe & Espee - Haterz (Prod. by Young G)" },
];

const soundBadges = [
  "Smooth Analog Synths",
  "Heavy 808 & Moog Bass",
  "Authentic Talkbox Vibes",
  "West Coast Whistle",
  "90s Boom Bap Drums",
  "California Sunset Chords",
];

const HomeContent = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const triplePack = artistData.shop.find(item => item.id === 207);
  const upTheLevelCD = artistData.shop.find(item => item.id === 204);
  const doublePack = artistData.shop.find(item => item.id === 203);

  return (
    <div className="relative z-10 space-y-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* ============================================================ */}
      {/* SECTION 1: FEATURED BEATS (Instant listen & quick convert) */}
      {/* ============================================================ */}
      <section id="featured-beats-section" className="bg-black/85 border border-west-gold/40 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.9)]">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-west-gold/40 mb-3 backdrop-blur-md">
            <Flame className="w-4 h-4 text-west-orange" />
            <span className="text-west-gold text-xs font-sans font-bold tracking-widest uppercase">
              {t.home.exclusiveCatalog}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-brand tracking-wider text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {t.home.latestBeats} <span className="gold-shimmer-text">{t.home.featuredBeatsSpan}</span>
          </h2>
          <p className="mt-3 text-gray-300 font-sans max-w-2xl mx-auto text-sm sm:text-base">
            {t.home.featuredBeatsDesc}
          </p>
        </div>

        {/* 3 Featured Beats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {featuredBeatIds.map((id) => (
            <div
              key={id}
              className="bg-black/80 border-2 border-west-gold/50 rounded-2xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.8)] hover:border-west-gold hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all duration-300 flex flex-col justify-between backdrop-blur-md group"
            >
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800 mb-4">
                  <div className="flex items-center gap-2">
                    <Music className="w-5 h-5 text-west-gold" />
                    <h3 className="font-brand text-2xl tracking-wider text-west-gold">
                      {t.home.exclusiveBeatNum}{id}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-sans text-green-400 font-semibold uppercase tracking-wider">{t.home.available}</span>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
                  </div>
                </div>

                {/* Audio Player Component */}
                <div className="my-2">
                  <AudioPlayer
                    src={`/beats/Instruwest${id}.mp3`}
                    beatId={id}
                  />
                </div>
              </div>

              {/* Card Footer: Price & CTA */}
              <div className="pt-4 mt-4 border-t border-gray-800 flex items-center justify-between gap-3">
                <div>
                  <span className="block text-xs font-sans text-gray-400 uppercase tracking-wider">{t.home.exclusivePrice}</span>
                  <span className="text-2xl font-brand text-white tracking-wider">€80.00</span>
                </div>
                <button
                  onClick={() => {
                    navigate('/beat-store');
                    setTimeout(() => {
                      const input = document.querySelector('input[name="os0"]');
                      if (input) {
                        input.value = `Beat #${id} - `;
                        input.scrollIntoView({ behavior: 'smooth' });
                        input.focus();
                      }
                    }, 150);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-west-gold hover:bg-[#FFE259] text-black font-brand text-lg tracking-wider rounded-lg shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>{t.home.buyNow}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View full store button */}
        <div className="text-center">
          <button
            onClick={() => { navigate('/beat-store'); window.scrollTo(0, 0); }}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-black/60 hover:bg-black/90 text-west-gold border border-west-gold/70 hover:border-west-gold font-brand text-xl tracking-wider backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <span>{t.home.browseMoreBeats}</span>
            <ArrowRight className="w-5 h-5 text-west-gold" />
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: ABOUT YOUNG G & SOUND SIGNATURE */}
      {/* ============================================================ */}
      <section className="bg-black/75 border border-west-gold/40 rounded-3xl p-8 sm:p-12 backdrop-blur-md shadow-[0_0_35px_rgba(0,0,0,0.9)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Stats & Sound Profile */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-west-gold/10 border border-west-gold/30 w-fit">
              <Award className="w-4 h-4 text-west-gold" />
              <span className="text-west-gold text-xs font-sans font-bold tracking-widest uppercase">
                {t.home.producerBadge}
              </span>
            </div>

            <h3 className="text-4xl sm:text-5xl font-brand tracking-wider text-white uppercase leading-tight">
              {t.home.authenticTitle} <span className="gold-shimmer-text">{t.home.authenticSpan}</span> {t.home.authenticSpirit}
            </h3>

            {/* Key Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/60 border border-west-gold/30">
                <span className="block font-brand text-3xl sm:text-4xl text-west-gold tracking-wide">{t.home.statYears}</span>
                <span className="text-xs font-sans text-gray-300 uppercase tracking-wider">{t.home.statYearsSub}</span>
              </div>
              <div className="p-4 rounded-xl bg-black/60 border border-west-gold/30">
                <span className="block font-brand text-3xl sm:text-4xl text-west-gold tracking-wide">{t.home.statExclusive}</span>
                <span className="text-xs font-sans text-gray-300 uppercase tracking-wider">{t.home.statExclusiveSub}</span>
              </div>
              <div className="p-4 rounded-xl bg-black/60 border border-west-gold/30">
                <span className="block font-brand text-3xl sm:text-4xl text-west-gold tracking-wide">{t.home.statFlatRate}</span>
                <span className="text-xs font-sans text-gray-300 uppercase tracking-wider">{t.home.statFlatRateSub}</span>
              </div>
              <div className="p-4 rounded-xl bg-black/60 border border-west-gold/30">
                <span className="block font-brand text-3xl sm:text-4xl text-west-gold tracking-wide">{t.home.statCollabs}</span>
                <span className="text-xs font-sans text-gray-300 uppercase tracking-wider">{t.home.statCollabsSub}</span>
              </div>
            </div>

            {/* Sound Signature Badges */}
            <div>
              <span className="block text-xs font-sans text-gray-400 uppercase tracking-wider mb-2">{t.home.soundSignature}</span>
              <div className="flex flex-wrap gap-2">
                {soundBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-sans text-gray-200 bg-black/70 border border-west-gold/30 rounded-md"
                  >
                    ★ {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Story */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full bg-black/40 border border-gray-800 rounded-2xl p-6 sm:p-8">
            <div>
              <h4 className="text-2xl font-brand text-west-gold tracking-widest uppercase mb-4">
                {t.home.aboutYoungG}
              </h4>
              <p className="text-gray-200 font-sans text-base sm:text-lg leading-relaxed mb-6">
                {t.home.bioText}
              </p>
              <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed border-l-2 border-west-gold pl-4 italic">
                {t.home.quote}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-sans text-gray-400 tracking-wider uppercase">
                {t.home.availableCustom}
              </span>
              <button
                onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                className="px-6 py-2.5 bg-west-gold text-black font-brand text-lg tracking-wider rounded-lg hover:bg-white transition-colors duration-200 cursor-pointer"
              >
                {t.home.contactMe}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: THE STASH / PHYSICAL RELEASES (CDs) */}
      {/* ============================================================ */}
      {triplePack ? (
        <section className="bg-gradient-to-r from-red-950/80 via-black to-red-950/80 border-2 border-red-500/70 rounded-3xl p-8 sm:p-12 shadow-[0_0_40px_rgba(220,38,38,0.3)] relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-amber-500 text-black font-black text-xs sm:text-sm px-6 py-2 rounded-bl-xl shadow-lg uppercase tracking-widest animate-pulse">
            {t.home.blackFridayBadge}
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 justify-between mt-4 sm:mt-0">
            {/* 3 Covers Showcase */}
            <div className="shrink-0 flex flex-col items-center gap-3">
              <div className="flex items-center justify-center gap-2.5 sm:gap-4">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-xl overflow-hidden border-2 border-west-gold shadow-2xl hover:scale-105 transition-all duration-300">
                  <img
                    src={triplePack.image[0]}
                    alt="Up The Level"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/90 py-1 text-center border-t border-west-gold/30">
                    <span className="text-[10px] sm:text-xs font-brand text-west-gold uppercase tracking-wider block truncate px-1">
                      Up The Level
                    </span>
                  </div>
                </div>

                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-west-gold shadow-[0_0_25px_rgba(255,215,0,0.35)] hover:scale-105 transition-all duration-300">
                  <img
                    src={triplePack.image[1]}
                    alt="Vol. 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/90 py-1 text-center border-t border-west-gold/30">
                    <span className="text-[10px] sm:text-xs font-brand text-west-gold uppercase tracking-wider block truncate px-1">
                      Vol. 1
                    </span>
                  </div>
                </div>

                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-xl overflow-hidden border-2 border-west-gold shadow-2xl hover:scale-105 transition-all duration-300">
                  <img
                    src={triplePack.image[2]}
                    alt="Vol. 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/90 py-1 text-center border-t border-west-gold/30">
                    <span className="text-[10px] sm:text-xs font-brand text-west-gold uppercase tracking-wider block truncate px-1">
                      Vol. 2
                    </span>
                  </div>
                </div>
              </div>

              <div className="py-1 px-4 rounded-full bg-black/80 border border-west-gold/40 text-center">
                <span className="text-xs text-west-gold font-sans font-bold tracking-widest uppercase">
                  {t.home.officialCdsIncluded}
                </span>
              </div>
            </div>

            {/* Pack Info */}
            <div className="flex-grow text-center lg:text-left">
              <div className="inline-block text-xs font-sans text-red-400 font-bold uppercase tracking-widest bg-red-950/60 border border-red-500/40 px-3 py-1 rounded-full mb-2">
                {t.home.specialEventTrilogy}
              </div>
              <h3 className="text-3xl sm:text-5xl font-brand text-white tracking-wider uppercase mt-1 mb-2">
                {t.home.trilogyPackTitle}
              </h3>
              <p className="text-gray-300 font-sans text-sm sm:text-base max-w-xl mb-4">
                {t.home.trilogyDesc}
              </p>
              
              <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-4 mb-2">
                <span className="text-4xl sm:text-5xl font-brand text-west-gold tracking-wider font-bold">
                  {triplePack.price} €
                </span>
                {triplePack.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through font-semibold">
                    {triplePack.originalPrice} €
                  </span>
                )}
                <span className="text-xs font-sans text-green-400 font-bold uppercase tracking-widest border border-green-500/50 bg-green-950/50 px-3 py-1 rounded-full">
                  {t.home.shippingIncluded}
                </span>
              </div>
            </div>

            {/* Shop CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => { navigate('/shop'); window.scrollTo(0, 0); }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 via-amber-500 to-west-gold text-black font-brand text-xl tracking-wider rounded-xl shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer font-black"
              >
                {t.home.orderTriplePackBtn}
              </button>
              <button
                onClick={() => { navigate('/shop'); window.scrollTo(0, 0); }}
                className="px-8 py-3.5 bg-black/60 text-white border border-gray-700 hover:border-west-gold font-brand text-lg tracking-wider rounded-xl transition-all duration-200 cursor-pointer text-center"
              >
                {t.home.viewAllShopBtn}
              </button>
            </div>

          </div>
        </section>
      ) : upTheLevelCD ? (
        <section className="bg-gradient-to-r from-black/90 via-black/80 to-black/90 border-2 border-west-gold/60 rounded-3xl p-8 sm:p-12 shadow-[0_0_35px_rgba(255,215,0,0.15)]">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            
            {/* CD Cover with 3D feel */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-2 bg-gradient-to-r from-west-gold to-west-orange rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
              <img
                src={upTheLevelCD.image}
                alt={upTheLevelCD.name}
                className="relative w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-xl border-2 border-west-gold shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 right-2 px-3 py-1 bg-black/80 text-west-gold font-brand text-sm tracking-wider rounded border border-west-gold">
                OFFICIAL CD
              </span>
            </div>

            {/* Album Info */}
            <div className="flex-grow text-center md:text-left">
              <span className="text-xs font-sans text-west-gold font-bold uppercase tracking-widest">
                {t.home.newReleaseAvailable}
              </span>
              <h3 className="text-4xl sm:text-5xl font-brand text-white tracking-wider uppercase mt-1 mb-2">
                {upTheLevelCD.name}
              </h3>
              <p className="text-gray-300 font-sans text-sm sm:text-base max-w-xl mb-4">
                {upTheLevelCD.description}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="text-3xl font-brand text-west-gold tracking-wider">
                  {upTheLevelCD.price} €
                </span>
                <span className="text-xs text-gray-400 font-sans uppercase tracking-wider">
                  {t.home.worldwideShipping}
                </span>
              </div>
            </div>

            {/* Shop CTAs */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => { navigate('/shop'); window.scrollTo(0, 0); }}
                className="px-8 py-3.5 bg-west-gold text-black font-brand text-xl tracking-wider rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                {t.home.orderMyCopy}
              </button>
              <button
                onClick={() => { navigate('/shop'); window.scrollTo(0, 0); }}
                className="px-8 py-3.5 bg-black/60 text-white border border-gray-700 hover:border-west-gold font-brand text-xl tracking-wider rounded-xl transition-all duration-200 cursor-pointer"
              >
                {t.home.viewAllPacks}
              </button>
            </div>

          </div>
        </section>
      ) : null}

      {/* ============================================================ */}
      {/* SECTION 4: VIDEO PRODUCTIONS (Curated & Fast) */}
      {/* ============================================================ */}
      <section className="bg-black/85 border border-west-gold/40 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.9)]">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-west-gold/40 mb-3 backdrop-blur-md">
            <Disc className="w-4 h-4 text-west-gold" />
            <span className="text-west-gold text-xs font-sans font-bold tracking-widest uppercase">
              {t.home.videoBadge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-brand tracking-wider text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {t.home.videoTitle} <span className="gold-shimmer-text">{t.home.videoSpan}</span>
          </h2>
          <p className="mt-3 text-gray-300 font-sans max-w-2xl text-sm sm:text-base">
            {t.home.videoDesc}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVideos.map((video, index) => (
            <div 
              key={video.id} 
              className="bg-black/80 rounded-2xl border border-west-gold/40 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:border-west-gold hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] transition-all duration-300 flex flex-col group"
            >
              <div className="aspect-video w-full bg-black">
                <LazyEmbed
                  videoId={video.id}
                  title={`Young G Video - ${video.title}`}
                  className="w-full h-full"
                />
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 flex items-center justify-between border-t border-gray-900 bg-black/60 hover:bg-black/90 transition-colors cursor-pointer"
              >
                <div className="pr-2">
                  <span className="text-xs font-sans text-west-gold uppercase tracking-wider block">Production #{index + 1}</span>
                  <span className="font-brand text-base text-white tracking-wider line-clamp-1 group-hover:text-west-gold transition-colors">{video.title}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-west-gold shrink-0 transition-colors" />
              </a>
            </div>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className="text-center mt-12">
          <a
            href={artistData.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-red-600/90 hover:bg-red-600 text-white font-brand text-xl tracking-wider shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:scale-105 transition-all duration-200"
          >
            <span>WATCH ALL VIDEOS ON YOUTUBE</span>
            <ExternalLink className="w-5 h-5 text-white" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default HomeContent;