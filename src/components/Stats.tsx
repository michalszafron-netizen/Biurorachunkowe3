import React from 'react';
import { motion } from 'motion/react';
import { Users, Calendar, Award, Building2 } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: 'Lat na rynku', value: '15', icon: Calendar },
    { label: 'Zadowolonych firm', value: '500+', icon: Users },
    { label: 'Ekspertów w zespole', value: '12', icon: Award },
    { label: 'Obsłużonych branż', value: '45', icon: Building2 },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-primary/5 text-brand-primary mb-4 group-hover:scale-110 transition-transform">
                <stat.icon size={24} />
              </div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-advisor-dark mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
