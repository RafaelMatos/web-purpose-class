'use client'
import { StarIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import Image from 'next/image'
import { Course } from '@prisma/client'
import { useRouter } from 'next/navigation'

interface CourseItemProps {
  course: Course
}

const CourseCard = ({ course }: CourseItemProps) => {
  const router = useRouter()
  const handleCourseClick = () => {
    router.push(`/courses/${course.id}`)
  }
  return (
    <Card
      className={`min-w-full  bg-blue-950 max-w-full rounded-2xl border-none `}
    >
      <CardContent className="px-0 py-0">
        <div className="px-1 w-full h-[159px]  relative">
          <div className="absolute top-2 left-2 z-50">
            <Badge
              variant="secondary"
              className="flex  items-center opacity-90 gap-1"
            >
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="text-xs">5,0</span>
            </Badge>
          </div>

          <Image
            src="https://correionogueirense.com.br/wp-content/uploads/2018/04/cursinho-preparatorio-anglo-enem-2018-correio-nogueirense.jpg"
            alt={course.title}
            height={0}
            width={0}
            sizes="100vw"
            fill
            className="rounded-2xl"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {course.title}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {course.summary}
          </p>
          <Button
            className="w-full mt-3"
            variant="tertiary"
            onClick={handleCourseClick}
          >
            Inscrever-se
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default CourseCard
