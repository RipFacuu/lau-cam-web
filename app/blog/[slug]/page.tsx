import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { RelatedPosts } from '@/components/blog/related-posts'
import { markdownToHtml } from '@/lib/markdown'
import { Clock, User, Share2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Mock data - In a real app, this would come from the database
const mockPosts = [
  {
    id: '1',
    title: 'El Futuro de la Inteligencia Artificial en los Negocios',
    slug: 'futuro-inteligencia-artificial-negocios',
    summary: 'Descubre cómo la IA está transformando el panorama empresarial y las oportunidades que presenta para el crecimiento sostenible.',
    content: `# El Futuro de la Inteligencia Artificial en los Negocios

La **inteligencia artificial** está redefiniendo la manera en que las empresas operan, innovan y se relacionan con sus clientes. En un mundo cada vez más digitalizado, las organizaciones que abrazan esta tecnología están posicionándose para liderar el mercado del futuro.

## Transformación Digital: Más Allá de la Automatización

La IA no se trata únicamente de automatizar procesos existentes, sino de **reimaginar completamente** las operaciones empresariales. Las empresas líderes están utilizando algoritmos de aprendizaje automático para:

- Personalizar experiencias de cliente a gran escala
- Optimizar cadenas de suministro en tiempo real
- Predecir tendencias de mercado con precisión sin precedentes
- Automatizar la toma de decisiones estratégicas

## Casos de Uso Empresariales Exitosos

### 1. Atención al Cliente Inteligente
Los chatbots alimentados por IA están manejando el 80% de las consultas de rutina, permitiendo que los equipos humanos se enfoquen en problemas complejos que requieren empatía y creatividad.

### 2. Análisis Predictivo de Ventas
Las empresas están utilizando modelos de IA para analizar patrones de compra, comportamiento del consumidor y factores externos para predecir demanda futura con una precisión del 95%.

### 3. Optimización de Recursos Humanos
La IA está ayudando en la selección de talento, identificación de necesidades de capacitación y optimización de la productividad del equipo.

## Preparándose para el Futuro

> "Las empresas que no adopten IA en los próximos cinco años corren el riesgo de quedarse irrelevantemente atrás." - Estudio MIT Technology Review 2024

Para implementar exitosamente la IA en tu organización:

1. **Desarrolla una estrategia clara**: Define objetivos específicos y medibles
2. **Invierte en talento**: Capacita a tu equipo o contrata especialistas
3. **Comienza pequeño**: Implementa proyectos piloto antes de escalar
4. **Prioriza la ética**: Establece principios claros para el uso responsable de IA

La inteligencia artificial no es el futuro distante - es el presente. Las empresas que actúen ahora tendrán una ventaja competitiva significativa en el mercado que está emergiendo.`,
    featuredImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    publishedAt: new Date('2024-01-15'),
    author: { name: 'María González' },
    categories: [{ category: { name: 'Tecnología', slug: 'tecnologia' } }],
    tags: [
      { tag: { name: 'Inteligencia Artificial', slug: 'inteligencia-artificial' } },
      { tag: { name: 'Transformación Digital', slug: 'transformacion-digital' } }
    ]
  },
  {
    id: '2',
    title: 'Estrategias de Crecimiento Sostenible para PYMEs',
    slug: 'estrategias-crecimiento-sostenible-pymes',
    summary: 'Guía práctica para pequeñas y medianas empresas que buscan escalar de manera responsable y sostenible en el mercado actual.',
    content: `# Estrategias de Crecimiento Sostenible para PYMEs

El crecimiento empresarial no se trata solo de aumentar ingresos, sino de construir bases sólidas que permitan un desarrollo **sostenible y responsable** a largo plazo.

## Fundamentos del Crecimiento Sostenible

Para las PYMEs, el crecimiento sostenible implica equilibrar la ambición con la prudencia, asegurando que cada paso hacia adelante fortalezca la estructura organizacional en lugar de sobrecargarla.

### Principios Clave

- **Crecimiento orgánico**: Priorizar el desarrollo interno antes que las adquisiciones
- **Eficiencia operativa**: Optimizar procesos antes de escalar
- **Cultura empresarial sólida**: Mantener los valores fundamentales durante la expansión
- **Gestión financiera prudente**: Balancear inversión y estabilidad

## Estrategias Prácticas de Implementación

### 1. Diversificación Inteligente de Productos

En lugar de apostar todo a un solo producto o servicio, las PYMEs exitosas diversifican gradualmente su oferta:

- **Análisis de mercado**: Identificar nichos relacionados con tu expertise actual
- **Desarrollo incremental**: Lanzar productos complementarios
- **Feedback continuo**: Ajustar la oferta basándose en respuesta del mercado

### 2. Optimización de Procesos Internos

Antes de crecer, es fundamental fortalecer las operaciones existentes:

- Implementar sistemas de gestión eficientes
- Automatizar tareas repetitivas
- Establecer métricas de rendimiento claras
- Crear procedimientos estándar documentados

### 3. Construcción de Alianzas Estratégicas

Las partnerships bien estructuradas pueden acelerar el crecimiento sin comprometer recursos:

- **Colaboraciones complementarias**: Asociarse con empresas que ofrezcan servicios que complementen los tuyos
- **Redes de distribución**: Expandir alcance sin inversión directa en infraestructura
- **Intercambio de conocimiento**: Acceder a expertise externa

## Indicadores de Éxito

Para medir el progreso hacia un crecimiento sostenible, las PYMEs deben monitorear:

| Métrica | Objetivo | Frecuencia |
|---------|----------|------------|
| Margen de beneficio | Mantener o mejorar | Mensual |
| Satisfacción del cliente | >90% | Trimestral |
| Rotación de empleados | <15% anual | Trimestral |
| Flujo de caja | Positivo 6+ meses | Mensual |

## Errores Comunes a Evitar

1. **Crecer demasiado rápido**: Expandirse sin bases sólidas
2. **Descuidar la calidad**: Sacrificar estándares por volumen
3. **Ignorar la cultura**: Perder la identidad empresarial en el proceso
4. **Subestimar la competencia**: No adaptarse a cambios del mercado

El crecimiento sostenible es un maratón, no una carrera de velocidad. Las empresas que entienden esto construyen organizaciones resilientes capaces de prosperar en cualquier entorno económico.`,
    featuredImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    publishedAt: new Date('2024-01-10'),
    author: { name: 'Carlos Rodríguez' },
    categories: [{ category: { name: 'Negocios', slug: 'negocios' } }],
    tags: [{ tag: { name: 'Estrategia', slug: 'estrategia' } }]
  },
  {
    id: '3',
    title: 'Innovación en Tiempos de Cambio: Adaptabilidad Empresarial',
    slug: 'innovacion-tiempos-cambio-adaptabilidad',
    summary: 'Cómo las empresas pueden desarrollar capacidades de innovación continua para prosperar en entornos de cambio constante.',
    content: `# Innovación en Tiempos de Cambio: Adaptabilidad Empresarial

La capacidad de **innovar y adaptarse** se ha convertido en el factor diferenciador más importante para la supervivencia empresarial en el siglo XXI.

## La Nueva Realidad Empresarial

El panorama empresarial actual se caracteriza por:

- Cambios tecnológicos acelerados
- Preferencias del consumidor en constante evolución
- Competencia global intensificada
- Regulaciones cambiantes
- Crisis imprevistas que requieren pivotes rápidos

## Marco de Innovación Continua

### Cultura de Experimentación

Las organizaciones exitosas fomentan una mentalidad de **experimentación controlada**:

- Establecer "laboratorios de innovación" internos
- Implementar metodologías ágiles en todos los departamentos
- Celebrar los fracasos como oportunidades de aprendizaje
- Asignar tiempo específico para proyectos explorativos

### Tecnología como Habilitador

La tecnología no es un fin en sí misma, sino una herramienta para habilitar nuevas formas de crear valor:

- **Cloud computing**: Flexibilidad y escalabilidad
- **Análisis de datos**: Insights para decisiones informadas
- **Automatización**: Liberación de recursos para actividades estratégicas
- **Colaboración digital**: Equipos distribuidos más efectivos

## Estrategias de Adaptabilidad

### 1. Diversificación de Ingresos

No depender de una sola fuente de ingresos:

- Desarrollar múltiples líneas de productos/servicios
- Explorar nuevos mercados geográficos
- Crear modelos de negocio híbridos
- Establecer ingresos recurrentes

### 2. Agilidad Organizacional

Estructuras empresariales que permiten cambios rápidos:

- Equipos multifuncionales
- Procesos de toma de decisiones descentralizados
- Comunicación horizontal efectiva
- Flexibilidad en roles y responsabilidades

### 3. Ecosistema de Partners

Construir una red de colaboradores estratégicos:

- Proveedores flexibles y confiables
- Canales de distribución múltiples
- Alianzas tecnológicas
- Comunidades de innovación

## Liderazgo en la Era del Cambio

Los líderes empresariales deben desarrollar nuevas competencias:

- **Visión adaptativa**: Capacidad de ajustar la estrategia sin perder el rumbo
- **Inteligencia emocional**: Gestionar equipos durante períodos de incertidumbre
- **Pensamiento sistémico**: Entender las interconexiones complejas
- **Aprendizaje continuo**: Mantenerse actualizado en tendencias relevantes

> "En tiempos de cambio, los supervivientes serán aquellos que aprendan más rápido, no necesariamente los más grandes o fuertes."

La innovación continua no es una opción - es una necesidad estratégica. Las empresas que desarrollen estas capacidades no solo sobrevivirán a los cambios, sino que los liderarán.`,
    featuredImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    publishedAt: new Date('2024-01-05'),
    author: { name: 'María González' },
    categories: [{ category: { name: 'Innovación', slug: 'innovacion' } }],
    tags: [
      { tag: { name: 'Estrategia', slug: 'estrategia' } },
      { tag: { name: 'Transformación Digital', slug: 'transformacion-digital' } }
    ]
  },
]

export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = mockPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post no encontrado',
    }
  }

  return {
    title: `${post.title} | CorpBlog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = mockPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content)

  return (
    <article className="py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al Blog
        </Link>

        {/* Post Header */}
        <header className="space-y-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {post.categories.map((cat) => (
              <Badge key={cat.category.slug} variant="secondary">
                {cat.category.name}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight font-serif">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{post.author.name}</span>
              </div>
              {post.publishedAt && (
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{format(post.publishedAt, 'dd MMMM yyyy', { locale: es })}</span>
                </div>
              )}
            </div>
            
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Compartir
            </Button>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-table:text-sm"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Tags */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag.tag.slug} variant="outline">
                #{tag.tag.name}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="my-12" />
      </div>

      {/* Related Posts */}
      <RelatedPosts posts={mockPosts} currentPostId={post.id} />
    </article>
  )
}