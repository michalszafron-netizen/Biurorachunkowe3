import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-advisor-dark mb-8">
              Porozmawiajmy o Twoim <span className="italic text-brand-blue">biznesie</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Zapraszamy na niezobowiązujące spotkanie w naszym biurze lub konsultację online. Jesteśmy tu, aby Ci pomóc.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-primary flex-shrink-0 border border-slate-100">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Zadzwoń do nas</p>
                  <a href="tel:+48123456789" className="text-xl font-serif font-bold text-advisor-dark hover:text-brand-blue transition-colors">
                    +48 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-primary flex-shrink-0 border border-slate-100">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Napisz e-mail</p>
                  <a href="mailto:biuro@twojdoradca.pl" className="text-xl font-serif font-bold text-advisor-dark hover:text-brand-blue transition-colors">
                    biuro@twojdoradca.pl
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-primary flex-shrink-0 border border-slate-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Odwiedź nas</p>
                  <p className="text-xl font-serif font-bold text-advisor-dark">
                    ul. Księgowa 15, 00-001 Warszawa
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-64 relative">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                alt="Mapa dojazdu" 
                className="w-full h-full object-cover grayscale opacity-30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-xl shadow-2xl flex items-center space-x-3 border border-slate-100">
                  <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-advisor-dark">Twój Doradca</p>
                    <p className="text-xs text-slate-500">Kliknij, aby otworzyć mapę</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 rounded-2xl shadow-xl border border-slate-200"
          >
            <h3 className="text-2xl font-serif font-bold text-advisor-dark mb-8">Wyślij wiadomość</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Imię i Nazwisko</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-slate-200 rounded-lg px-5 py-4 focus:ring-2 focus:ring-brand-blue transition-all outline-none"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Telefon</label>
                  <input
                    type="tel"
                    className="w-full bg-white border border-slate-200 rounded-lg px-5 py-4 focus:ring-2 focus:ring-brand-blue transition-all outline-none"
                    placeholder="+48 000 000 000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full bg-white border border-slate-200 rounded-lg px-5 py-4 focus:ring-2 focus:ring-brand-blue transition-all outline-none"
                  placeholder="jan@firma.pl"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Wiadomość</label>
                <textarea
                  rows={4}
                  className="w-full bg-white border border-slate-200 rounded-lg px-5 py-4 focus:ring-2 focus:ring-brand-blue transition-all outline-none resize-none"
                  placeholder="W czym możemy Ci pomóc?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-brand-primary text-white rounded font-bold text-lg hover:bg-brand-blue transition-all shadow-md flex items-center justify-center space-x-2 group"
              >
                <span>Wyślij zapytanie</span>
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                Klikając przycisk, wyrażasz zgodę na przetwarzanie danych osobowych zgodnie z polityką prywatności w celu obsługi zapytania.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
