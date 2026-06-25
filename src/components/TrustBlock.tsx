'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Stethoscope, Clock, ShieldAlert, Heart } from 'lucide-react';

export default function TrustBlock() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      icon: <UserCheck className="w-8 h-8 text-teal-600" />,
      title: "Personal cuidadosamente seleccionado",
      description: "Perfiles verificados y evaluados para garantizar la mejor atención."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      title: "Supervisión permanente",
      description: "Respaldo continuo de enfermería profesional en cada caso."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Seguimiento periódico",
      description: "Reportes constantes para la tranquilidad de los familiares."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-rose-600" />,
      title: "Protocolos de calidad y seguridad",
      description: "Estándares estrictos para el cuidado en el hogar."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Atención personalizada",
      description: "Nos adaptamos a las rutinas y necesidades de cada familia."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block py-2 px-6 rounded-full bg-blue-50 text-[var(--color-nonnas-blue-dark)] text-sm md:text-base font-bold mb-6 border border-blue-100 shadow-sm"
          >
            Todos los servicios de NONNAS están supervisados por enfermería profesional.
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
            Tu tranquilidad comienza con nuestra rigurosidad
          </h2>
          <p className="text-lg text-gray-600">
            Recupera tu paz mental con el cuidado experto que tu ser querido merece. Conectamos a tu familia con enfermeras profesionales verificadas, sin sorpresas y con reportes periódicos de tranquilidad.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto h-[350px] md:h-[300px]">
          {/* Zonas de hover para navegación */}
          <div 
            className="absolute top-0 left-0 w-1/2 h-full z-20 cursor-pointer"
            onMouseEnter={prevSlide}
          />
          <div 
            className="absolute top-0 right-0 w-1/2 h-full z-20 cursor-pointer"
            onMouseEnter={nextSlide}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                {items[currentIndex].icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{items[currentIndex].title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {items[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores (Puntos) */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {items.map((_, index) => (
            <div
              key={index}
              onMouseEnter={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex 
                  ? 'bg-[var(--color-nonnas-blue)] w-8' 
                  : 'bg-gray-200 w-2 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
