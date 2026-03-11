import React from 'react';
import { motion } from 'motion/react';
import { Shield, Heart, Eye, CheckCircle2 } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      title: 'Twoje Bezpieczeństwo',
      desc: 'Posiadamy pełne ubezpieczenie OC oraz certyfikaty MF. Bierzemy pełną odpowiedzialność za Twoje rozliczenia.',
      icon: Shield,
    },
    {
      title: 'Ludzkie Podejście',
      desc: 'Nie jesteśmy tylko cyframi w arkuszu. Rozumiemy wyzwania przedsiębiorców i zawsze szukamy najlepszych rozwiązań.',
      icon: Heart,
    },
    {
      title: 'Pełna Transparentność',
      desc: 'Masz stały wgląd w swoje dokumenty i status prac. Żadnych ukrytych kosztów ani niezrozumiałego żargonu.',
      icon: Eye,
    },
  ];

  return (
    <section id="misja" className="py-24 bg-broken-white overflow-hidden relative">
      {/* Decorative circle */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-warm-beige rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop"
                  alt="Zespół biura rachunkowego"
                  className="w-full h-full object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Overlay badge */}
              <div className="absolute -top-6 -right-6 bg-soft-orange text-white p-8 rounded-3xl shadow-xl">
                <p className="text-4xl font-serif font-bold">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest">Zaangażowania</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-advisor-dark mb-8">
              Nasza misja: <br />
              <span className="italic text-muted-orange">Spokój Twojej firmy</span>
            </h2>
            <p className="text-lg text-advisor-dark/70 mb-10 leading-relaxed">
              Wierzymy, że księgowość powinna być wsparciem, a nie ciężarem. Naszym celem jest zapewnienie Ci maksymalnego bezpieczeństwa, abyś mógł skupić się na tym, co robisz najlepiej – rozwijaniu swojego biznesu.
            </p>

            <div className="space-y-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-warm-beige flex items-center justify-center text-soft-orange flex-shrink-0">
                    <value.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-advisor-dark mb-2">{value.title}</h3>
                    <p className="text-advisor-dark/60 leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
