"use client"

import { courses, userProgress } from "@/db/schema"
import { Card } from "./card"
import { redirect, useRouter } from "next/navigation"
import { useTransition } from "react"
import { upsertUserProgress } from "@/actions/user-progress"
import { toast } from "sonner"

type Props = {
  courses: (typeof courses.$inferSelect)[]
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId
}

export const List = ({ courses, activeCourseId }: Props) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const onClick = (id: number) => {
    if (isPending) return

    if (id === activeCourseId) {
      return redirect("/learn")
    }

    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error("Something went wrong."))
    })
  }

  return (
    <div className="pt-6 grid sm:grid-cols-[repeat(auto-fit,minmax(min(230px,100%),1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={isPending}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  )
}
