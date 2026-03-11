import React from 'react';
import { motion } from 'motion/react';
import { Calculator, FileSpreadsheet, PieChart, ShieldCheck, Users2, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Księga Przychodów i Rozchodów',
      desc: 'Kompleksowa obsługa firm na uproszczonej księgowości. Optymalizacja podatkowa w cenie.',
      icon: FileSpreadsheet,
    },
    {
      title: 'Pełna Księgowość',
      desc: 'Prowadzenie ksiąg handlowych dla spółek z o.o. i innych podmiotów prawnych.',
      icon: Calculator,
    },
    {
      title: 'Kadry i Płace',
      desc: 'Rozliczanie pracowników, umowy, ZUS oraz pełna dokumentacja pracownicza.',
      icon: Users2,
    },
    {
      title: 'Doradztwo Podatkowe',
      desc: 'Pomoc w wyborze najkorzystniejszej formy opodatkowania i planowanie podatkowe.',
      icon: ShieldCheck,
    },
    {
      title: 'Analizy Finansowe',
      desc: 'Raporty i zestawienia, które pomogą Ci zrozumieć kondycję finansową Twojej firmy.',
      icon: PieChart,
    },
    {
      title: 'Wsparcie Startu',
      desc: 'Pomoc w założeniu działalności gospodarczej lub spółki od A do Z.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="uslugi" className="py-24 bg-broken-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-advisor-dark mb-6">
            Kompleksowe <span className="italic text-muted-orange">wsparcie</span> dla Twojej firmy
          </h2>
          <p className="text-lg text-advisor-dark/70">
            Oferujemy szeroki wachlarz usług księgowych i doradczych, dopasowanych do skali i potrzeb Twojego biznesu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl border border-warm-beige transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-warm-beige flex items-center justify-center text-soft-orange mb-8 group-hover:bg-soft-orange group-hover:text-white transition-all duration-300">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-advisor-dark mb-4">{service.title}</h3>
              <p className="text-advisor-dark/60 leading-relaxed mb-8">
                {service.desc}
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center text-sm font-bold text-muted-orange uppercase tracking-widest hover:text-soft-orange transition-colors"
              >
                Dowiedz się więcej
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
