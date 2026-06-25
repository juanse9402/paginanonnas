'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function History() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-dots-pattern opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white aspect-square max-w-md mx-auto lg:mx-0">
              {/* Placeholder image. User can update this to an actual photo of the founder or team */}
              <Image 
                src="/premium_hero.png" 
                alt="Historia de Nonnas" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[var(--color-nonnas-mint-dark)] font-bold tracking-wider uppercase text-sm mb-4 block">Nuestra Historia</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Entendemos lo que sientes, porque <span className="text-[var(--color-nonnas-blue)]">hemos estado en tu lugar.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                NONNAS nació de una experiencia personal profunda y de la necesidad de encontrar un cuidado compasivo, seguro y profesional para nuestros propios seres queridos.
              </p>
              <p>
                Fundada por profesionales de la salud con años de experiencia en el sector, nuestra misión es resolver la incertidumbre y el desgaste emocional que viven muchas familias al delegar el cuidado de un adulto mayor.
              </p>
              <p>
                No somos solo una agencia; somos el aliado que cuida de los tuyos con el mismo amor y rigor con el que cuidaríamos de los nuestros.
              </p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="font-bold text-gray-900">Fundadora, NONNAS</p>
              <p className="text-sm text-gray-500">Enfermera Profesional Experta</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
