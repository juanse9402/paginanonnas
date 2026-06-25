export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Cuidados Nonnas</h3>
            <p className="text-gray-400 max-w-xs mb-6">
              El cuidado profesional que tus seres queridos merecen, en la comodidad de su hogar.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cuidadosnonnas/" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Instagram" className="text-gray-400 hover:text-[var(--color-nonnas-mint)] transition-colors hover:scale-110 transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583523158510" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Facebook" className="text-gray-400 hover:text-[#1877F2] transition-colors hover:scale-110 transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#metodo" className="hover:text-white transition-colors">Nuestro Método</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Únete al Equipo</h4>
            <ul className="space-y-2">
              <li><a href="mailto:rrhh@cuidadosnonnas.com" className="hover:text-white transition-colors">Trabaja con nosotros</a></li>
              <li><a href="mailto:rrhh@cuidadosnonnas.com" className="hover:text-white transition-colors text-[var(--color-nonnas-mint)]">Enviar Hoja de Vida</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: soporte@cuidadosnonnas.com</li>
              <li>Teléfono: +57 317 437 3251</li>
              <li>Atención 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Cuidados Nonnas. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Términos y Condiciones</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
