import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Users, Lightbulb, Award, Building2, Wrench, Settings, Shield } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros | LAU-CAM',
  description: 'Conoce más sobre LAU-CAM, fabricantes especializados en torres de iluminación y columnas de alumbrado público con más de 15 años de experiencia.',
}

export default function AboutPage() {
  const team = [
    {
      name: 'Luis Caminos',
      role: 'Director General',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: ['Fabricación Industrial', 'Gestión de Proyectos', 'Desarrollo Empresarial']
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Ingeniero de Producción',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: ['Diseño Estructural', 'Soldadura Industrial', 'Control de Calidad']
    },
    {
      name: 'Ana Martínez',
      role: 'Especialista en Iluminación',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: ['Tecnología LED', 'Diseño de Iluminación', 'Eficiencia Energética']
    }
  ]

  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
          Sobre LAU-CAM
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Somos fabricantes especializados en torres de iluminación y columnas de alumbrado público, 
          comprometidos con la calidad y la innovación en cada proyecto que realizamos
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="p-8">
            <CardContent className="pt-6 space-y-4">
              <Building2 className="h-12 w-12 text-primary" />
              <h2 className="text-2xl font-bold">Nuestra Misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fabricar torres de iluminación y columnas de alumbrado público de la más alta calidad, 
                utilizando tecnología de vanguardia y materiales premium para iluminar espacios 
                de manera eficiente y duradera.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="pt-6 space-y-4">
              <Lightbulb className="h-12 w-12 text-primary" />
              <h2 className="text-2xl font-bold">Nuestra Visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser el fabricante líder en Argentina de torres de iluminación y columnas de alumbrado público, 
                reconocidos por nuestra innovación, calidad y compromiso con la excelencia en cada proyecto.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada torre y columna que fabricamos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">Calidad</h3>
              <p className="text-sm text-muted-foreground">
                Cada torre y columna fabricada con los más altos estándares de calidad y durabilidad
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">Precisión</h3>
              <p className="text-sm text-muted-foreground">
                Fabricación exacta según especificaciones técnicas y requerimientos del cliente
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">Innovación</h3>
              <p className="text-sm text-muted-foreground">
                Incorporamos las últimas tecnologías y técnicas de fabricación industrial
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">Confiabilidad</h3>
              <p className="text-sm text-muted-foreground">
                Productos que garantizan seguridad y funcionamiento óptimo por décadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesionales experimentados con una pasión compartida por la fabricación de calidad
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-sm opacity-90">Torres Fabricadas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Acero Galvanizado</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}