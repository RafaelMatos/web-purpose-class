'use client'
import { Category } from '@prisma/client'
import { Button } from './ui/button'

interface CategoryItemProps {
  category: Category
  activeCategory: number | null
}

const CategoryItem = ({
  category,

  activeCategory,
}: CategoryItemProps) => {
  return (
    <Button
      className={`flex p-2 w-full justify-center border text-yellow-400 uppercase font-bold border-yellow-400 hover:cursor-pointer border-2 ${activeCategory === category.id ? 'bg-tertiary hover:bg-tertiary/80' : 'bg-blue-950 hover:bg-blue-950/80'}`}
    >
      {category.name}
    </Button>
  )
}

export default CategoryItem
