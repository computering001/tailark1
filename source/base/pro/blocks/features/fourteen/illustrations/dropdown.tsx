import {
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
    <div className="relative overflow-hidden rounded-2xl bg-black p-2">
      <div className="absolute inset-0 items-center mask-r-from-50% [background:radial-gradient(150%_115%_at_50%_5%,transparent_25%,var(--color-emerald-500)_60%,var(--color-white)_100%)]"></div>
      <div className="absolute inset-0 items-center mask-l-from-35% [background:radial-gradient(150%_115%_at_50%_5%,transparent_25%,var(--color-sky-500)_60%,var(--color-white)_100%)]"></div>

      <div className="relative overflow-hidden rounded-xl border border-dashed border-white/25 bg-white/10 pt-8 shadow-lg shadow-black/20">
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-white)_1px,transparent_1px)] bg-size-[12px_12px] opacity-5"></div>
        <div className="absolute inset-0 translate-y-1/2 rounded-full border border-dotted bg-white/15"></div>

        <div className="flex items-center justify-center">
          <div className="-mx-4 -mt-4 mask-b-from-55% p-4 pb-0">
            <div className="relative w-56 overflow-hidden rounded-t-2xl border border-foreground/10 bg-card p-1 shadow-lg shadow-black/10 *:cursor-pointer *:rounded-xl">
              {USERS.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-2 px-2 py-1 hover:bg-muted"
                >
                  <div className="size-4 overflow-hidden rounded-full">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width="40"
                      height="40"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm text-foreground">{user.name}</span>
                </div>
              ))}

              <div className="flex h-7 items-center gap-2 px-2 hover:bg-muted">
                <Plus className="size-4" />
                <span className="text-sm">Add new account</span>
              </div>
              <hr className="mx-2 my-1" />
              <div className="flex h-7 items-center gap-2 px-2 hover:bg-muted">
                <Settings2 className="size-4" />
                <span className="text-sm">Preferences</span>
              </div>
              <hr className="mx-2 my-1" />
              <div className="flex h-7 items-center gap-2 px-2 hover:bg-muted">
                <HelpCircle className="size-4" />
                <span className="text-sm">Help</span>
              </div>
              <div className="flex h-7 items-center gap-2 px-2 hover:bg-muted">
                <MessageCircle className="size-4" />
                <span className="text-sm">Send feedback</span>
              </div>
              <hr className="mx-2 my-1" />
              <div className="flex h-7 items-center gap-2 px-2 hover:bg-muted">
                <User className="size-4" />
                <span className="text-sm">My account</span>
              </div>
              <div className="flex h-7 items-center gap-2 px-2 hover:bg-muted">
                <Settings className="size-4" />
                <span className="text-sm">Settings</span>
              </div>
              <hr className="mx-2 my-1" />
              <div className="flex h-7 items-center gap-2 px-2 hover:bg-muted">
                <LogOut className="size-4" />
                <span className="text-sm">Sign out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
