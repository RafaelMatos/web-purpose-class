'use client'
import { useEffect, useState } from 'react'
import CourseCard from './courseCard'
import { Course } from '@prisma/client'
import { getFilteredCourses } from '../(dashboard)/classroom/_actions/get-filtered-courses'

interface CatalogProps {
  activeCategory: number | null
}

const Catalog = ({ activeCategory }: CatalogProps) => {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    const refreshFilteredCourses = async () => {
      const _filteredCourses = await getFilteredCourses(activeCategory)

      setCourses(_filteredCourses)
    }

    refreshFilteredCourses()
  }, [activeCategory])

  return (
    <div className="p-4 w-full">
      <h2 className="text-xl font-bold">Catalogo</h2>
      <div className="">
        {courses && courses.length > 0 ? (
          <div className=" grid 2xl:grid-cols-8 xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 mt-3">
            {courses.map((course) => {
              return <CourseCard key={course?.id} course={course!} />
            })}
          </div>
        ) : (
          <p>Não encontramos cursos disponiveis</p>
        )}
      </div>
    </div>
  )
}

export default Catalog
