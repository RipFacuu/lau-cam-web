'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, MessageCircle, Lightbulb, Zap, Award } from 'lucide-react'
import { LauCamLogo } from '@/components/lau-cam-logo'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/20">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <LauCamLogo size="lg" />
          </Link>

          {/* Desktop Navigation - Absolutely Centered */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-slate-700/80 hover:text-slate-900 transition-colors font-medium group">
              Inicio
              <div className="h-0.5 bg-lau-cam-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <Link href="/projects" className="text-slate-700/80 hover:text-slate-900 transition-colors font-medium group">
              Proyectos
              <div className="h-0.5 bg-lau-cam-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <Link href="/about" className="text-slate-700/80 hover:text-slate-900 transition-colors font-medium group">
              Nosotros
              <div className="h-0.5 bg-lau-cam-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <Link href="/contact" className="text-slate-700/80 hover:text-slate-900 transition-colors font-medium group">
              Contacto
              <div className="h-0.5 bg-lau-cam-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3 flex-shrink-0 ml-auto">
            {/* Contact buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <a href="tel:+5493512576096">
                <Button variant="ghost" size="sm" className="hover:bg-lau-cam-blue/10 hover:text-lau-cam-blue transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar
                </Button>
              </a>
              <a href="https://wa.me/5493512576096" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-slate-200/20">
            <nav className="flex flex-col space-y-6">
              <Link 
                href="/" 
                className="text-slate-700/80 hover:text-slate-900 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/projects" 
                className="text-slate-700/80 hover:text-slate-900 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link 
                href="/about" 
                className="text-slate-700/80 hover:text-slate-900 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="/contact" 
                className="text-slate-700/80 hover:text-slate-900 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
            
            {/* Mobile contact buttons */}
            <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-slate-200/20">
              <a href="tel:+5493512576096" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar: +54 9 3512 57-6096
                </Button>
              </a>
              <a href="https://wa.me/5493512576096" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full justify-start bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Rápido
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}