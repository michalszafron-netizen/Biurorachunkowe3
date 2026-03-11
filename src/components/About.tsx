import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <section id="o-firmie" className="py-24 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-advisor-dark mb-8">
              Poznajmy się <span className="italic text-muted-orange">bliżej</span>
            </h2>
            <div className="space-y-6 text-lg text-advisor-dark/70 leading-relaxed">
              <p>
                Twój Doradca to nie tylko biuro rachunkowe. To zespół pasjonatów, którzy od 15 lat wspierają polskie firmy w ich codziennych wyzwaniach finansowych.
              </p>
              <p>
                Nasza historia zaczęła się od prostego spostrzeżenia: przedsiębiorcy potrzebują kogoś, kto mówi ich językiem, rozumie ich obawy i cieszy się z ich sukcesów. Dlatego postawiliśmy na relacje.
              </p>
              <p>
                Dziś obsługujemy ponad 500 firm, od małych jednoosobowych działalności po duże spółki kapitałowe, zachowując przy tym tę samą, rodzinną atmosferę.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <Instagram className="text-pink-600" size={24} />
                <div>
                  <p className="text-xs font-bold text-advisor-dark uppercase tracking-widest">Instagram</p>
                  <p className="text-sm text-advisor-dark/60">@twoj_doradca</p>
                </div>
                <ArrowUpRight size={16} className="text-advisor-dark/20 group-hover:text-soft-orange transition-colors" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <Facebook className="text-blue-600" size={24} />
                <div>
                  <p className="text-xs font-bold text-advisor-dark uppercase tracking-widest">Facebook</p>
                  <p className="text-sm text-advisor-dark/60">Twój Doradca</p>
                </div>
                <ArrowUpRight size={16} className="text-advisor-dark/20 group-hover:text-soft-orange transition-colors" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="rounded-3xl overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                    alt="Nasze biuro"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden h-48">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                    alt="Zespół"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 pt-12"
              >
                <div className="rounded-3xl overflow-hidden h-48">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                    alt="Spotkanie"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                    alt="Praca"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-soft-orange/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
