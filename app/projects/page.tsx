'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Filter, 
  Lightbulb, 
  Zap, 
  Award, 
  Building, 
  Home, 
  Factory,
  Calendar,
  MapPin,
  ArrowRight,
  Eye,
  ExternalLink
} from 'lucide-react'
import Image from 'next/image'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel'

// Imágenes para muebles y herrerías
const mueblesImages = [
  '/images/muebles/image.png',
  '/images/muebles/image copy.png',
  '/images/muebles/image copy 2.png',
  '/images/muebles/image copy 3.png',
  '/images/muebles/image copy 4.png',
  '/images/muebles/image copy 5.png',
  '/images/muebles/image copy 6.png',
  '/images/muebles/image copy 7.png',
  '/images/muebles/image copy 8.png',
  '/images/muebles/image copy 9.png',
  '/images/muebles/image copy 10.png',
]

// Imágenes para columnas
const columnasImages = [
  '/images/columnas.png',
]

// Imágenes para herrería
const herreriaImages = [
  '/images/herreria2.png',
]

// Categorías de proyectos
const projectCategories = [
  {
    id: "alumbrado",
    title: "Alumbrado e Iluminación",
    description: "Soluciones de iluminación para espacios públicos y privados",
    icon: Lightbulb,
    color: "bg-lau-cam-yellow/10 text-lau-cam-yellow border-lau-cam-yellow/20"
  },
  {
    id: "columnas",
    title: "Columnas",
    description: "Columnas metálicas para alumbrado y señalización",
    icon: Factory,
    color: "bg-lau-cam-blue/10 text-lau-cam-blue border-lau-cam-blue/20",
    images: columnasImages
  },
  {
    id: "muebles",
    title: "Muebles y Herrerías",
    description: "Mobiliario urbano y trabajos de herrería personalizados",
    icon: Home,
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    images: mueblesImages
  }
]

// Proyectos originales (mantener para referencia)
const projects = [
  {
    id: 1,
    title: "Complejo Deportivo Nocturno - Elenia",
    category: "Deportivo",
    location: "Córdoba, Argentina",
    date: "2024",
    image: "/images/inicio.png",
    description: "Instalación completa de iluminación LED para complejo deportivo Elenia con 3 canchas de fútbol de césped artificial, 6 canchas de pádel, restaurante y amplias zonas de estacionamiento. Sistema de iluminación nocturna que permite actividades deportivas las 24 horas.",
    features: ["3 canchas de fútbol iluminadas", "6 canchas de pádel con iluminación LED", "Restaurante y área de servicios", "Estacionamiento LED completo", "Columnas metálicas especializadas", "Control de iluminación por zonas"],
    icon: Award,
    color: "bg-green-500/10 text-green-500 border-green-500/20"
  },
  {
    id: 2,
    title: "Torres Viales LED - Autopista Norte",
    category: "Vial",
    location: "Córdoba, Argentina",
    date: "2024",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Fabricación e instalación de torres metálicas para iluminación vial con tecnología LED de alta eficiencia y diseño anti-vandálico",
    features: ["Torres de acero galvanizado", "Tecnología LED de alta eficiencia", "Diseño anti-vandálico", "Instalación especializada"],
    icon: Factory,
    color: "bg-lau-cam-blue/10 text-lau-cam-blue border-lau-cam-blue/20"
  },
  {
    id: 3,
    title: "Columnas de Alumbrado Público - Centro Histórico",
    category: "Público",
    location: "Córdoba, Argentina",
    date: "2024",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Fabricación e instalación de columnas metálicas para alumbrado público del centro histórico con diseño clásico y tecnología LED moderna",
    features: ["Columnas de acero galvanizado", "Diseño clásico urbano", "Tecnología LED moderna", "Instalación en centro histórico"],
    icon: Home,
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
  },
  {
    id: 4,
    title: "Iluminación Comercial - Tienda Retail",
    category: "Comercial",
    location: "Valencia, España",
    date: "2024",
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Sistema de iluminación LED para espacio comercial con control de temperatura de color y regulación de intensidad",
    features: ["Temperatura de color regulable", "Control de intensidad", "Diseño comercial", "Ahorro energético 70%"],
    icon: Building,
    color: "bg-lau-cam-yellow/10 text-lau-cam-yellow border-lau-cam-yellow/20"
  },
  {
    id: 5,
    title: "Proyecto LED Exterior - Iluminación Pública",
    category: "Exterior",
    location: "Sevilla, España",
    date: "2023",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Instalación de iluminación LED para vía pública con sistema de control centralizado y sensores de luz natural",
    features: ["LED exterior resistente", "Control centralizado", "Sensores de luz natural", "Mantenimiento reducido"],
    icon: Award,
    color: "bg-green-500/10 text-green-500 border-green-500/20"
  },
  {
    id: 6,
    title: "Oficinas Corporativas - Edificio de Negocios",
    category: "Oficinas",
    location: "Bilbao, España",
    date: "2023",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Iluminación LED inteligente para oficinas con sensores de presencia, control de brillo automático y diseño ergonómico",
    features: ["Sensores de presencia", "Control de brillo automático", "Diseño ergonómico", "Confort visual"],
    icon: Building,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
  },
  {
    id: 7,
    title: "Hotel Boutique - Iluminación Atmosférica",
    category: "Hotelería",
    location: "Málaga, España",
    date: "2023",
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Diseño de iluminación atmosférica para hotel con efectos de color dinámicos, control por zonas y programación horaria",
    features: ["Efectos de color dinámicos", "Control por zonas", "Programación horaria", "Atmósfera personalizable"],
    icon: Award,
    color: "bg-pink-500/10 text-pink-500 border-pink-500/20"
  },
  {
    id: 8,
    title: "Proyecto LED Industrial - Almacén Logístico",
    category: "Industrial",
    location: "Zaragoza, España",
    date: "2023",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Iluminación LED de alta eficiencia para almacén logístico con sistema de control inteligente y sensores de movimiento",
    features: ["LED de alta eficiencia", "Control inteligente", "Sensores de movimiento", "Ahorro energético 85%"],
    icon: Factory,
    color: "bg-lau-cam-blue/10 text-lau-cam-blue border-lau-cam-blue/20"
  },
  {
    id: 9,
    title: "Villa de Lujo - Iluminación Arquitectónica",
    category: "Residencial",
    location: "Marbella, España",
    date: "2023",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Proyecto de iluminación arquitectónica para villa de lujo con sistema domótico completo y efectos especiales",
    features: ["Iluminación arquitectónica", "Sistema domótico completo", "Efectos especiales", "Diseño personalizado"],
    icon: Home,
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
  }
]

