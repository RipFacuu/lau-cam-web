import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, TrendingUp, Users, Zap, Lightbulb, Star, Award, Phone, MessageCircle, Building2, Wrench, Settings } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section - Más impactante */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        {/* Background con imagen parallax */}
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: 'url(/images/img.jpeg)',
          }}
        >
          {/* Overlay oscuro para mejor legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lau-cam-yellow/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lau-cam-yellow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lau-cam-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-lau-cam-yellow/10 text-lau-cam-yellow px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Building2 className="h-4 w-4" />
              Fabricantes Especializados en Torres y Columnas
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-lau-cam-yellow via-white to-lau-cam-blue bg-clip-text text-transparent">
                LAU-CAM
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-300 mb-6 max-w-4xl mx-auto leading-relaxed font-light">
              Fabricamos <span className="text-lau-cam-yellow font-semibold">torres de iluminación</span> y 
              <span className="text-lau-cam-yellow font-semibold"> columnas de alumbrado público</span> de máxima calidad
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link href="/projects">
              <Button size="lg" className="group bg-lau-cam-yellow text-slate-900 hover:bg-lau-cam-yellow/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-lau-cam-yellow/25 transition-all duration-300">
                Ver Proyectos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="https://wa.me/5493512576096" target='_blank'>
              <Button variant="outline" size="lg" className="text-black border-white/30 hover:bg-white/10 text-lg px-8 py-6 rounded-full backdrop-blur-sm">
                Contactar Ahora
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lau-cam-yellow mb-2">1000+</div>
              <div className="text-slate-400 text-sm">Torres Fabricadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lau-cam-yellow mb-2">15+</div>
              <div className="text-slate-400 text-sm">Años Fabricando</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lau-cam-yellow mb-2">100%</div>
              <div className="text-slate-400 text-sm">Eficiencia Energética</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lau-cam-yellow mb-2">24/7</div>
              <div className="text-slate-400 text-sm">Soporte Técnico</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-lau-cam-yellow/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-lau-cam-yellow rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Torres y Columnas <span className="text-lau-cam-yellow">Fabricadas</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Descubre algunos de nuestros proyectos más destacados donde hemos fabricado torres de iluminación 
              y columnas de alumbrado público de alta calidad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1 - Columnas */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/images/columnas.png"
                  alt="Torres Viales LED - Columnas de iluminación"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-lau-cam-blue/10 text-lau-cam-blue px-3 py-1 rounded-full text-sm font-medium">Columnas</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-lau-cam-blue transition-colors">
                  Columnas y torres de alumbrado publico
                </h3>
                <p className="text-slate-600 mb-4">
                Fabricamos columnas y torres metálicas reforzadas para alumbrado público, industrial y deportivo.
Disponibles en múltiples alturas y diseños, ideales para rutas, avenidas, parques, barrios privados, canchas y plazas.
Ofrecemos fabricación a medida. asegurando calidad, durabilidad y seguridad en cada proyecto.                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Córdoba, Argentina</span>
                </div>
              </CardContent>
            </Card>

            {/* Proyecto 2 - Iluminación */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/images/501454038_17880501684308285_9083789255022223789_n.jpg"
                  alt="Complejo Deportivo Elenia - Iluminación LED nocturna"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm font-medium">iluminación</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-500 transition-colors">
                Venta de Todo Tipo de Iluminación LED
                </h3>
                <p className="text-slate-600 mb-4">
                Iluminamos tus proyectos con tecnología LED. Contamos con soluciones completas para alumbrado público, deportivo y ornamental: estadios, canchas, plazas, parques, barrios privados y más.
Nuestros productos garantizan máxima eficiencia, bajo consumo y larga vida útil, con asesoramiento técnico para cada instalación.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Córdoba, Argentina</span>
                </div>
              </CardContent>
            </Card>

            {/* Proyecto 3 - Herrería */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/images/herreria2.png"
                  alt="Muebles de Hierro y Madera - Fabricación en herrería"
                  className="w-full h-full object-cover object-center scale-110 group-hover:scale-115 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">Herreria</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                  Muebles de Hierro y Madera
                </h3>
                <p className="text-slate-600 mb-4">
                Diseñamos y fabricamos muebles resistentes y modernos combinando hierro y madera de alta calidad.
Ideales para espacios públicos, plazas, canchas deportivas, parques y patios urbanos.
Nuestros modelos destacan por su durabilidad, estética industrial y bajo mantenimiento, con posibilidad de personalización según tu proyecto o marca.                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Córdoba, Argentina</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="group bg-slate-900 text-white hover:bg-slate-800 text-lg px-8 py-6 rounded-full">
                Todos los Proyectos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestra <span className="text-lau-cam-yellow">Fabricación</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Especialistas en la fabricación de torres de iluminación y columnas de alumbrado público 
              con tecnología de vanguardia y materiales de máxima calidad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group text-center p-8 hover:shadow-2xl transition-all duration-500 border-lau-cam-yellow/20 hover:border-lau-cam-yellow/40 bg-gradient-to-br from-lau-cam-yellow/5 to-transparent">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-lau-cam-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-10 w-10 text-lau-cam-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-lau-cam-yellow transition-colors">Iluminación LED Profesional</h3>
                <p className="text-slate-600 leading-relaxed">
                Llevamos la tecnología LED a otro nivel, ofreciendo soluciones completas para alumbrado público, deportivo y ornamental.
Contamos con proyectores, reflectores, luminarias viales y sistemas inteligentes de control lumínico.
Nuestros productos garantizan eficiencia energética, menor mantenimiento y máxima potencia lumínica, ideales para estadios, canchas, parques y obras públicas o privadas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group text-center p-8 hover:shadow-2xl transition-all duration-500 border-lau-cam-blue/20 hover:border-lau-cam-blue/40 bg-gradient-to-br from-lau-cam-blue/5 to-transparent">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-lau-cam-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="h-10 w-10 text-lau-cam-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-lau-cam-blue transition-colors">Columnas y Torres de Alumbrado</h3>
                <p className="text-slate-600 leading-relaxed">
                Fabricamos columnas y torres metálicas galvanizadas de alta resistencia, diseñadas para uso urbano, vial e industrial.
Disponibles en múltiples alturas y diseños, con opciones de base enterrada o brida, según las necesidades del proyecto.
Ofrecemos diseño estructural, transporte e instalación, asegurando seguridad, durabilidad y estética profesional en cada obra.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group text-center p-8 hover:shadow-2xl transition-all duration-500 border-lau-cam-yellow/20 hover:border-lau-cam-yellow/40 bg-gradient-to-br from-lau-cam-yellow/5 to-transparent">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-lau-cam-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-10 w-10 text-lau-cam-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-lau-cam-yellow transition-colors">Herrería y Muebles Industriales</h3>
                <p className="text-slate-600 leading-relaxed">
                Diseñamos y fabricamos muebles y estructuras de hierro y madera con un estilo moderno e industrial.
Ideales para espacios públicos, plazas, clubes y complejos deportivos, combinando resistencia, funcionalidad y diseño atractivo.
También realizamos trabajos de herrería a medida, adaptándonos a las necesidades estéticas y estructurales de cada cliente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lau-cam-yellow/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-lau-cam-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lau-cam-yellow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            ¿Necesitas <span className="text-lau-cam-yellow">Torres o Columnas</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Únete a más de 1000 clientes satisfechos que han confiado en nuestra fabricación 
            de torres de iluminación y columnas de alumbrado público
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
  <a href="https://wa.me/5493512576096" target="_blank" rel="noopener noreferrer">
    <Button size="lg" className="group bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
      <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
      WhatsApp Rápido
    </Button>
  </a>
</div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-lau-cam-yellow mb-2">1000+</div>
              <div className="text-slate-400 text-sm">Torres Fabricadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-lau-cam-yellow mb-2">15+</div>
              <div className="text-slate-400 text-sm">Años Fabricando</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-lau-cam-yellow mb-2">100%</div>
              <div className="text-slate-400 text-sm">Acero Galvanizado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-lau-cam-yellow mb-2">24/7</div>
              <div className="text-slate-400 text-sm">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/5493512576096" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            ¡Escríbenos por WhatsApp!
          </div>
        </a>
      </div>
    </div>
  )
}