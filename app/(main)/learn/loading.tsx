import { Loader } from "lucide-react"

const Loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Loader className="size-6 text-muted-foreground animate-spin" />
    </div>
  )
}

export default Loading
