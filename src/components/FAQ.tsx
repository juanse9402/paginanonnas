'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Qué diferencia hay entre una cuidadora y una auxiliar de enfermería?",
      answer: "La cuidadora brinda compañía, apoyo en actividades cotidianas y acompañamiento general para promover el bienestar del adulto mayor, cuenta con primeros auxilios. La auxiliar de enfermería, además de estas funciones, cuenta con formación técnica para realizar toma de signos vitales, administración de medicamentos, cuidados básicos de salud y seguimiento de indicaciones médicas."
    },
    {
      question: "¿Puedo contratar el servicio por horas o por turnos?",
      answer: "Sí. Contamos con diferentes modalidades de servicio que se adaptan a las necesidades de cada familia, desde acompañamientos por horas hasta jornadas más amplias o servicios continuos."
    },
    {
      question: "¿Realizan acompañamiento hospitalario?",
      answer: "Sí. Nuestro personal puede acompañar al paciente durante hospitalizaciones, procedimientos médicos, recuperaciones postoperatorias o estancias temporales en centros de salud, brindando apoyo tanto al paciente como a su familia."
    },
    {
      question: "¿Administran medicamentos?",
      answer: "Sí. Las auxiliares de enfermería pueden administrar medicamentos siguiendo las indicaciones médicas previamente establecidas y realizar el seguimiento correspondiente para garantizar el cumplimiento del tratamiento."
    },
    {
      question: "¿Cómo seleccionan al personal?",
      answer: "Realizamos un proceso de selección y validación que incluye revisión de experiencia, referencias laborales y verificación de antecedentes, con el objetivo de garantizar profesionales confiables y capacitados para el cuidado de nuestros usuarios."
    },
    {
      question: "¿Qué sucede si necesito cambiar de profesional?",
      answer: "Entendemos que cada familia y cada adulto mayor tienen necesidades diferentes. Si por cualquier motivo es necesario realizar un cambio, buscamos otro profesional que se adapte mejor a los requerimientos del servicio."
    },
    {
      question: "¿Quién supervisa los servicios?",
      answer: "Todos nuestros servicios cuentan con la supervisión de una enfermera jefe con amplia experiencia, quien orienta al equipo de cuidado, realiza seguimiento a los casos y garantiza que el servicio se preste bajo los estándares definidos por Nonnas."
    },
    {
      question: "¿En qué zonas prestan servicio?",
      answer: "Actualmente prestamos nuestros servicios en Bogotá y municipios de la Sabana como Chía, Cajicá, Cota y sectores cercanos. Si tienes dudas sobre una ubicación específica, nuestro equipo podrá confirmarte la cobertura disponible."
    },
    {
      question: "¿Cómo puedo solicitar una valoración?",
      answer: "Puedes contactarnos por WhatsApp, por nuestras redes sociales o correo electrónico, para programar una valoración inicial gratuita. Analizaremos las necesidades de tu familiar y te recomendaremos la opción de cuidado más adecuada."
    },
    {
      question: "¿Los servicios son personalizados?",
      answer: "Sí. Cada adulto mayor tiene necesidades, rutinas y condiciones diferentes. Por eso diseñamos planes de cuidado personalizados que se adaptan a cada caso y evolucionan según sus necesidades."
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