const categories = ["Todos", "Deportivo", "Vial", "Público", "Industrial", "Comercial", "Exterior", "Oficinas"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProjectCategory, setSelectedProjectCategory] = useState<string | null>(null)

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "Todos" || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lau-cam-yellow/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lau-cam-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lau-cam-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Nuestros <span className="text-lau-cam-yellow">Proyectos</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestros trabajos en alumbrado, columnas, muebles y herrerías
          </p>
        </div>
      </section>

      {/* Categorías de Proyectos */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Categorías de Proyectos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectCategories.map((category) => (
              <Card 
                key={category.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-slate-800 cursor-pointer"
                onClick={() => setSelectedProjectCategory(category.id)}
              >
                <div className="relative h-60 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                  <category.icon className="h-24 w-24 text-slate-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <Badge className={`${category.color} border mb-4`}>
                    {category.title}
                  </Badge>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-lau-cam-yellow transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {category.description}
                  </p>
                  
                  <Button variant="outline" size="sm" className="group">
                    <Eye className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Ver Proyectos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Muebles y Herrerías */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Muebles y Herrerías</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-3xl mx-auto">
            Nuestros trabajos de herrería y mobiliario urbano personalizados
          </p>
          
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {mueblesImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg aspect-square relative">
                        <Image 
                          src={image} 
                          alt={`Mueble y herrería ${index + 1}`} 
                          fill 
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Sección de Columnas */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Columnas</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-3xl mx-auto">
            Nuestras columnas metálicas para alumbrado y señalización
          </p>
          
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {columnasImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg aspect-square relative">
                        <Image 
                          src={image} 
                          alt={`Columna ${index + 1}`} 
                          fill 
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Sección de Alumbrado e Iluminación */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Alumbrado e Iluminación</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-3xl mx-auto">
            Nuestras soluciones de iluminación para espacios públicos y privados
          </p>
          
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {herreriaImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg aspect-square relative">
                        <Image 
                          src={image} 
                          alt={`Iluminación ${index + 1}`} 
                          fill 
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-lau-cam-blue to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes un Proyecto en Mente?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te ayudaremos a crear la solución perfecta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lau-cam-yellow text-slate-900 hover:bg-lau-cam-yellow/90">
              Solicitar Consulta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
              Ver Portfolio Completo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}