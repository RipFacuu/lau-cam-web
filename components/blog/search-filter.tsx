'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, X } from 'lucide-react'

interface SearchFilterProps {
  categories: { name: string; slug: string }[]
  tags: { name: string; slug: string }[]
  onSearchChange: (search: string) => void
  onCategoryFilter: (category: string | null) => void
  onTagFilter: (tag: string | null) => void
  selectedCategory?: string | null
  selectedTag?: string | null
}

export function SearchFilter({
  categories,
  tags,
  onSearchChange,
  onCategoryFilter,
  onTagFilter,
  selectedCategory,
  selectedTag,
}: SearchFilterProps) {
  const [search, setSearch] = useState('')

  const handleSearchChange = (value: string) => {
    setSearch(value)
    onSearchChange(value)
  }

  const clearFilters = () => {
    setSearch('')
    onSearchChange('')
    onCategoryFilter(null)
    onTagFilter(null)
  }

  const hasActiveFilters = search || selectedCategory || selectedTag

  return (
    <div className="space-y-6 bg-muted/30 p-6 rounded-lg">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar artículos..."
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h4 className="font-medium text-sm">Categorías</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category.slug}
              variant={selectedCategory === category.slug ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => 
                onCategoryFilter(selectedCategory === category.slug ? null : category.slug)
              }
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="space-y-3">
        <h4 className="font-medium text-sm">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag.slug}
              variant={selectedTag === tag.slug ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => 
                onTagFilter(selectedTag === tag.slug ? null : tag.slug)
              }
            >
              {tag.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          <X className="h-4 w-4 mr-2" />
          Limpiar Filtros
        </Button>
      )}
    </div>
  )
}