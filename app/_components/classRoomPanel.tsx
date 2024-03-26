'use client'
import { Category } from '@prisma/client'
import CategoryItem from './categoryItem'
import { useState } from 'react'
import Catalog from './catalog'
interface ClassroomPanelProps {
  categories: Category[]
}

const ClassroomPanel = ({ categories }: ClassroomPanelProps) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  const handleActiveCategory = (newActiveCategory: number) => {
    if (activeCategory === newActiveCategory) {
      setActiveCategory(null)
    } else {
      setActiveCategory(newActiveCategory)
    }
  }

  return (
    <div className="flex h-screen ">
      <div className="flex flex-col bg-primary-foreground w-[300px] h-full p-4 gap-3">
        {categories.map((category) => {
          return (
            <div
              key={category.id}
              className="w-full"
              onClick={() => handleActiveCategory(category.id)}
            >
              <CategoryItem
                category={category}
                activeCategory={activeCategory}
              />
            </div>
          )
        })}
      </div>
      <Catalog activeCategory={activeCategory} />
    </div>
  )
}

export default ClassroomPanel
