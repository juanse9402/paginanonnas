'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Method() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    {
      number: "01",
      title: "Valoración Inicial Gratuita",
      description: "Evaluamos profesionalmente las necesidades de tu familiar sin ningún costo ni compromiso para ti."
    },
    {
      number: "02",
      title: "Plan a la Medida",
      description: "Diseñamos la rutina de cuidado exacta y te presentamos a la auxiliar ideal según su perfil y experiencia."
    },
    {
      number: "03",
      title: "Monitoreo Constante",
      description: "Iniciamos el servicio. Recibirás reportes diarios en tu celular para que sientas tranquilidad total."
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, steps.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setIsAutoPlaying(false);
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + steps.length) % steps.length);
  };

  return (
    <section id="metodo" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Método</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comenzar es fácil. Te acompañamos en cada paso.
          </p>
        </div>

        <div 
          className="relative h-[320px] w-full flex items-center justify-center group perspective-1000"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {steps.map((step, index) => {
            // Calcular posiciones relativas
            let position = 0; // 0 = centro, -1 = izquierda, 1 = derecha
            if (index === current) position = 0;
            else if (index === (current - 1 + steps.length) % steps.length) position = -1;
            else if (index === (current + 1) % steps.length) position = 1;

            return (
              <motion.div
                key={step.number}
                initial={false}
                animate={{
                  x: `${position * 100}%`,
                  scale: position === 0 ? 1 : 0.8,
                  opacity: position === 0 ? 1 : 0.4,
                  zIndex: position === 0 ? 30 : 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8
                }}
                className={`absolute w-full max-w-md mx-auto cursor-pointer transition-colors ${position === 0 ? '' : 'hover:opacity-70'}`}
                onClick={() => {
                  if (position === -1) paginate(-1);
                  if (position === 1) paginate(1);
                }}
              >
                <div className={`bg-white/90 backdrop-blur-xl rounded-2xl p-8 border ${position === 0 ? 'shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-gray-100' : 'shadow-sm border-gray-50'} flex flex-col items-center text-center mx-4`}>
                  <div className={`w-16 h-16 rounded-full bg-white border-4 ${position === 0 ? 'border-[var(--color-nonnas-mint-light)]' : 'border-gray-100'} flex items-center justify-center text-xl font-extrabold ${position === 0 ? 'text-[var(--color-nonnas-blue)]' : 'text-gray-400'} shadow-inner mb-4 transition-colors`}>
                    {step.number}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${position === 0 ? 'text-gray-900' : 'text-gray-500'}`}>{step.title}</h3>
                  <p className={`leading-relaxed text-sm ${position === 0 ? 'text-gray-600' : 'text-gray-400 line-clamp-3'}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Puntos de Paginación */}
        <div className="flex justify-center gap-2 mt-6">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onMouseEnter={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
                setIsAutoPlaying(false);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current 
                  ? 'bg-[var(--color-nonnas-blue)] w-6' 
                  : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Ir al paso ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
