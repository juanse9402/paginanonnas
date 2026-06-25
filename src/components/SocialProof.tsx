'use client';

import { motion } from 'framer-motion';

export default function SocialProof() {
  const stats = [
    { value: '+500', label: 'Familias atendidas' },
    { value: '+15', label: 'Años de experiencia' },
    { value: '98%', label: 'Nivel de satisfacción' },
    { value: '100%', label: 'Atención personalizada' },
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-4"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-nonnas-blue)] mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-gray-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
