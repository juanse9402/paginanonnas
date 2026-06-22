'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      nombre_completo: formData.get('nombre') as string,
      telefono: formData.get('telefono') as string,
      correo: formData.get('correo') as string,
      servicio_interes: formData.get('servicio') as string,
      mensaje: formData.get('mensaje') as string,
    };

    try {
      const { error: supabaseError } = await supabase
        .from('leads_contacto')
        .insert([data]);

      if (supabaseError) throw supabaseError;

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      console.error('Error al enviar formulario:', err);
      setError('Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo o contáctanos por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "¿La valoración inicial tiene algún costo?",
      answer: "No, nuestra visita de valoración clínica es totalmente gratuita y sin compromiso."
    },
    {
      question: "¿El personal está capacitado?",
      answer: "Sí, todas nuestras auxiliares son profesionales certificadas y pasan por un riguroso proceso de selección."
    },
    {
      question: "¿Qué pasa si hay una emergencia?",
      answer: "Contamos con protocolos de emergencia médica y línea de soporte 24/7 para nuestros pacientes activos."
    }
  ];

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-white opacity-[0.02] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[500px] h-[500px] bg-[var(--color-nonnas-mint)] opacity-[0.05] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna Izquierda: Confianza y FAQ */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Da el primer paso hacia la <span className="text-[var(--color-nonnas-mint)]">tranquilidad</span> de tu familia.
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-xl">
              Cotiza nuestros servicios sin compromiso. Déjanos tus datos y un coordinador clínico te contactará en breve para entender las necesidades de tu ser querido.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/5">
                  <Phone className="text-[var(--color-nonnas-mint)] w-5 h-5" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Línea de Atención</p>
                  <p className="font-semibold text-lg">+57 317 437 3251</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/5">
                  <Mail className="text-[var(--color-nonnas-mint)] w-5 h-5" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Correo Electrónico</p>
                  <p className="font-semibold text-lg">info@cuidadononnas.com</p>
                </div>
              </div>
            </div>

            {/* Preguntas Frecuentes (Acordeón) */}
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-white">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex justify-between items-center text-left focus:outline-none group"
                    >
                      <span className="font-medium text-blue-50 group-hover:text-[var(--color-nonnas-mint)] transition-colors pr-4">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-blue-300 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180 text-[var(--color-nonnas-mint)]' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 text-blue-200 text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Formulario Glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 relative">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Solicitud de Valoración</h3>
                <p className="text-gray-500 mt-2">Completa el formulario y te responderemos en minutos.</p>
              </div>

              {success ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[var(--color-nonnas-mint-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Enviada!</h3>
                  <p className="text-gray-600 text-lg">
                    Gracias por contactarnos. Un coordinador clínico se comunicará contigo a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Nombre Completo *</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-nonnas-mint)] focus:border-[var(--color-nonnas-mint)] transition-all outline-none"
                        placeholder="Tu nombre y apellido"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Teléfono de Contacto *</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-nonnas-mint)] focus:border-[var(--color-nonnas-mint)] transition-all outline-none"
                        placeholder="Ej. 317 437 3251"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Correo Electrónico</label>
                      <input
                        type="email"
                        id="correo"
                        name="correo"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-nonnas-mint)] focus:border-[var(--color-nonnas-mint)] transition-all outline-none"
                        placeholder="tu@email.com (Opcional)"
                      />
                    </div>
                    <div>
                      <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Servicio de Interés *</label>
                      <select
                        id="servicio"
                        name="servicio"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-nonnas-mint)] focus:border-[var(--color-nonnas-mint)] transition-all outline-none"
                      >
                        <option value="" disabled>Selecciona un servicio</option>
                        <option value="Cuidado Clínico">Cuidado Clínico / Asistencial</option>
                        <option value="Acompañamiento en Casa">Cuidadora en Casa / Acompañamiento</option>
                        <option value="Otro">Otro / Necesito Asesoría</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Detalles del Paciente *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={4}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-nonnas-mint)] focus:border-[var(--color-nonnas-mint)] transition-all outline-none resize-none"
                      placeholder="Cuéntanos brevemente la edad y condición de salud de tu familiar..."
                    ></textarea>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl text-white font-bold text-lg transition-all shadow-lg flex items-center justify-center mt-2
                      ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[var(--color-nonnas-blue)] hover:bg-[var(--color-nonnas-blue-dark)] hover:shadow-xl hover:-translate-y-1'}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </span>
                    ) : 'Cotizar Servicio Ahora'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
