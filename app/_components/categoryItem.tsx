'use client'
import { Category } from '@prisma/client'
import { Card, CardContent } from './ui/card'
import { useState } from 'react'

interface CategoryItemProps {
  category: Category
  active?: boolean
  // onClickCategory: () => void
}

const CategoryItem = ({
  category,
  // onClickCategory,
  active,
}: CategoryItemProps) => {
  const [activeCategory, setActiveCategory] = useState<number>(0)
  const handleClickCategory = () => {
    setActiveCategory((state) => {
      if (state === category.id) {
        return 0
      } else {
        return category.id
      }
    })
  }
  return (
    <Card
      className={`flex p-2 justify-center border border-yellow-400 hover:cursor-pointer border-2 ${active ? 'bg-tertiary hover:bg-tertiary/80' : 'bg-blue-950 hover:bg-blue-950/80'}`}
      onClick={handleClickCategory}
    >
      <CardContent className="p-0 text-yellow-400 font-bold uppercase">
        {category.name}
      </CardContent>
    </Card>
  )
}

export default CategoryItem
