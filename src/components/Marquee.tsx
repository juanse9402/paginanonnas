'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Marquee() {
  const words = [
    "Empatía", 
    "Profesionalismo", 
    "Confianza", 
    "Cuidado 24/7", 
    "Vocación de Servicio", 
    "Tranquilidad Familiar", 
    "Calidez Humana", 
    "Respaldo Clínico"
  ];
  
  // Duplicamos las palabras para que el loop infinito sea invisible
  const duplicatedWords = [...words, ...words, ...words];

  return (
    <div className="bg-[#0f172a] border-y border-white/10 py-5 overflow-hidden flex whitespace-nowrap w-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0f172a] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0f172a] to-transparent z-10"></div>
      
      <motion.div
        className="flex gap-16 items-center"
        animate={{ x: ["0%", "-33.3333%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      >
        {duplicatedWords.map((word, idx) => (
          <div key={idx} className="flex items-center gap-16">
            <span className="text-[var(--color-nonnas-mint)] font-bold tracking-[0.2em] uppercase text-sm md:text-base drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]">
              {word}
            </span>
            {idx !== duplicatedWords.length - 1 && (
              <Heart size={14} className="text-white/30 fill-white/10" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
