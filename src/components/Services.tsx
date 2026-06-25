'use client';

import { HeartHandshake, Stethoscope, Syringe, CheckCircle2, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'Cuidadora Básica',
      price: 'desde $90.000 / turno',
      icon: <HeartHandshake className="w-8 h-8 text-teal-500" />,
      description: 'Acompañamiento, higiene personal, alimentación, movilidad y compañía. Ideal para adultos mayores que necesitan ayuda diaria.',
      features: [
        'Acompañamiento cálido para evitar la soledad',
        'Aseguramos una alimentación adecuada y saludable',
        'Te mantenemos informado para tu total tranquilidad'
      ],
      badge: 'Básico',
      borderColor: 'border-teal-400',
      iconBg: 'bg-teal-50',
      btnColor: 'bg-teal-500 hover:bg-teal-600',
    },
    {
      title: 'Auxiliar de Enfermería',
      price: 'desde $110.000 / turno',
      icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
      description: 'Atención integral para adultos mayores que requieren acompañamiento y supervisión profesional en su día a día.',
      features: [
        'Aseguramos que siga correctamente sus tratamientos',
        'Monitoreo de signos vitales para prevenir complicaciones',
        'Reportes periódicos para devolverte la tranquilidad'
      ],
      badge: 'Recomendado',
      borderColor: 'border-blue-400',
      iconBg: 'bg-blue-50',
      btnColor: 'bg-[var(--color-nonnas-blue)] hover:bg-[var(--color-nonnas-blue-dark)]',
    },
    {
      title: 'Supervisión profesional de enfermería',
      price: 'Incluido en todos los servicios',
      icon: <CheckCircle2 className="w-8 h-8 text-purple-500" />,
      description: 'Todos nuestros servicios están respaldados por una enfermera profesional con más de 15 años de experiencia, quien supervisa protocolos, orienta al equipo de cuidado y garantiza que cada caso reciba la atención adecuada según sus necesidades.',
      features: [
        'Supervisión estricta de protocolos',
        'Orientación al equipo de cuidado',
        'Respaldo clínico constante'
      ],
      badge: 'Respaldo',
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
              <div className="text-[var(--color-nonnas-mint-dark)] font-medium text-sm mb-4 flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                Cotización Personalizada
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
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
                Habla hoy con una enfermera jefe.
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
