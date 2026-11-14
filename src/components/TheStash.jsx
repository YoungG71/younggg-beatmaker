import React from 'react';
import { artistData } from '../artistData';
import { ShoppingBag, DollarSign } from 'lucide-react';

const TheStash = () => {
  return (
    <section className="pt-32 sm:pt-36 pb-20 px-4 min-h-screen relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl text-center text-west-gold mb-6 drop-shadow-[0_0_5px_rgba(255,215,0,0.5)] font-gothic tracking-widest">
          BUY NOW
        </h2>

        {/* Black Friday Promo Banner */}
        <div className="mb-10 text-center bg-gradient-to-r from-red-950/80 via-black to-red-950/80 border-2 border-red-500/60 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(220,38,38,0.35)] max-w-4xl mx-auto backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          <div className="inline-flex items-center gap-2 bg-red-600 text-black font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-widest mb-3 animate-pulse shadow-md">
            <span>🔥 OFFRE LIMITÉE • BLACK FRIDAY 🔥</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-brand text-white tracking-wider uppercase mb-3">
            TRIPLE PACK PROMO — <span className="text-west-gold">34,99 €</span>
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Profitez des 3 albums officiels réunis : <span className="text-west-gold font-bold">Up The Level</span>, <span className="text-west-gold font-bold">International West Coast Shit Vol. 1</span> et <span className="text-west-gold font-bold">Vol. 2</span> pour seulement <span className="text-west-gold font-bold">34,99 €</span> au lieu de <span className="line-through text-gray-500 font-semibold">59,97 €</span> !
          </p>
        </div>

        <div className="mb-10 text-center"> 
            <span className="text-west-gold border-2 border-west-gold px-5 py-2.5 font-black tracking-wider uppercase inline-block"> 
                📦 SHIPPING INCLUDED / LIVRAISON INCLUSE 
            </span> 
        </div> 

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {artistData.shop.map((item) => (
            <div
              key={item.id}
              className={`bg-black border-4 ${
                item.isBlackFriday
                  ? 'border-red-500 shadow-[0_0_35px_rgba(220,38,38,0.4)]'
                  : item.bestDeal
                    ? 'border-west-gold shadow-[0_0_30px_rgba(255,215,0,0.3)] animate-gold-glow'
                    : 'border-west-gold/50'
              } p-6 md:p-8 rounded-xl relative overflow-hidden group transition-all duration-500 ease-out hover:border-west-gold hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)]`}
            >
              {/* Black Friday Badge */}
              {item.isBlackFriday && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 via-amber-500 to-west-gold text-black font-black px-6 py-2 transform rotate-0 z-20 shadow-lg border-l-2 border-b-2 border-white tracking-widest text-xs sm:text-sm flex items-center gap-1.5 animate-pulse">
                  <span>🔥 BLACK FRIDAY DEAL</span>
                </div>
              )}

              {/* Best Deal Badge */}
              {!item.isBlackFriday && item.bestDeal && (
                <div className="absolute top-0 right-0 bg-west-gold text-black font-bold px-6 py-2 transform rotate-0 z-20 shadow-lg border-l-2 border-b-2 border-white">
                  BEST DEAL
                </div>
              )}
              
              {/* Restocking Badge */}
              {item.isRestocking && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white font-bold px-6 py-2 transform rotate-0 z-20 shadow-lg border-l-2 border-b-2 border-white">
                  RESTOCKING
                </div>
              )}

              {/* Sold Out Badge */}
              {item.isSoldOut && (
                <div className="absolute top-0 right-0 bg-red-900 text-white font-bold px-6 py-2 transform rotate-0 z-20 shadow-lg border-l-2 border-b-2 border-white">
                  SOLD OUT
                </div>
              )}

              {/* Decorative Corner Screws */}
              <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-gray-400 border border-gray-600 shadow-inner" aria-hidden="true"></div>
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gray-400 border border-gray-600 shadow-inner" aria-hidden="true"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-gray-400 border border-gray-600 shadow-inner" aria-hidden="true"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-gray-400 border border-gray-600 shadow-inner" aria-hidden="true"></div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image Section */}
                <div className="w-full md:w-5/12">
                  {Array.isArray(item.image) && item.image.length === 3 ? (
                    <div className="w-full flex flex-col gap-3 py-2">
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-west-gold shadow-lg hover:border-white hover:scale-105 transition-all duration-300">
                          <img 
                            src={item.image[0]} 
                            alt="Up The Level" 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-black/90 py-1 text-center border-t border-west-gold/30">
                            <span className="text-[10px] sm:text-xs font-brand text-west-gold uppercase tracking-wider block truncate px-1">
                              Up The Level
                            </span>
                          </div>
                        </div>

                        <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-west-gold shadow-lg hover:border-white hover:scale-105 transition-all duration-300">
                          <img 
                            src={item.image[1]} 
                            alt="Vol. 1" 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-black/90 py-1 text-center border-t border-west-gold/30">
                            <span className="text-[10px] sm:text-xs font-brand text-west-gold uppercase tracking-wider block truncate px-1">
                              Vol. 1
                            </span>
                          </div>
                        </div>

                        <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-west-gold shadow-lg hover:border-white hover:scale-105 transition-all duration-300">
                          <img 
                            src={item.image[2]} 
                            alt="Vol. 2" 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-black/90 py-1 text-center border-t border-west-gold/30">
                            <span className="text-[10px] sm:text-xs font-brand text-west-gold uppercase tracking-wider block truncate px-1">
                              Vol. 2
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="py-2 px-3 rounded-lg bg-black/80 border border-west-gold/30 text-center">
                        <span className="text-xs text-west-gold font-sans font-bold tracking-widest uppercase">
                          💿 3 CD PHYSIQUES OFFICIELS INCLUS
                        </span>
                      </div>
                    </div>
                  ) : item.isPack ? (
                    <div className="relative h-64 w-full flex items-center justify-center">
                      <div className="relative w-48 h-48 transform -rotate-6 -translate-x-4 transition-transform duration-500 group-hover:-rotate-12 z-10">
                        <img 
                          src={item.image[0]} 
                          alt="Young G Album Volume 1" 
                          className="w-full h-full object-cover rounded shadow-2xl border border-gray-800"
                          loading="lazy"
                        />
                      </div>
                      <div className="relative w-48 h-48 transform rotate-6 -translate-x-12 transition-transform duration-500 group-hover:rotate-12 z-20">
                        <img 
                          src={item.image[1]} 
                          alt="Young G Album Volume 2" 
                          className="w-full h-full object-cover rounded shadow-2xl border border-gray-800"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-square rounded-lg overflow-hidden border-2 border-gray-800 shadow-2xl">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
                
                {/* Info & Form Section */}
                <div className="flex flex-col justify-between flex-1 w-full text-center md:text-left">
                  <div className="mb-6">
                    <h4 className="text-west-gold tracking-widest text-sm mb-1 uppercase">{item.subtitle}</h4>
                    <h3 className="text-3xl md:text-4xl text-white mb-4 leading-tight">{item.name}</h3>
                    <p className="text-gray-400 text-lg mb-4 leading-relaxed border-l-2 border-west-purple pl-4">{item.description}</p>
                    <div className="flex items-baseline justify-center md:justify-start gap-3 mb-6">
                      <p className="text-4xl text-west-gold font-bold drop-shadow-md gold-shimmer-text">{item.price} €</p>
                      {item.originalPrice && (
                        <span className="text-xl text-gray-500 line-through font-semibold">
                          {item.originalPrice} €
                        </span>
                      )}
                      {item.originalPrice && (
                        <span className="text-xs font-bold text-red-400 bg-red-950/70 border border-red-500/50 px-2.5 py-1 rounded uppercase tracking-wider">
                          -42% OFF
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 mt-4">
                    
                    {/* Option 1: PayPal */}
                    <div className="w-full">
                      <p className="text-gray-400 text-xs mb-1 uppercase">Option 1:</p>
                      
                      <form 
                        action="https://www.paypal.com/cgi-bin/webscr" 
                        method="post" 
                        target="_blank"
                        className="flex flex-col gap-4"
                      >
                        {item.paypalEmail ? (
                          <>
                            <input type="hidden" name="cmd" value="_xclick" />
                            <input type="hidden" name="business" value={item.paypalEmail} />
                            <input type="hidden" name="item_name" value={item.itemName || item.name} />
                            <input type="hidden" name="amount" value={item.price} />
                            <input type="hidden" name="currency_code" value="EUR" />
                            <input type="hidden" name="no_shipping" value="2" />
                            <input type="hidden" name="return" value="https://younggwestcoastbeatmaker.com/order-success" />
                            <input type="hidden" name="cancel_return" value="https://younggwestcoastbeatmaker.com/shop" />
                            <input type="hidden" name="rm" value="1" />
                            <input type="hidden" name="on0" value="Demande spéciale (dédicaces etc...)" />
                          </>
                        ) : (
                          <>
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="hosted_button_id" value={item.paypalId} />
                            <input type="hidden" name="currency_code" value="EUR" />
                            <input type="hidden" name="on0" value="Demande spéciale (dédicaces etc...)" />
                          </>
                        )}
                        
                        <div className="flex flex-col gap-2">
                          <label htmlFor={`dedication-${item.id}`} className="text-gray-400 text-xs tracking-wider uppercase text-left">
                            Dedication / Special Request (Optional)
                          </label>
                          <input 
                            type="text" 
                            name={item.dedicationName || 'os0'}
                            id={`dedication-${item.id}`}
                            placeholder="Who is this album for?"
                            className="bg-black border border-west-gold/50 text-white px-4 py-3 rounded focus:outline-none focus:border-west-gold focus:ring-1 focus:ring-west-gold transition-all w-full font-sans"
                          />
                        </div>

                        <button 
                          type="submit"
                          disabled={item.isSoldOut || (!item.paypalEmail && item.paypalId === 'PENDING_PAYPAL_ID')}
                          className={`w-full py-4 mt-2 font-bold text-xl uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 rounded shadow-lg
                            ${item.isSoldOut
                              ? 'bg-gray-800 border border-gray-600 text-gray-500 cursor-not-allowed'
                              : !item.paypalEmail && item.paypalId === 'PENDING_PAYPAL_ID'
                                ? 'bg-zinc-800 border border-west-gold/40 text-west-gold cursor-wait'
                                : item.isBlackFriday
                                  ? 'bg-gradient-to-r from-red-600 via-amber-500 to-west-gold text-black hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] font-black'
                                  : item.bestDeal 
                                    ? 'bg-gradient-to-r from-west-gold via-yellow-400 to-west-gold text-black hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]' 
                                    : 'bg-west-purple-dark border border-west-purple text-white hover:bg-west-purple hover:border-west-gold'
                            }`}
                        >
                          {item.isSoldOut ? (
                             <span>⛔ SOLD OUT</span>
                          ) : !item.paypalEmail && item.paypalId === 'PENDING_PAYPAL_ID' ? (
                             <span>⏳ ACTIVATION PAYPAL EN COURS</span>
                          ) : (
                             <>
                                <ShoppingBag className="w-6 h-6" />
                                {item.buttonText === 'PRE-ORDER' ? '⏳ PRE-ORDER (PAYPAL)' : '🅿️ PAYPAL (SECURE)'}
                             </>
                          )}
                        </button>
                        
                        <img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1" />
                      </form>
                    </div>

                    <div className="h-px bg-zinc-800 my-1"></div>

                    {/* Option 2: Stripe */}
                    <div className="w-full">
                      <p className="text-gray-400 text-xs mb-1 uppercase">Option 2:</p>
                      
                      {item.stripeUrl && !item.isSoldOut ? (
                        <a href={item.stripeUrl} 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="block w-full p-4 bg-black border border-west-gold text-west-gold no-underline text-sm font-black rounded text-center transition-all duration-300 hover:bg-west-gold hover:text-black shadow-md hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                           💳 CARD (STRIPE)
                        </a>
                      ) : !item.isSoldOut && !item.stripeUrl && item.id === 207 ? (
                        <div className="p-4 bg-black/60 border border-dashed border-gray-700 text-gray-400 text-sm font-sans rounded text-center">
                          💳 CARD (STRIPE) - Lien bientôt disponible
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheStash;
