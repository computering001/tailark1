import { cn } from "@/lib/utils"
import { AtSign, Paperclip, Smile } from "lucide-react"

export const ReplyIllustration = ({ className }: { className?: string }) => {
  return (
    <div
      aria-hidden
      className={cn(
        "bg-illustration ring-border-illustration flex min-w-2xs origin-bottom flex-col space-y-4 rounded-2xl border border-transparent px-4 pt-4 pb-2 shadow ring-1 shadow-black/6.5 transition-colors duration-300",
        className
      )}
    >
      <div className="text-sm font-medium text-primary">
        @Bernard{" "}
        <span className="font-normal text-muted-foreground">
          Shared 2 invoices
        </span>
      </div>

      <div className="-ml-1.5 flex text-muted-foreground *:hover:text-foreground">
        <div className="flex size-7 rounded-full hover:bg-muted hover:text-foreground">
          <AtSign className="m-auto size-4" />
        </div>
        <div className="flex size-7 rounded-full hover:bg-muted hover:text-foreground">
          <Smile className="m-auto size-4" />
        </div>
        <div className="flex size-7 rounded-full hover:bg-muted hover:text-foreground">
          <Paperclip className="m-auto size-4" />
        </div>
      </div>
    </div>
  )
}

export default ReplyIllustration
