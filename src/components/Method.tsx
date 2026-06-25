'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, UserCheck, Activity } from 'lucide-react';

export default function Method() {
  const steps = [
    {
      number: "01",
      icon: <ClipboardCheck className="w-8 h-8 text-[var(--color-nonnas-blue)]" />,
      title: "Valoramos la situación de tu familiar",
      description: "Evaluamos profesionalmente las necesidades de tu familiar sin ningún costo ni compromiso para ti."
    },
    {
      number: "02",
      icon: <FileText className="w-8 h-8 text-[var(--color-nonnas-mint-dark)]" />,
      title: "Diseñamos un plan personalizado",
      description: "Diseñamos la rutina de cuidado exacta según las necesidades específicas de tu ser querido."
    },
    {
      number: "03",
      icon: <UserCheck className="w-8 h-8 text-teal-600" />,
      title: "Seleccionamos al profesional ideal",
      description: "Buscamos el perfil adecuado y te lo presentamos para que sientas total confianza."
    },
    {
      number: "04",
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      title: "Iniciamos el acompañamiento y seguimiento",
      description: "Iniciamos el acompañamiento y mantenemos un seguimiento continuo de la evolución del paciente."
    }
  ];

  return (
    <section id="metodo" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">¿Cómo funciona?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comenzar es fácil. Te acompañamos en cada paso con total transparencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col group"
            >
              <div className="absolute top-6 right-6 text-5xl font-black text-gray-50/80 pointer-events-none transition-transform group-hover:scale-110 group-hover:text-[var(--color-nonnas-mint-light)]/30">
                {step.number}
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100 shadow-inner relative z-10">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{step.title}</h3>
              <p className="leading-relaxed text-gray-600 text-sm relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
