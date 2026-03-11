import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-warm-beige">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-broken-white skew-x-12 transform translate-x-20 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-soft-orange/10 text-muted-orange rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              Twoje zaufane biuro rachunkowe
            </span>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-advisor-dark leading-tight mb-6">
              Księgowość z <br />
              <span className="italic text-muted-orange">ludzką twarzą</span>
            </h1>
            <p className="text-lg text-advisor-dark/70 max-w-lg mb-10 leading-relaxed">
              W biurze Twój Doradca wierzymy, że za każdą fakturą stoi człowiek. 
              Budujemy relacje oparte na zaufaniu, bezpieczeństwie i bliskim kontakcie.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-soft-orange text-white rounded-full font-semibold text-lg hover:bg-muted-orange transition-all shadow-lg hover:shadow-xl group"
              >
                Umów się na kawę
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#uslugi"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-advisor-dark/10 text-advisor-dark rounded-full font-semibold text-lg hover:bg-advisor-dark/5 transition-all"
              >
                Nasze usługi
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                alt="Doradca rozmawiający z klientem przy kawie"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-advisor-dark/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-advisor-dark">Gwarancja bezpieczeństwa</p>
                  <p className="text-xs text-advisor-dark/60">Ubezpieczenie OC do 1 mln zł</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
