'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Método</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comenzar es fácil. Te acompañamos en cada paso.
          </p>
        </div>

        <div 
          className="relative h-[280px] w-full flex items-center justify-center group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Zonas de Hover para cambiar de tarjeta */}
          <div 
            className="absolute left-0 top-0 w-1/3 h-full z-30 cursor-w-resize"
            onMouseEnter={() => paginate(-1)}
          />
          <div 
            className="absolute right-0 top-0 w-1/3 h-full z-30 cursor-e-resize"
            onMouseEnter={() => paginate(1)}
          />

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full max-w-md mx-auto"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center text-center mx-4">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-[var(--color-nonnas-mint-light)] flex items-center justify-center text-xl font-extrabold text-[var(--color-nonnas-blue)] shadow-inner mb-4">
                  {steps[current].number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{steps[current].title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {steps[current].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
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
