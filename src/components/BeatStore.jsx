import React from 'react';
import { ShoppingCart, Music, CreditCard } from 'lucide-react';

const beatIds = [
  "126", "136", "192", "193", "207", "209", 
  "240", "245", "261", "297", "302", "315", 
  "330", "337", "359", "389", "407", "412", 
  "418", "421", "422", "423", "429", "431"
];

const BeatStore = () => {
  const scrollToCheckout = (beatId) => {
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth' });
      // Optional: Pre-fill the input if we wanted to get fancy, but standard html input focus is enough
      const input = document.querySelector('input[name="os0"]');
      if (input) {
        input.value = `Beat #${beatId} - `;
        input.focus();
      }
    }
  };

  return (
    <section id="beat-store" className="py-20 px-4 bg-zinc-900 border-t-4 border-west-gold relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Music className="w-12 h-12 text-west-gold" />
            <h2 className="text-4xl md:text-6xl text-west-gold font-sans font-black tracking-tighter uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Exclusive West Coast Beats
            </h2>
            <Music className="w-12 h-12 text-west-gold" />
          </div>
          
          <div className="inline-block bg-black/50 border-2 border-west-gold/50 rounded-xl p-6 backdrop-blur-sm shadow-[0_0_20px_rgba(255,215,0,0.1)]">
            <h3 className="text-2xl md:text-3xl text-white font-bold mb-4 font-sans tracking-wide uppercase">
              Price: 80€ | 100% Exclusive Rights | High-Quality Files
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Once a beat is purchased, it is <span className="text-west-gold font-bold">yours forever</span> and will be removed from this store. 
              Select the beat you want and use the checkout form at the bottom.
            </p>
          </div>
        </div>

        {/* Beats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {beatIds.map((id) => (
            <div 
              key={id}
              className="bg-black border-2 border-gray-700 hover:border-west-gold rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] group flex flex-col gap-4"
            >
              <div className="flex justify-between items-center border-b border-gray-800 pb-2 mb-2">
                <h4 className="text-xl text-west-gold font-bold tracking-widest">
                  EXCLUSIVE BEAT #{id}
                </h4>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e] animate-pulse"></div>
              </div>
              
              <div className="w-full bg-zinc-900 rounded-full p-1 border border-gray-800">
                <audio 
                  controls 
                  controlsList="nodownload" 
                  src={`/beats/Instruwest${id}.mp3`} 
                  className="w-full h-8"
                  style={{ filter: 'sepia(20%) saturate(150%)' }} // Subtle styling to player
                ></audio>
              </div>

              <button
                onClick={() => scrollToCheckout(id)}
                className="w-full mt-2 bg-gradient-to-r from-gray-800 to-black hover:from-west-gold hover:to-yellow-500 text-white hover:text-black font-bold py-3 px-4 rounded border border-gray-600 hover:border-west-gold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider shadow-md"
              >
                <ShoppingCart size={18} />
                Select Beat #{id}
              </button>
            </div>
          ))}
        </div>

        {/* Checkout Section */}
        <section id="checkout" className="bg-black py-20 px-5 text-center border-t-[3px] border-[#FFD700]">
          
          {/* Action Required Box */}
          <div className="max-w-[800px] mx-auto mb-12 bg-[#FFD700]/5 border-2 border-dashed border-[#FFD700] p-8 rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.1)]">
            <h3 className="text-[#FFD700] mb-4 uppercase tracking-[3px] font-sans font-black text-xl">
              ⚠️ ACTION REQUIRED
            </h3>
            <p className="text-white text-lg md:text-xl font-bold mb-2">
              DURING CHECKOUT, PLEASE SPECIFY YOUR:
            </p>
            <p className="text-[#FFD700] text-xl md:text-2xl font-black uppercase mb-4">
              BEAT NUMBER (#) & EMAIL ADDRESS
            </p>
            <div className="h-px bg-zinc-800 w-1/2 mx-auto my-4"></div>
            <p className="text-gray-400 text-base italic">
              📩 Delivery: You will receive your WAV file via email in <span className="text-white font-bold">MAXIMUM 24 HOURS</span>.
            </p>
          </div>

          <h2 className="text-[#FFD700] uppercase tracking-[5px] mb-10 text-2xl md:text-3xl font-bold">
            SELECT PAYMENT METHOD
          </h2>

          <div className="flex flex-wrap gap-8 justify-center items-start max-w-[900px] mx-auto">
            
            {/* Stripe Card */}
            <div className="flex-1 min-w-[300px] max-w-[380px] flex flex-col items-center">
              <a 
                href="https://buy.stripe.com/cNi9AU7HYg5DgFu4bA73G00" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-8 bg-black border-[3px] border-[#FFD700] text-[#FFD700] rounded-xl transition-all duration-300 flex flex-col items-center justify-center hover:bg-[#FFD700] hover:text-black hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,215,0,0.3)] group"
              >
                <span className="text-2xl font-black mb-1.5">💳 CREDIT CARD</span>
                <span className="text-sm text-[#FFD700] opacity-80 tracking-widest group-hover:text-black">
                  SECURE VIA <strong>STRIPE</strong>
                </span>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_and_MasterCard_logo.svg/1000px-Visa_and_MasterCard_logo.svg.png" 
                  alt="Visa Mastercard" 
                  className="h-[22px] mt-5 object-contain filter brightness-150 group-hover:brightness-0 transition-all"
                />
              </a>
            </div>

            {/* PayPal Card */}
            <div className="flex-1 min-w-[300px] max-w-[380px] flex flex-col items-center">
              <div className="w-full p-6 bg-[#FFD700] border-[3px] border-[#FFD700] rounded-xl flex flex-col items-center shadow-lg box-border">
                <span className="text-black text-2xl font-black mb-4">🅿️ PAYPAL</span>
                
                <div id="paypal-button-container" className="w-full">
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="w-full flex flex-col gap-4">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="5468E4D9UBUNU" />
                    <input type="hidden" name="on0" value="Number of the beat and your email." />
                    <input 
                      type="text" 
                      name="os0" 
                      maxLength="200" 
                      placeholder="Beat #..." 
                      required 
                      className="w-full bg-white text-black text-center text-sm p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 font-sans shadow-inner"
                    />
                    <input type="hidden" name="currency_code" value="EUR" />
                    
                    <div className="transform hover:scale-105 transition-transform duration-200 w-full flex justify-center">
                      <input 
                        type="image" 
                        src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" 
                        border="0" 
                        name="submit" 
                        title="PayPal - The safer, easier way to pay online!" 
                        alt="Buy Now" 
                        className="h-[40px] w-auto object-contain filter drop-shadow-md"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </section>
  );
};

export default BeatStore;
