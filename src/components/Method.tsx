'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Método: Simple y Seguro</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comenzar es fácil y sin compromisos. Te acompañamos en cada paso para asegurar que tomes la mejor decisión.
          </p>
        </div>

        <div 
          className="relative h-[350px] md:h-[300px] w-full flex items-center justify-center group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Botones de Navegación */}
          <button 
            className="absolute left-0 md:-left-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[var(--color-nonnas-blue)] hover:bg-gray-50 transition-colors border border-gray-100 opacity-0 group-hover:opacity-100"
            onClick={() => paginate(-1)}
            aria-label="Paso anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            className="absolute right-0 md:-right-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[var(--color-nonnas-blue)] hover:bg-gray-50 transition-colors border border-gray-100 opacity-0 group-hover:opacity-100"
            onClick={() => paginate(1)}
            aria-label="Siguiente paso"
          >
            <ChevronRight size={24} />
          </button>

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
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-2xl mx-auto cursor-grab active:cursor-grabbing"
            >
              <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-[6px] border-[var(--color-nonnas-mint-light)] flex items-center justify-center text-3xl font-extrabold text-[var(--color-nonnas-blue)] shadow-inner mb-8">
                  {steps[current].number}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{steps[current].title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  {steps[current].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Puntos de Paginación */}
        <div className="flex justify-center gap-3 mt-8">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current 
                  ? 'bg-[var(--color-nonnas-blue)] w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir al paso ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
