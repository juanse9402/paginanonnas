'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[var(--color-nonnas-blue-light)] to-[var(--color-nonnas-mint-light)] rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden border border-white/50"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-nonnas-blue)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <div className="relative z-10">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
              <ShieldCheck className="w-10 h-10 text-[var(--color-nonnas-blue)]" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Nuestra Garantía
            </h2>
            
            <p className="text-lg md:text-xl text-gray-800 font-medium max-w-2xl mx-auto leading-relaxed">
              "Si el profesional asignado no encaja con las necesidades de tu familia, gestionamos una nueva selección inmediata para encontrar el perfil adecuado sin costo adicional."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
