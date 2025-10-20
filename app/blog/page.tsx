'use client'

import { useState, useEffect } from 'react'
import { PostCard } from '@/components/blog/post-card'
import { HeroSection } from '@/components/blog/hero-section'
import { SearchFilter } from '@/components/blog/search-filter'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

// Mock data - In a real app, this would come from the database
const mockPosts = [
  {
    id: '1',
    title: 'Tecnología LED: El Futuro de la Iluminación Eficiente',
    slug: 'tecnologia-led-futuro-iluminacion-eficiente',
    summary: 'Descubre cómo la tecnología LED está revolucionando la industria de la iluminación con mayor eficiencia energética y durabilidad.',
    featuredImage: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    publishedAt: new Date('2024-01-15'),
    author: { name: 'Carlos Martínez' },
    categories: [{ category: { name: 'Tecnología LED', slug: 'tecnologia-led' } }],
    tags: [
      { tag: { name: 'Eficiencia Energética', slug: 'eficiencia-energetica' } },
      { tag: { name: 'Innovación', slug: 'innovacion' } }
    ]
  },
  {
    id: '2',
    title: 'Diseño de Iluminación Arquitectónica: Principios y Tendencias',
    slug: 'diseno-iluminacion-arquitectonica-principios-tendencias',
    summary: 'Guía completa sobre cómo diseñar sistemas de iluminación que no solo iluminen, sino que transformen y embellezcan los espacios.',
    featuredImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    publishedAt: new Date('2024-01-10'),
    author: { name: 'Ana García' },
    categories: [{ category: { name: 'Diseño', slug: 'diseno' } }],
    tags: [
      { tag: { name: 'Arquitectura', slug: 'arquitectura' } },
      { tag: { name: 'Tendencias', slug: 'tendencias' } }
    ]
  },
  {
    id: '3',
    title: 'Iluminación Inteligente: Domótica y Control Automático',
    slug: 'iluminacion-inteligente-domotica-control-automatico',
    summary: 'Explora las últimas innovaciones en iluminación inteligente y cómo integrar sistemas de control automático en tu hogar o negocio.',
    featuredImage: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    publishedAt: new Date('2024-01-05'),
    author: { name: 'Miguel López' },
    categories: [{ category: { name: 'Domótica', slug: 'domotica' } }],
    tags: [
      { tag: { name: 'Smart Home', slug: 'smart-home' } },
      { tag: { name: 'Automatización', slug: 'automatizacion' } }
    ]
  },
  {
    id: '4',
    title: 'Ahorro Energético con LED: Cálculos y Beneficios',
    slug: 'ahorro-energetico-led-calculos-beneficios',
    summary: 'Aprende a calcular el ahorro energético real de los sistemas LED y descubre los beneficios económicos y ambientales.',
    featuredImage: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    publishedAt: new Date('2024-01-01'),
    author: { name: 'Laura Fernández' },
    categories: [{ category: { name: 'Eficiencia Energética', slug: 'eficiencia-energetica' } }],
    tags: [
      { tag: { name: 'Ahorro', slug: 'ahorro' } },
      { tag: { name: 'Sostenibilidad', slug: 'sostenibilidad' } }
    ]
  },
  {
    id: '5',
    title: 'Iluminación Comercial: Mejores Prácticas para Retail',
    slug: 'iluminacion-comercial-mejores-practicas-retail',
    summary: 'Cómo diseñar sistemas de iluminación que aumenten las ventas y mejoren la experiencia del cliente en espacios comerciales.',
    featuredImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    publishedAt: new Date('2023-12-28'),
    author: { name: 'Roberto Silva' },
    categories: [{ category: { name: 'Comercial', slug: 'comercial' } }],
    tags: [
      { tag: { name: 'Retail', slug: 'retail' } },
      { tag: { name: 'Marketing', slug: 'marketing' } }
    ]
  },
  {
    id: '6',
    title: 'Mantenimiento de Sistemas LED: Guía Completa',
    slug: 'mantenimiento-sistemas-led-guia-completa',
    summary: 'Todo lo que necesitas saber sobre el mantenimiento de sistemas LED para maximizar su vida útil y rendimiento.',
    featuredImage: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    publishedAt: new Date('2023-12-20'),
    author: { name: 'Elena Ruiz' },
    categories: [{ category: { name: 'Mantenimiento', slug: 'mantenimiento' } }],
    tags: [
      { tag: { name: 'Mantenimiento', slug: 'mantenimiento' } },
      { tag: { name: 'Durabilidad', slug: 'durabilidad' } }
    ]
  }
]

