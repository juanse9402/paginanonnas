'use client';

import { motion } from 'framer-motion';

export default function Method() {
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

  return (
    <section id="metodo" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Método: Simple y Seguro</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comenzar es fácil y sin compromisos. Te acompañamos en cada paso para asegurar que tomes la mejor decisión.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Línea conectora discontinua elegante para desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-gray-300 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white border-[6px] border-[var(--color-nonnas-mint-light)] flex items-center justify-center text-3xl font-extrabold text-[var(--color-nonnas-blue)] shadow-[inset_0_4px_10px_rgba(0,0,0,0.05),_0_10px_25px_rgba(43,108,176,0.15)] mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:border-[var(--color-nonnas-mint)]">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
