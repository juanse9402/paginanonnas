'use client';

import { ShieldCheck, Smartphone, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Differentiators() {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-teal-500 group-hover:text-white transition-colors" />,
      title: "Perfiles Verificados (Conócela antes)",
      description: "Recibe el perfil completo de la enfermera (foto, certificaciones y experiencia) antes de que llegue a tu hogar. Tú tienes el control."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors" />,
      title: "Reporte Diario por WhatsApp",
      description: "Recibe todos los días un resumen detallado sobre los signos vitales, alimentación y estado de ánimo de tu ser querido."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-500 group-hover:text-white transition-colors" />,
      title: "Cobertura 24/7 en Todo Bogotá",
      description: "Llegamos a todas las localidades. Sin complicaciones ni largas esperas. El cuidado ideal, cuando más lo necesitas."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F7FAFC] to-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué confiar en Cuidado Nonnas?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entendemos la responsabilidad de cuidar a tus seres queridos. Por eso, hemos diseñado un servicio que te da control y paz mental.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group hover:-translate-y-2 relative"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 mb-6 transition-all duration-300 group-hover:bg-[var(--color-nonnas-blue)] group-hover:-translate-y-4 group-hover:shadow-lg shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
