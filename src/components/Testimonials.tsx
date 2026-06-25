'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "María Fernanda G.",
      relation: "Hija de paciente (78 años)",
      text: "Vivía angustiada por mi mamá mientras trabajaba. Desde que contratamos a Cuidados Nonnas, me envían fotos y reportes diarios. Por fin puedo dormir tranquila sabiendo que está bien atendida.",
      rating: 5,
    },
    {
      name: "Carlos A.",
      relation: "Hijo de paciente (82 años)",
      text: "La calidad humana de la auxiliar es increíble. No solo le administra sus medicamentos a tiempo, sino que le hace compañía y conversan. Mi papá ha mejorado muchísimo su estado de ánimo.",
      rating: 5,
    },
    {
      name: "Laura V.",
      relation: "Familiar de paciente post-operatorio",
      text: "Después de la cirugía de mi papá necesitábamos ayuda profesional urgente. El equipo de Nonnas actuó súper rápido. El profesionalismo con el cuidado de las heridas fue impecable.",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-nonnas-mint-light)]/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-nonnas-blue)] to-[var(--color-nonnas-mint-dark)]">
              Lo que dicen nuestras familias
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La confianza no se pide, se gana. Estas son las experiencias reales de quienes han confiado el cuidado de sus seres queridos en nosotros.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 border border-white/80 hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[var(--color-nonnas-mint)]/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-[var(--color-nonnas-blue)] font-medium">{testimonial.relation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
