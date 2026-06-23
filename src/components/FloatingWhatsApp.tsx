'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const whatsappNumber = "573174373251";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola,%20me%20gustar%C3%ADa%20hablar%20con%20un%20asesor%20sobre%20los%20servicios%20de%20Cuidado%20Nonnas.`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-[100]"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp con soporte"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:bg-green-600 hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        <MessageCircle size={32} className="fill-current" />
        
        {/* Tooltip flotante */}
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100">
          ¿Necesitas ayuda? Chatea con nosotros
        </span>
        
        {/* Efecto de pulso */}
        <span className="absolute w-full h-full rounded-full bg-green-500 opacity-50 animate-ping -z-10"></span>
      </a>
    </motion.div>
  );
}
