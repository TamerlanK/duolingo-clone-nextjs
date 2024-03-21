import { auth } from "@clerk/nextjs"

const adminIds = ["user_2dlk9gCJJKYU5yX9ZLo21gEhrh0"]

export const isAdmin = () => {
  const { userId } = auth()

  if (!userId) return false

  return adminIds.indexOf(userId) !== -1
}
