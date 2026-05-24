import React from 'react';
import { artistData } from '../artistData';
import { ShoppingBag, DollarSign } from 'lucide-react';

const TheStash = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl text-center text-west-gold mb-8 drop-shadow-[0_0_5px_rgba(255,215,0,0.5)] font-gothic tracking-widest">
          BUY NOW
        </h2>

        <div className="mb-10 text-center"> 
            <span className="text-west-gold border-2 border-west-gold px-5 py-2.5 font-black tracking-wider uppercase inline-block"> 
                📦 SHIPPING INCLUDED / LIVRAISON INCLUSE 
            </span> 
        </div> 

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {artistData.shop.map((item) => (
            <div
              key={item.id}
              className={`bg-black border-4 ${item.bestDeal ? 'border-west-gold shadow-[0_0_30px_rgba(255,215,0,0.3)] animate-gold-glow' : 'border-west-gold/50'} p-6 md:p-8 rounded-xl relative overflow-hidden group transition-all duration-500 ease-out hover:border-west-gold hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)]`}
            >
              {/* Best Deal Badge */}
              {item.bestDeal && (
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
                  {item.isPack ? (
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
                    <p className="text-4xl text-west-gold font-bold mb-6 drop-shadow-md gold-shimmer-text">{item.price} €</p>
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
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value={item.paypalId} />
                        <input type="hidden" name="currency_code" value="EUR" />
                        <input type="hidden" name="on0" value="Demande spéciale (dédicaces etc...)" />
                        
                        <div className="flex flex-col gap-2">
                          <label htmlFor={`dedication-${item.id}`} className="text-gray-400 text-xs tracking-wider uppercase text-left">
                            Dedication / Special Request (Optional)
                          </label>
                          <input 
                            type="text" 
                            name={item.dedicationName}
                            id={`dedication-${item.id}`}
                            placeholder="Who is this album for?"
                            className="bg-black border border-west-gold/50 text-white px-4 py-3 rounded focus:outline-none focus:border-west-gold focus:ring-1 focus:ring-west-gold transition-all w-full font-sans"
                          />
                        </div>

                        <button 
                          type="submit"
                          disabled={item.isSoldOut}
                          className={`w-full py-4 mt-2 font-bold text-xl uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 rounded shadow-lg
                            ${item.isSoldOut
                              ? 'bg-gray-800 border border-gray-600 text-gray-500 cursor-not-allowed'
                              : item.bestDeal 
                                ? 'bg-gradient-to-r from-west-gold via-yellow-400 to-west-gold text-black hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]' 
                                : 'bg-west-purple-dark border border-west-purple text-white hover:bg-west-purple hover:border-west-gold'
                            }`}
                        >
                          {item.isSoldOut ? (
                             <span>⛔ SOLD OUT</span>
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
                      
                      {item.id === 204 && !item.isRestocking && (
                        <a href="https://buy.stripe.com/dRm00k9Q61aJ88Y23s73G04" 
                           className="block w-full p-4 bg-black border border-west-gold text-west-gold no-underline text-sm font-black rounded text-center transition-all duration-300 hover:bg-west-gold hover:text-black">
                           💳 CARD (STRIPE)
                        </a>
                      )}
                      {item.id === 201 && (
                        <a href="https://buy.stripe.com/14A14o1jA6v3bladMa73G01" 
                           className="block w-full p-4 bg-black border border-west-gold text-west-gold no-underline text-sm font-black rounded text-center transition-all duration-300 hover:bg-west-gold hover:text-black">
                           💳 CARD (STRIPE)
                        </a>
                      )}
                      {item.id === 202 && (
                        <a href="https://buy.stripe.com/5kQ4gAbYe4mVgFueQe73G02" 
                           className="block w-full p-4 bg-black border border-west-gold text-west-gold no-underline text-sm font-black rounded text-center transition-all duration-300 hover:bg-west-gold hover:text-black">
                           💳 CARD (STRIPE)
                        </a>
                      )}
                      {item.id === 203 && (
                        <a href="https://buy.stripe.com/cNifZid2i6v3ah64bA73G03" 
                           className="block w-full p-4 bg-black border border-west-gold text-west-gold no-underline text-sm font-black rounded text-center transition-all duration-300 hover:bg-west-gold hover:text-black">
                           💳 CARD (STRIPE)
                        </a>
                      )}
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
