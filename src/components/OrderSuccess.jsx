import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, PackageCheck, Mail, Sparkles, ArrowRight, Disc } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-36 pb-24 px-4 min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="relative z-10 max-w-3xl mx-auto w-full">
        
        {/* Glow backdrop */}
        <div className="absolute -inset-4 bg-gradient-to-r from-west-gold/20 via-yellow-500/10 to-west-gold/20 rounded-3xl blur-2xl pointer-events-none" />

        <div className="relative bg-black/90 border-2 border-west-gold rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(255,215,0,0.3)] backdrop-blur-xl text-center">
          
          {/* Animated Success Badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full bg-west-gold/10 border-2 border-west-gold flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.5)] animate-pulse">
            <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-west-gold" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-west-gold/40 mb-4">
            <Sparkles className="w-4 h-4 text-west-gold" />
            <span className="text-west-gold text-xs font-sans font-bold tracking-widest uppercase">
              Payment Confirmed • Paiement Validé
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-brand text-white tracking-wider uppercase mb-4">
            THANK YOU FOR <span className="gold-shimmer-text">YOUR ORDER!</span>
          </h1>

          <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Merci pour votre confiance et votre soutien ! Votre commande a été enregistrée avec succès.
          </p>

          {/* Details Box */}
          <div className="bg-black/60 border border-gray-800 rounded-2xl p-6 sm:p-8 text-left mb-8 space-y-4">
            
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-west-gold/10 border border-west-gold/30 shrink-0 text-west-gold mt-1">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-brand text-lg text-white tracking-wide uppercase">
                  Email de confirmation automatique
                </h3>
                <p className="text-sm font-sans text-gray-400 leading-relaxed mt-1">
                  Un email récapitulatif contenant votre reçu de paiement sécurisé vient de vous être envoyé automatiquement par <strong>PayPal / Stripe</strong>.
                </p>
              </div>
            </div>

            <div className="h-px bg-zinc-800 my-2" />

            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-west-gold/10 border border-west-gold/30 shrink-0 text-west-gold mt-1">
                <PackageCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-brand text-lg text-white tracking-wide uppercase">
                  Expédition & Dédicace
                </h3>
                <p className="text-sm font-sans text-gray-400 leading-relaxed mt-1">
                  Young G prépare soigneusement votre colis sous <strong>24 à 48 heures</strong> (avec la dédicace demandée). La livraison est incluse et suivie.
                </p>
              </div>
            </div>

          </div>

          {/* Contact note */}
          <p className="text-xs sm:text-sm font-sans text-gray-400 mb-8">
            Une question ou une précision concernant votre commande ? Contactez directement :{' '}
            <a href="mailto:djbambino@hotmail.com" className="text-west-gold hover:underline font-semibold">
              djbambino@hotmail.com
            </a>
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { navigate('/shop'); window.scrollTo(0, 0); }}
              className="px-8 py-3.5 bg-west-gold text-black font-brand text-lg tracking-wider rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer font-bold"
            >
              RETOUR À LA BOUTIQUE
            </button>
            <button
              onClick={() => { navigate('/music'); window.scrollTo(0, 0); }}
              className="px-8 py-3.5 bg-black/60 text-white border border-gray-700 hover:border-west-gold font-brand text-lg tracking-wider rounded-xl transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <Disc className="w-4 h-4 text-west-gold" />
              <span>DÉCOUVRIR LES SONS</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OrderSuccess;

