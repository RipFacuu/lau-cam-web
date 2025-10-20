import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, User } from 'lucide-react'

interface PostCardProps {
  post: {
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
    tags: {
      tag: {
        name: string
        slug: string
      }
    }[]
  }
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={post.featuredImage || 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {post.categories.length > 0 && (
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-background/90">
              {post.categories[0].category.name}
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
            <Link href={`/blog/${post.slug}`} className="line-clamp-2">
              {post.title}
            </Link>
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {post.summary}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag.tag.slug} variant="outline" className="text-xs">
                {tag.tag.name}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>{post.author.name}</span>
          </div>
          {post.publishedAt && (
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{format(post.publishedAt, 'dd MMM yyyy', { locale: es })}</span>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}