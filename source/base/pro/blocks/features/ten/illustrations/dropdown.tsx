import { buttonVariants } from "@/components/ui/button"
import {
  Ellipsis,
  HelpCircle,
  LogOut,
  MessageCircle,
  Plus,
  Settings,
  Settings2,
  User,
} from "lucide-react"
import Image from "next/image"

type User = {
  id: number
  name: string
  avatar: string
}

const USERS: User[] = [
  {
    id: 1,
    name: "Méschac Irung",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
  },
  {
    id: 2,
    name: "Bernard Ng",
    avatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
  },
  {
    id: 3,
    name: "Theo Ng",
    avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
  },
  {
    id: 4,
    name: "Glodie Ng",
    avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
  },
]

export const Dropdown = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-2 border-y bg-muted/25 mask-[linear-gradient(to_left,hsla(0,0%,0%,1)15%,transparent_100%)] py-2 pr-1 text-foreground">
        <span className="text-sm">Oxymor NS</span>
        <span className="mx-4 text-sm">$39</span>
        <div
          className={buttonVariants({
            variant: "secondary",
            size: "icon",
            className: "bg-foreground/3! hover:bg-foreground/5!",
          })}
        >
          <Ellipsis className="size-4 text-foreground" />
        </div>
      </div>
      <div className="-mx-4 -mt-4 mask-[linear-gradient(to_bottom,hsla(0,0%,0%,1)50%,transparent_100%)] p-4 pb-0">
        <div className="relative w-56 overflow-hidden rounded-2xl bg-illustration p-1 shadow-xl ring-1 shadow-black/6.5 ring-border-illustration *:cursor-pointer *:rounded-xl">
          {USERS.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-2 px-2 py-1 hover:bg-foreground/5"
            >
              <div className="relative size-4 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/10">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width="40"
                  height="40"
                />
              </div>
              <span className="text-sm text-foreground">{user.name}</span>
            </div>
          ))}

          <div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
            <Plus className="size-4" />
            <span className="text-sm">Add new account</span>
          </div>
          <hr className="mx-2 my-1" />
          <div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
            <Settings2 className="size-4" />
            <span className="text-sm">Preferences</span>
          </div>
          <hr className="mx-2 my-1" />
          <div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
            <HelpCircle className="size-4" />
            <span className="text-sm">Help</span>
          </div>
          <div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
            <MessageCircle className="size-4" />
            <span className="text-sm">Send feedback</span>
          </div>
          <hr className="mx-2 my-1" />
          <div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
            <User className="size-4" />
            <span className="text-sm">My account</span>
          </div>
          <div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
            <Settings className="size-4" />
            <span className="text-sm">Settings</span>
          </div>
          <hr className="mx-2 my-1" />
          <div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
            <LogOut className="size-4" />
            <span className="text-sm">Sign out</span>
          </div>
        </div>
      </div>
    </div>
  )
}
