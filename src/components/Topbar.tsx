'use client';

import { Phone, Mail, Clock } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="bg-[var(--color-nonnas-mint)] text-white py-2 px-4 text-xs font-medium relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 hidden md:flex">
            <Clock size={14} className="opacity-80" />
            Atención 24/7 en Bogotá
          </span>
          <a href="mailto:soporte@cuidadosnonnas.com" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <Mail size={14} className="opacity-80" />
            <span className="hidden sm:inline">soporte@cuidadosnonnas.com</span>
            <span className="sm:hidden">Correo</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center gap-1.5 font-semibold bg-white/20 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Respuesta en 5 min
          </span>
          <a href="tel:+573174373251" className="flex items-center gap-1.5 font-bold hover:text-white/80 transition-colors">
            <Phone size={14} className="opacity-80" />
            +57 317 437 3251
          </a>
        </div>
      </div>
    </div>
  );
}
