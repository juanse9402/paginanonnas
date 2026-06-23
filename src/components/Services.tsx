'use client';

import { Activity, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'Cuidadora Básica',
      price: 'desde $90.000 / turno',
      icon: <Heart className="w-8 h-8 text-teal-500" />,
      description: 'Acompañamiento, higiene personal, alimentación, movilidad y compañía. Ideal para adultos mayores que necesitan ayuda diaria.',
      features: [
        'Acompañamiento y compañía',
        'Higiene y cuidado personal',
        'Alimentación y nutrición',
        'Movilidad y ejercicios',
        'Reporte diario por WhatsApp'
      ],
      badge: 'Básico',
      borderColor: 'border-teal-400',
      iconBg: 'bg-teal-50',
      btnColor: 'bg-teal-500 hover:bg-teal-600',
    },
    {
      title: 'Auxiliar de Enfermería',
      price: 'desde $110.000 / turno',
      icon: <Activity className="w-8 h-8 text-blue-500" />,
      description: 'Todo lo de la cuidadora más: control de signos vitales, administración de medicamentos, inyecciones y cuidado postoperatorio básico.',
      features: [
        'Todo lo de Cuidadora incluido',
        'Signos vitales y monitoreo',
        'Administración de medicamentos',
        'Inyectología',
        'Cuidado básico de heridas'
      ],
      badge: 'Recomendado',
      borderColor: 'border-blue-400',
      iconBg: 'bg-blue-50',
      btnColor: 'bg-[var(--color-nonnas-blue)] hover:bg-[var(--color-nonnas-blue-dark)]',
    },
    {
      title: 'Enfermera Profesional',
      price: 'desde $150.000 / turno',
      icon: <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
      description: 'Procedimientos clínicos avanzados: terapia intravenosa, manejo de heridas complejas, sondas y administración de medicamentos controlados.',
      features: [
        'Todo lo de Auxiliar incluido',
        'Terapia intravenosa',
        'Heridas complejas y sondas',
        'Medicamentos controlados',
        'Monitoreo clínico avanzado'
      ],
      badge: 'Especializado',
      borderColor: 'border-purple-400',
      iconBg: 'bg-purple-50',
      btnColor: 'bg-purple-500 hover:bg-purple-600',
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-dots-pattern opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
              Niveles de Cuidado y Precios Claros
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Sin complicaciones ni sorpresas. Elige el profesional ideal según las necesidades de tu familiar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/80 backdrop-blur-2xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 border border-white/80 overflow-hidden flex flex-col`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-4 rounded-full ${service.iconBg}`}>
                  {service.icon}
                </div>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-gray-100 text-gray-600 uppercase tracking-wider">
                  {service.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
              <div className="text-[var(--color-nonnas-mint-dark)] font-bold mb-4">{service.price}</div>
              
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="mb-8">
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700 text-sm">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={`https://wa.me/573174373251?text=Hola,%20me%20interesa%20el%20servicio%20de%20${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto block w-full py-3 px-4 rounded-xl text-center text-white font-bold transition-all ${service.btnColor} shadow-md hover:shadow-lg`}
              >
                Cotizar por WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
