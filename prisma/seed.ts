import { PrismaClient } from '@prisma/client'
import { courses } from './constants/courses'
import { categories } from './constants/categories'
const prisma = new PrismaClient()

async function main() {
  await prisma.category.deleteMany()
  await prisma.course.deleteMany()

  const categoriesSeed = categories.map((category) => {
    return prisma.category.create({
      data: {
        id: category.id,
        name: category.name,
      },
    })
  })

  const coursesSeed = courses.map((course) => {
    // const courseCategory = categories.find(
    //   (category) => category.id === course.categoryId,
    // )
    return prisma.course.create({
      data: {
        title: course.title,
        description: course.description,
        summary: course.summary,
        imageUrl: course.imageUrl,
        categoryId: course.categoryId,
      },
    })
  })

  // const ratingsSeed = ratings.map((rating) => {
  //   return prisma.rating.create({
  //     data: {
  //       id: rating.id,
  //       rate: rating.rate,
  //       description: rating.description,
  //       user: {
  //         connect: { id: rating.user_id },
  //       },
  //       book: {
  //         connect: { id: rating.book_id },
  //       },
  //     },
  //   })
  // })

  await prisma.$transaction([
    ...categoriesSeed,
    ...coursesSeed,
    // ...usersSeed,
    // ...ratingsSeed,
  ])
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
