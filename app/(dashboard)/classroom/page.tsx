import CategoryItem from '@/app/_components/categoryItem'
import CourseCard from '@/app/_components/courseCard'
import prisma from '@/app/_lib/db'

const ClassroomPage = async () => {
  const courses = await prisma.course.findMany()

  const categories = await prisma.category.findMany()

  const handleClickCategory = () => {
    console.log('clicou')
  }

  return (
    <div className="flex flex-col gap-6 bg-primary/60 h-screen  overflow-y-hidden">
      <div className="flex h-screen ">
        <div className="flex flex-col bg-primary-foreground w-[300px] h-full p-4 gap-3">
          {categories.map((category) => {
            return (
              <CategoryItem
                key={category.id}
                category={category}
                // onClickCategory={() => {
                //   console.log('clivou')
                // }}
              />
            )
          })}
        </div>
        <div className="p-4 w-full">
          <h2 className="text-xl font-bold">Catalogo</h2>
          <div className="">
            {courses.length > 0 ? (
              <div className=" grid 2xl:grid-cols-8 xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 mt-3">
                {courses.map((course) => {
                  return <CourseCard key={course.id} course={course} />
                })}
              </div>
            ) : (
              <p>Não encontramos cursos disponiveis</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassroomPage
