import { PostCard } from './post-card'

interface RelatedPostsProps {
  posts: {
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
  }[]
  currentPostId: string
}

export function RelatedPosts({ posts, currentPostId }: RelatedPostsProps) {
  const relatedPosts = posts.filter(post => post.id !== currentPostId).slice(0, 3)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="py-12 border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Artículos Relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}