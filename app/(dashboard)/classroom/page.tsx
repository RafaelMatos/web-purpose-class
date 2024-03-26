import ClassroomPanel from '@/app/_components/classRoomPanel'
import prisma from '@/app/_lib/db'

const ClassroomPage = async () => {
  const categories = await prisma.category.findMany()
  return (
    <div className="flex flex-col gap-6 bg-primary/60 h-screen  overflow-y-hidden">
      <ClassroomPanel categories={categories} />
    </div>
  )
}

export default ClassroomPage
