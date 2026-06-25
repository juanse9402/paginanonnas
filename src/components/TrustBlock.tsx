'use client';

import { motion } from 'framer-motion';
import { UserCheck, Stethoscope, Clock, ShieldAlert, Heart } from 'lucide-react';

export default function TrustBlock() {
  const items = [
    {
      icon: <UserCheck className="w-6 h-6 text-teal-600" />,
      title: "Personal cuidadosamente seleccionado",
      description: "Perfiles verificados y evaluados para garantizar la mejor atención."
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
      title: "Supervisión permanente",
      description: "Respaldo continuo de enfermería profesional en cada caso."
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Seguimiento periódico",
      description: "Reportes constantes para la tranquilidad de los familiares."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-rose-600" />,
      title: "Protocolos de calidad y seguridad",
      description: "Estándares estrictos para el cuidado en el hogar."
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Atención personalizada",
      description: "Nos adaptamos a las rutinas y necesidades de cada familia."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block py-2 px-6 rounded-full bg-blue-50 text-[var(--color-nonnas-blue-dark)] text-sm md:text-base font-bold mb-6 border border-blue-100 shadow-sm"
          >
            Todos los servicios de NONNAS están supervisados por enfermería profesional.
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
            Tu tranquilidad comienza con nuestra rigurosidad
          </h2>
          <p className="text-lg text-gray-600">
            Nos diferenciamos por nuestro compromiso con la excelencia y la seguridad de tus seres queridos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 justify-center max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center ${index > 2 ? 'md:col-span-1.5 lg:col-span-1' : ''}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
