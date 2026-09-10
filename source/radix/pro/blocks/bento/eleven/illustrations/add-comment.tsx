import { cn } from "@/lib/utils"
import Image from "next/image"

const SHADCN_AVATAR = "https://avatars.githubusercontent.com/u/124599?v=4"

export const AddComment = ({
  className,
}: {
  className?: string
}) => {
  return (
    <div aria-hidden className={cn("relative mt-8", className)}>
      <div
        className={cn(
          "absolute flex h-10 -translate-x-1/8 translate-y-[-110%] items-center gap-3 rounded-lg bg-illustration py-1 pr-12 pl-2",
          "border border-transparent shadow-lg ring-1 shadow-black/6.5 ring-border-illustration"
        )}
      >
        <div className="relative size-6 overflow-hidden rounded-full shadow-md before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/20">
          <Image
            className="aspect-square rounded-full object-cover"
            src={SHADCN_AVATAR}
            alt="Shadcn"
            height="60"
            width="60"
          />
        </div>
        <span className="block text-sm text-muted-foreground">
          Add a comment...
        </span>
      </div>
      <span className="text-muted-foreground">
        <span className="border-b-2 border-primary py-1 text-primary">
          Tomorrow 8:30 pm
        </span>{" "}
        is our highest priority.
      </span>
    </div>
  )
}
