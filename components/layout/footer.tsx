import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle, Award, Clock, Shield } from 'lucide-react'
import { LauCamLogo } from '@/components/lau-cam-logo'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <LauCamLogo size="lg" />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Líderes en tecnología de iluminación LED con más de 15 años de experiencia. 
              Transformamos espacios con soluciones innovadoras y eficientes.
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-lau-cam-yellow/10 text-lau-cam-yellow px-3 py-2 rounded-full text-xs font-medium">
                <Award className="h-3 w-3" />
                Certificado ISO
              </div>
              <div className="flex items-center gap-2 bg-lau-cam-blue/10 text-lau-cam-blue px-3 py-2 rounded-full text-xs font-medium">
                <Shield className="h-3 w-3" />
                Garantía 5 años
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-lau-cam-yellow">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-slate-300 hover:text-lau-cam-yellow transition-colors text-sm">
                Inicio
              </Link>
              <Link href="/blog" className="text-slate-300 hover:text-lau-cam-yellow transition-colors text-sm">
                Blog
              </Link>
              <Link href="/projects" className="text-slate-300 hover:text-lau-cam-yellow transition-colors text-sm">
                Proyectos
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-lau-cam-yellow transition-colors text-sm">
                Nosotros
              </Link>
              <Link href="/contact" className="text-slate-300 hover:text-lau-cam-yellow transition-colors text-sm">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
  <h4 className="font-bold text-lg text-lau-cam-yellow">Servicios</h4>
  <div className="flex flex-col space-y-3">
    <span className="text-slate-300 text-sm">Tecnología LED</span>
    <span className="text-slate-300 text-sm">Eficiencia Energética</span>
    <span className="text-slate-300 text-sm">Proyectos Personalizados</span>
    <span className="text-slate-300 text-sm">Iluminación Inteligente</span>
    <span className="text-slate-300 text-sm">Mantenimiento</span>
  </div>
</div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-lau-cam-yellow">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-300 hover:text-lau-cam-yellow transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">lcaminos@lau-cam.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 hover:text-lau-cam-yellow transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+54 9 3512 57-6096</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 hover:text-lau-cam-yellow transition-colors">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Córdoba, Argentina</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Lun-Vie: 9:00-18:00</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h5 className="font-semibold text-slate-300">Síguenos</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-lau-cam-yellow transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-lau-cam-yellow transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-lau-cam-yellow transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-lau-cam-yellow transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-4">
              <a 
                href="https://wa.me/5493512576096" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Rápido
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-slate-400">
                © 2024 LAU-CAM. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 text-sm text-slate-400">
                <Link href="/privacy" className="hover:text-lau-cam-yellow transition-colors">
                  Privacidad
                </Link>
                <Link href="/terms" className="hover:text-lau-cam-yellow transition-colors">
                  Términos
                </Link>
                <Link href="/cookies" className="hover:text-lau-cam-yellow transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  )
}