'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cómo seleccionan a las enfermeras y cuidadoras?",
      answer: "Contamos con un riguroso proceso de selección. Verificamos referencias, antecedentes, tarjeta profesional (en caso de enfermería) y realizamos pruebas psicológicas para garantizar tanto su capacidad técnica como su vocación y calidad humana."
    },
    {
      question: "¿Qué pasa si mi familiar no se adapta a la cuidadora asignada?",
      answer: "Nuestra prioridad es la comodidad y tranquilidad de tu familiar. Si por algún motivo no hay empatía o adaptación, garantizamos el reemplazo de la profesional sin ningún costo adicional ni complicaciones burocráticas."
    },
    {
      question: "¿Hay un tiempo mínimo para contratar el servicio?",
      answer: "No exigimos contratos a largo plazo. Nos adaptamos a tus necesidades, ya sea que requieras apoyo por unos días tras una cirugía, o cuidado permanente (turnos de 12 o 24 horas) a largo plazo."
    },
    {
      question: "¿Cómo funciona el reporte y monitoreo diario?",
      answer: "Nuestras profesionales registran diariamente los signos vitales, administración de medicamentos, dieta y estado general del paciente. Tú podrás solicitar esta información en cualquier momento para tener tranquilidad total, incluso si estás lejos."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600">
            Aclaramos tus dudas para que tomes la mejor decisión con total transparencia.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center focus:outline-none text-left"
              >
                <span className="font-bold text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[var(--color-nonnas-blue)] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
