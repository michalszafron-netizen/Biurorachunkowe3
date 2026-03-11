import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Marek Wiśniewski',
      company: 'TechSolutions Sp. z o.o.',
      text: 'Najlepsze biuro, z jakim współpracowałem. Pani Anna zawsze znajdzie czas na wyjaśnienie zawiłości podatkowych. Czuję się bezpiecznie.',
      rating: 5,
    },
    {
      name: 'Katarzyna Nowak',
      company: 'Studio Projektowe K',
      text: 'Księgowość przestała być dla mnie czarną magią. Profesjonalizm połączony z niesamowitą życzliwością. Polecam każdemu przedsiębiorcy!',
      rating: 5,
    },
    {
      name: 'Piotr Zieliński',
      company: 'Eko-Bud',
      text: 'Rzetelność i terminowość. Od kiedy przeniosłem tu księgowość, mam święty spokój z urzędami. Kalkulator na stronie bardzo pomocny.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-broken-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-advisor-dark mb-6">
              Co mówią nasi <span className="italic text-muted-orange">Klienci</span>
            </h2>
            <p className="text-lg text-advisor-dark/70">
              Zaufanie buduje się latami. Jesteśmy dumni z opinii, które wystawiają nam nasi partnerzy biznesowi.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex items-center space-x-4 bg-warm-beige px-6 py-4 rounded-2xl">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="font-bold text-advisor-dark">4.9/5 na Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-warm-beige relative group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-soft-orange/10 group-hover:text-soft-orange/20 transition-colors">
                <Quote size={60} />
              </div>
              <div className="flex text-yellow-500 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-advisor-dark/80 italic mb-8 leading-relaxed relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-warm-beige rounded-full flex items-center justify-center text-muted-orange font-serif font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-advisor-dark">{review.name}</p>
                  <p className="text-xs text-advisor-dark/40 uppercase tracking-widest">{review.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
