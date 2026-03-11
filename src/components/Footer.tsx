import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <div className="w-5 h-5 bg-brand-primary rounded-sm" />
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">Twój Doradca</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Profesjonalne biuro rachunkowe z ludzkim podejściem. Budujemy bezpieczną przyszłość Twojego biznesu od 15 lat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Szybkie linki</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#o-firmie" className="hover:text-white transition-colors">O firmie</a></li>
              <li><a href="#misja" className="hover:text-white transition-colors">Nasza Misja</a></li>
              <li><a href="#uslugi" className="hover:text-white transition-colors">Usługi</a></li>
              <li><a href="#kalkulator" className="hover:text-white transition-colors">Kalkulator</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Usługi</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Księgowość KPiR</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pełna Księgowość</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kadry i Płace</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Doradztwo Podatkowe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rejestracja spółek</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-accent flex-shrink-0 mt-1" />
                <span>ul. Księgowa 15, 00-001 Warszawa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-accent flex-shrink-0" />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-accent flex-shrink-0" />
                <span>biuro@twojdoradca.pl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Twój Doradca. Wszelkie prawa zastrzeżone.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
