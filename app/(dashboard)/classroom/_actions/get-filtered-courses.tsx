'use server'
import prisma from '@/app/_lib/db'

export const getFilteredCourses = async (activeCategory: number | null) => {
  if (activeCategory) {
    const filteredCourses = await prisma.course.findMany({
      where: {
        categoryId: activeCategory,
      },
    })
    return filteredCourses
  }
  const courses = await prisma.course.findMany()

  return courses
}
