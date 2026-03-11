import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalcIcon, FileText, Briefcase, Building } from 'lucide-react';

const Calculator = () => {
  const [formType, setFormType] = useState('kpir');
  const [invoices, setInvoices] = useState(10);

  const forms = [
    { id: 'kpir', name: 'KPiR', icon: FileText, desc: 'Księga Przychodów i Rozchodów' },
    { id: 'ryczalt', name: 'Ryczałt', icon: Briefcase, desc: 'Ewidencja przychodów' },
    { id: 'pelna', name: 'Pełna Księgowość', icon: Building, desc: 'Księgi handlowe' },
  ];

  const estimatedPrice = useMemo(() => {
    let base = 0;
    if (formType === 'kpir') base = 200;
    if (formType === 'ryczalt') base = 150;
    if (formType === 'pelna') base = 800;

    const invoiceCost = invoices * 5;
    const total = base + invoiceCost;
    
    return {
      min: Math.floor(total * 0.9),
      max: Math.ceil(total * 1.1)
    };
  }, [formType, invoices]);

  return (
    <section id="kalkulator" className="py-24 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-advisor-dark mb-6">
            Sprawdź wstępną <span className="italic text-muted-orange">wycenę</span>
          </h2>
          <p className="text-lg text-advisor-dark/70">
            Wybierz formę opodatkowania i określ ilość dokumentów, aby poznać orientacyjne widełki cenowe naszej współpracy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-advisor-dark uppercase tracking-wider mb-4">
                Wybierz formę opodatkowania
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {forms.map((form) => (
                  <button
                    key={form.id}
                    onClick={() => setFormType(form.id)}
                    className={`p-6 rounded-2xl border-2 transition-all text-left flex flex-col items-start ${
                      formType === form.id
                        ? 'border-soft-orange bg-white shadow-lg ring-4 ring-soft-orange/5'
                        : 'border-advisor-dark/10 bg-white/50 hover:bg-white hover:border-soft-orange/30'
                    }`}
                  >
                    <form.icon className={`mb-4 ${formType === form.id ? 'text-soft-orange' : 'text-advisor-dark/40'}`} size={24} />
                    <span className="font-bold text-advisor-dark mb-1">{form.name}</span>
                    <span className="text-xs text-advisor-dark/50 leading-tight">{form.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-advisor-dark uppercase tracking-wider">
                  Ilość faktur miesięcznie
                </label>
                <span className="text-2xl font-serif font-bold text-muted-orange">{invoices}</span>
              </div>
              <input
                type="range"
                min="1"
                max="200"
                value={invoices}
                onChange={(e) => setInvoices(parseInt(e.target.value))}
                className="w-full h-2 bg-advisor-dark/10 rounded-lg appearance-none cursor-pointer accent-soft-orange"
              />
              <div className="flex justify-between text-xs text-advisor-dark/40 mt-2">
                <span>1 faktura</span>
                <span>200+ faktur</span>
              </div>
            </div>
          </div>

          <motion.div
            key={formType + invoices}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-warm-beige relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <CalcIcon size={120} />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-advisor-dark mb-8">Szacunkowy koszt netto</h3>
            
            <div className="flex items-baseline space-x-2 mb-8">
              <span className="text-5xl md:text-6xl font-serif font-bold text-muted-orange">
                {estimatedPrice.min} - {estimatedPrice.max}
              </span>
              <span className="text-xl font-medium text-advisor-dark/60">PLN / m-c</span>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center text-sm text-advisor-dark/70">
                <div className="w-1.5 h-1.5 rounded-full bg-soft-orange mr-3" />
                Dedykowany opiekun księgowy
              </div>
              <div className="flex items-center text-sm text-advisor-dark/70">
                <div className="w-1.5 h-1.5 rounded-full bg-soft-orange mr-3" />
                Dostęp do panelu online 24/7
              </div>
              <div className="flex items-center text-sm text-advisor-dark/70">
                <div className="w-1.5 h-1.5 rounded-full bg-soft-orange mr-3" />
                Konsultacje telefoniczne bez limitu
              </div>
            </div>

            <a
              href="#kontakt"
              className="block w-full py-4 bg-advisor-dark text-white text-center rounded-full font-bold hover:bg-advisor-dark/90 transition-all shadow-lg"
            >
              Zapytaj o dokładną ofertę
            </a>
            <p className="text-center text-xs text-advisor-dark/40 mt-6 italic">
              * Powyższa wycena ma charakter informacyjny i nie stanowi oferty handlowej.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
