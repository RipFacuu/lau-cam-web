import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, User } from 'lucide-react'

interface HeroSectionProps {
  featuredPost?: {
    id: string
    title: string
    slug: string
    summary: string
    featuredImage?: string | null
    publishedAt: Date | null
    author: {
      name: string
    }
    categories: {
      category: {
        name: string
        slug: string
      }
    }[]
  }
}

export function HeroSection({ featuredPost }: HeroSectionProps) {
  if (!featuredPost) {
    return (
      <section className="bg-gradient-to-r from-lau-cam-yellow/10 to-lau-cam-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Blog LAU-CAM
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnología de iluminación, eficiencia energética y soluciones innovadoras para tus proyectos
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-lau-cam-yellow/5 to-lau-cam-blue/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              Artículo Destacado
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {featuredPost.title}
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {featuredPost.summary}
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{featuredPost.author.name}</span>
              </div>
              {featuredPost.publishedAt && (
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{format(featuredPost.publishedAt, 'dd MMM yyyy', { locale: es })}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {featuredPost.categories.map((cat) => (
                <Badge key={cat.category.slug} variant="outline">
                  {cat.category.name}
                </Badge>
              ))}
            </div>
            
            <Link href={`/blog/${featuredPost.slug}`}>
              <Button size="lg" className="group">
                Leer Artículo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="aspect-video relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={featuredPost.featuredImage || 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}