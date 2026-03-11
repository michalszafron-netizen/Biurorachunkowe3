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
    <section id="kalkulator" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-advisor-dark mb-6">
            Sprawdź wstępną <span className="italic text-brand-blue">wycenę</span>
          </h2>
          <p className="text-lg text-slate-600">
            Wybierz formę opodatkowania i określ ilość dokumentów, aby poznać orientacyjne widełki cenowe naszej współpracy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Wybierz formę opodatkowania
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {forms.map((form) => (
                  <button
                    key={form.id}
                    onClick={() => setFormType(form.id)}
                    className={`p-6 rounded-xl border-2 transition-all text-left flex flex-col items-start ${
                      formType === form.id
                        ? 'border-brand-primary bg-white shadow-lg ring-4 ring-brand-primary/5'
                        : 'border-slate-200 bg-white/50 hover:bg-white hover:border-brand-primary/30'
                    }`}
                  >
                    <form.icon className={`mb-4 ${formType === form.id ? 'text-brand-primary' : 'text-slate-300'}`} size={24} />
                    <span className="font-bold text-advisor-dark mb-1">{form.name}</span>
                    <span className="text-xs text-slate-500 leading-tight">{form.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Ilość faktur miesięcznie
                </label>
                <span className="text-2xl font-serif font-bold text-brand-primary">{invoices}</span>
              </div>
              <input
                type="range"
                min="1"
                max="200"
                value={invoices}
                onChange={(e) => setInvoices(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>1 faktura</span>
                <span>200+ faktur</span>
              </div>
            </div>
          </div>

          <motion.div
            key={formType + invoices}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-brand-primary">
              <CalcIcon size={120} />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-advisor-dark mb-8">Szacunkowy koszt netto</h3>
            
            <div className="flex items-baseline space-x-2 mb-8">
              <span className="text-5xl md:text-6xl font-serif font-bold text-brand-primary">
                {estimatedPrice.min} - {estimatedPrice.max}
              </span>
              <span className="text-xl font-medium text-slate-400">PLN / m-c</span>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-3" />
                Dedykowany opiekun księgowy
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-3" />
                Dostęp do panelu online 24/7
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-3" />
                Konsultacje telefoniczne bez limitu
              </div>
            </div>

            <a
              href="#kontakt"
              className="block w-full py-4 bg-brand-primary text-white text-center rounded font-bold hover:bg-brand-blue transition-all shadow-md"
            >
              Zapytaj o dokładną ofertę
            </a>
            <p className="text-center text-[10px] text-slate-400 mt-6 italic">
              * Powyższa wycena ma charakter informacyjny i nie stanowi oferty handlowej.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
