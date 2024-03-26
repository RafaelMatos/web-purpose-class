import ClassroomPainel from '@/app/_components/classRoomPainel'
import prisma from '@/app/_lib/db'

const ClassroomPage = async () => {
  const categories = await prisma.category.findMany()
  return (
    <div className="flex flex-col gap-6 bg-primary/60 h-screen  overflow-y-hidden">
      <ClassroomPainel categories={categories} />
    </div>
  )
}

export default ClassroomPage