const mockCategories = [
  { name: 'Tecnología LED', slug: 'tecnologia-led' },
  { name: 'Diseño', slug: 'diseno' },
  { name: 'Domótica', slug: 'domotica' },
  { name: 'Eficiencia Energética', slug: 'eficiencia-energetica' },
  { name: 'Comercial', slug: 'comercial' },
  { name: 'Mantenimiento', slug: 'mantenimiento' },
]

const mockTags = [
  { name: 'Eficiencia Energética', slug: 'eficiencia-energetica' },
  { name: 'Innovación', slug: 'innovacion' },
  { name: 'Arquitectura', slug: 'arquitectura' },
  { name: 'Tendencias', slug: 'tendencias' },
  { name: 'Smart Home', slug: 'smart-home' },
  { name: 'Automatización', slug: 'automatizacion' },
  { name: 'Ahorro', slug: 'ahorro' },
  { name: 'Sostenibilidad', slug: 'sostenibilidad' },
  { name: 'Retail', slug: 'retail' },
  { name: 'Marketing', slug: 'marketing' },
  { name: 'Mantenimiento', slug: 'mantenimiento' },
  { name: 'Durabilidad', slug: 'durabilidad' },
]

export default function BlogPage() {
  const [filteredPosts, setFilteredPosts] = useState(mockPosts)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [postsToShow, setPostsToShow] = useState(6)

  const featuredPost = mockPosts[0]

  useEffect(() => {
    let filtered = mockPosts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post =>
        post.categories.some(cat => cat.category.slug === selectedCategory)
      )
    }

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(post =>
        post.tags.some(tag => tag.tag.slug === selectedTag)
      )
    }

    setFilteredPosts(filtered)
  }, [searchTerm, selectedCategory, selectedTag])

  const loadMore = () => {
    setPostsToShow(prev => prev + 6)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lau-cam-yellow/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lau-cam-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lau-cam-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Blog de <span className="text-lau-cam-yellow">Iluminación</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubre las últimas tendencias, consejos y novedades en tecnología de iluminación LED, 
            eficiencia energética y diseño arquitectónico
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Artículo <span className="text-lau-cam-yellow">Destacado</span>
                </h2>
              </div>
              <PostCard post={featuredPost} />
            </div>
          </div>
        </section>
      )}
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <SearchFilter
                categories={mockCategories}
                tags={mockTags}
                onSearchChange={setSearchTerm}
                onCategoryFilter={setSelectedCategory}
                onTagFilter={setSelectedTag}
                selectedCategory={selectedCategory}
                selectedTag={selectedTag}
              />
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {searchTerm || selectedCategory || selectedTag ? 'Resultados de Búsqueda' : 'Últimos Artículos'}
              </h2>
              <div className="flex items-center gap-4">
                <p className="text-slate-600 dark:text-slate-300">
                  {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''}
                </p>
                {(searchTerm || selectedCategory || selectedTag) && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedCategory(null)
                      setSelectedTag(null)
                    }}
                  >
                    Limpiar Filtros
                  </Button>
                )}
              </div>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-300 mb-2">
                  No se encontraron artículos
                </h3>
                <p className="text-slate-500 mb-6">
                  Intenta ajustar los filtros o términos de búsqueda
                </p>
                <Button onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory(null)
                  setSelectedTag(null)
                }}>
                  Ver Todos los Artículos
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.slice(0, postsToShow).map((post, index) => (
                    <div 
                      key={post.id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <PostCard post={post} />
                    </div>
                  ))}
                </div>

                {filteredPosts.length > postsToShow && (
                  <div className="text-center pt-8">
                    <Button 
                      onClick={loadMore} 
                      size="lg" 
                      className="bg-lau-cam-yellow text-slate-900 hover:bg-lau-cam-yellow/90"
                    >
                      Cargar Más Artículos
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}