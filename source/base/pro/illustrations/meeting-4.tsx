import { Phone, ScreenShare, Video } from "lucide-react"
import Image from "next/image"

export const Meeting4Illustration = () => {
  return (
    <div aria-hidden className="rounded-3xl border border-border/50 p-2">
      <div className="ring-border-illustration max-w-sm min-w-80 rounded-2xl bg-card p-4 shadow-xl ring-1 shadow-black/6.5">
        <Video className="ml-2 size-5 stroke-transparent *:fill-zinc-500/45 *:first:fill-zinc-500" />

        <div className="mt-4 grid grid-cols-2 gap-0.5">
          <div className="relative aspect-square overflow-hidden rounded-lg before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-green-700">
            <div className="text-shadow absolute bottom-1 left-1 block rounded bg-black/20 px-1 py-0.5 text-xs text-white inset-ring-1 inset-ring-white/15 backdrop-blur">
              Nath
            </div>

            <Image
              src="https://images.unsplash.com/photo-1758598497232-e89e4cb1f5d4?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="woman in meet"
              width={800}
              height={800}
              className="size-full object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg before:absolute before:inset-0 before:rounded-lg before:border before:border-foreground/15">
            <div className="text-shadow absolute bottom-1 left-1 block rounded bg-black/20 px-1 py-0.5 text-xs text-white inset-ring-1 inset-ring-white/15 backdrop-blur">
              Maya
            </div>

            <Image
              src="https://images.unsplash.com/photo-1758598304245-cc8a2a00d653?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="woman in meet"
              width={800}
              height={800}
              className="size-full object-cover"
            />
          </div>
        </div>
        <div className="relative flex justify-center px-3 pt-3">
          <div className="absolute top-3 bottom-0 left-2 my-auto flex h-fit gap-1 text-xs font-medium text-muted-foreground">
            5:54
          </div>

          <div className="flex gap-3">
            <div className="flex h-7 w-8 cursor-pointer items-center rounded-full bg-foreground/6.5 hover:bg-foreground/10">
              <ScreenShare className="m-auto size-4" />
            </div>
            <div className="flex h-7 w-11 cursor-pointer items-center rounded-full bg-rose-500 shadow inset-ring-1 inset-ring-foreground/20">
              <Phone className="m-auto size-4 rotate-136 fill-white stroke-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meeting4Illustration
