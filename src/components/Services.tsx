'use client';

import { Activity, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'Cuidado Clínico / Asistencial',
      status: 'Actualmente activo',
      icon: <Activity className="w-8 h-8 text-[var(--color-nonnas-blue)]" />,
      description: 'Para pacientes post-operatorios o con condiciones crónicas. Control estricto de medicamentos y signos vitales para prevenir urgencias innecesarias.',
      features: ['Monitoreo clínico riguroso', 'Administración exacta de medicamentos', 'Notas de enfermería en tiempo real', 'Turnos flexibles 12/24 hrs'],
      active: true,
      borderColor: 'border-[var(--color-nonnas-blue)]',
      iconBg: 'bg-blue-50',
    },
    {
      title: 'Cuidadora en Casa / Acompañamiento',
      status: 'Próximamente',
      icon: <Heart className="w-8 h-8 text-[var(--color-nonnas-mint-dark)]" />,
      description: 'Para un envejecimiento digno, seguro y feliz. Apoyamos sus actividades diarias, prevenimos accidentes y estimulamos su mente con cariño.',
      features: ['Apoyo en actividades diarias', 'Prevención de caídas y accidentes', 'Alimentación nutritiva y a tiempo', 'Compañía empática y activa'],
      active: false,
      borderColor: 'border-[var(--color-nonnas-mint)]',
      iconBg: 'bg-teal-50',
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-full h-full bg-dots-pattern opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
              Servicios Diseñados para tu Tranquilidad
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Cuidado profesional y empático adaptado a las necesidades específicas de tu ser querido, para que no tengas que preocuparte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/60 backdrop-blur-2xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 border border-white/80 overflow-hidden group`}
            >
              {/* Línea superior decorativa */}
              <div className={`absolute top-0 left-0 w-full h-1 ${service.active ? 'bg-[var(--color-nonnas-blue)]' : 'bg-[var(--color-nonnas-mint)]'}`}></div>
              
              <div className="flex justify-between items-start mb-6 mt-2">
                <div className={`p-4 rounded-full ${service.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                  {service.icon}
                </div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  service.active 
                    ? 'bg-blue-50 text-[var(--color-nonnas-blue-dark)]' 
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {service.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <div className={`mr-3 p-1 rounded-full ${service.active ? 'bg-blue-50' : 'bg-teal-50'}`}>
                      <svg className={`w-3 h-3 ${service.active ? 'text-[var(--color-nonnas-blue)]' : 'text-[var(--color-nonnas-mint-dark)]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
