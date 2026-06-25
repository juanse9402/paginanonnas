'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-8 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[var(--color-nonnas-blue-light)] to-[var(--color-nonnas-mint-light)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm border border-blue-100"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[var(--color-nonnas-blue)]" />
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Garantía de Satisfacción Nonnas
            </h2>
            <p className="text-gray-800 font-medium text-sm md:text-base leading-relaxed">
              Si el profesional asignado no encaja con las necesidades de tu familia, gestionamos una nueva selección inmediata sin costo adicional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
