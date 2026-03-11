import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-bg">
      {/* Decorative background elements - subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded text-sm font-semibold tracking-wide uppercase mb-6">
              Profesjonalne biuro rachunkowe
            </span>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-advisor-dark leading-tight mb-6">
              Księgowość z <br />
              <span className="italic text-brand-blue">ludzką twarzą</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
              Budujemy relacje oparte na zaufaniu i bezpieczeństwie. Twój Doradca to partner, który dba o Twoje finanse z najwyższą starannością.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white rounded font-semibold text-lg hover:bg-brand-blue transition-all shadow-md hover:shadow-lg group"
              >
                Umów konsultację
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#uslugi"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-advisor-dark rounded font-semibold text-lg hover:bg-white transition-all"
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                alt="Doradca rozmawiający z klientem przy kawie"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-slate-100"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-advisor-dark uppercase tracking-tight">Gwarancja bezpieczeństwa</p>
                  <p className="text-xs text-slate-500">Ubezpieczenie OC do 1 mln zł</p>
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
