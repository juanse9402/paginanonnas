'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, HeartPulse, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const whatsappNumber = "573174373251"; // Reemplaza con el número real
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola,%20me%20gustar%C3%ADa%20hablar%20con%20un%20asesor%20sobre%20los%20servicios%20de%20Cuidado%20Nonnas.`;

  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="absolute inset-0 bg-dots-pattern opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Columna Izquierda (Texto) */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-teal-50 text-[var(--color-nonnas-blue-dark)] text-sm font-semibold mb-6 border border-teal-100 shadow-sm">
                Servicio Especializado
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900">
                Cuidado profesional para adultos mayores 
              </span>
              <br className="hidden md:block" />
              <span className="text-[var(--color-nonnas-blue)] relative inline-block mt-2">
                en la comodidad de su hogar
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[var(--color-nonnas-mint)] opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Recupera la tranquilidad de saber que tu ser querido está acompañado por personal capacitado, comprometido con su bienestar y supervisado por profesionales de enfermería.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-8 hidden md:block"
            >
              <h3 className="text-sm font-bold text-[var(--color-nonnas-blue-dark)] mb-3">Acompañamiento profesional pensado para el bienestar de tu familiar:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-gray-700 text-left mx-auto lg:mx-0 max-w-2xl">
                {[
                  "Auxiliares de enfermería capacitadas.",
                  "Supervisión y seguimiento profesional.",
                  "Apoyo en actividades diarias.",
                  "Administración y control de medicamentos.",
                  "Acompañamiento domiciliario y hospitalario.",
                  "Atención adaptada a cada necesidad."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[var(--color-nonnas-mint-dark)] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4"
            >
              <a 
                href="#contacto" 
                className="w-full sm:w-auto flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-teal-400/80 to-blue-500/80 backdrop-blur-xl border border-white/50 text-white px-5 py-2.5 rounded-2xl font-semibold transition-all duration-300 shadow-[0_8px_32px_rgba(43,108,176,0.3)] hover:shadow-[0_12px_40px_rgba(43,108,176,0.5)] hover:scale-105 active:scale-95"
              >
                <div className="flex items-center gap-2 text-sm">
                  Solicitar Valoración Sin Costo
                  <ArrowRight size={16} />
                </div>
                <span className="text-[10px] font-normal text-teal-50 opacity-90">Respuesta inmediata sin compromiso</span>
              </a>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/30 hover:bg-white/50 backdrop-blur-xl border border-white/60 text-blue-900 px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:scale-105 active:scale-95 group"
              >
                Hablar con un Asesor
                <MessageCircle size={16} className="text-green-600 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Columna Derecha (Composición Visual) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-full"
          >
            {/* Contenedor principal de la imagen */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100 aspect-video md:aspect-[4/3] lg:aspect-[4/3] z-10">
              <Image 
                src="/premium_hero.png" 
                alt="Enfermera profesional cuidando" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay sutil para la imagen */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-nonnas-blue-dark)]/40 to-transparent"></div>
            </div>

            {/* Elemento flotante 1: Signos vitales */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-6 md:-left-12 bottom-20 bg-white/70 backdrop-blur-xl p-4 rounded-[2rem] shadow-[0_15px_35px_rgba(0,0,0,0.1)] flex items-center gap-4 z-20 border border-white/60"
            >
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Monitoreo</p>
                <p className="text-gray-900 font-bold text-sm">Seguimiento profesional</p>
              </div>
            </motion.div>

            {/* Elemento flotante 2: Soporte */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 md:-right-8 bottom-12 md:bottom-24 bg-white/80 backdrop-blur-xl p-4 rounded-[2rem] shadow-[0_15px_35px_rgba(0,0,0,0.15)] flex items-center gap-4 z-20 border border-white/60"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--color-nonnas-mint-light)] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-[var(--color-nonnas-mint-dark)]" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm leading-tight max-w-[150px]">Coordinación y atención permanente para tu tranquilidad</p>
              </div>
            </motion.div>

            {/* Círculo decorativo de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[var(--color-nonnas-blue-light)] to-[var(--color-nonnas-mint-light)] rounded-full blur-3xl opacity-40 -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
