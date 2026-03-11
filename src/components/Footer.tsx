import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-advisor-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-3xl font-serif font-bold text-soft-orange tracking-tight">Twój Doradca</span>
            <p className="text-white/60 leading-relaxed">
              Profesjonalne biuro rachunkowe z ludzkim podejściem. Budujemy bezpieczną przyszłość Twojego biznesu od 15 lat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-soft-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-soft-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-soft-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Szybkie linki</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#o-firmie" className="hover:text-soft-orange transition-colors">O firmie</a></li>
              <li><a href="#misja" className="hover:text-soft-orange transition-colors">Nasza Misja</a></li>
              <li><a href="#uslugi" className="hover:text-soft-orange transition-colors">Usługi</a></li>
              <li><a href="#kalkulator" className="hover:text-soft-orange transition-colors">Kalkulator</a></li>
              <li><a href="#kontakt" className="hover:text-soft-orange transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Usługi</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-soft-orange transition-colors">Księgowość KPiR</a></li>
              <li><a href="#" className="hover:text-soft-orange transition-colors">Pełna Księgowość</a></li>
              <li><a href="#" className="hover:text-soft-orange transition-colors">Kadry i Płace</a></li>
              <li><a href="#" className="hover:text-soft-orange transition-colors">Doradztwo Podatkowe</a></li>
              <li><a href="#" className="hover:text-soft-orange transition-colors">Rejestracja spółek</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-soft-orange flex-shrink-0 mt-1" />
                <span>ul. Księgowa 15, 00-001 Warszawa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-soft-orange flex-shrink-0" />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-soft-orange flex-shrink-0" />
                <span>biuro@twojdoradca.pl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-white/40">
          <p>© 2026 Twój Doradca. Wszelkie prawa zastrzeżone.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-soft-orange transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-soft-orange transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
