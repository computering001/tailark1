import { TrendingUp, SignalHigh, WifiHigh } from "lucide-react"
import Image from "next/image"

export const ShoppingCartIllustration = () => (
  <div aria-hidden className="relative min-w-92 mask-b-from-85% px-4 pt-2">
    <div className="ring-border-illustration mx-auto items-end overflow-hidden rounded-t-[2.5rem] border border-transparent bg-background/75 px-2 pt-2 shadow-md ring-1 shadow-black/6.5">
      <div className="ring-border-illustration overflow-hidden rounded-t-[2rem] bg-card px-6 pt-2 pb-16 shadow ring-1 shadow-black/6.5">
        <StatusBar />
        <div className="mt-6 mb-6 text-sm font-medium">Your Cart</div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          Items
          <div className="flex items-center gap-1">
            <div className="flex size-3 rounded-xs bg-emerald-600">
              <TrendingUp className="m-auto size-2 text-white" />
            </div>
            <span className="border-t border-transparent text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              2
            </span>
          </div>
        </div>

        <div className="mt-0.5">
          <span className="align-baseline text-3xl font-bold text-foreground tracking-tight">
            $114
          </span>
          <span className="align-baseline text-3xl font-bold text-foreground/50 tracking-tight">
            .98
          </span>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-muted before:absolute before:inset-0 before:rounded-xl before:border before:border-foreground/5">
              <Image
                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/headphones_itdu2u.jpg"
                alt="headphones image"
                width={640}
                height={471}
                className="size-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-1">
              <div className="text-sm font-medium text-balance text-foreground">
                Sony Wireless Headphones HWY2
              </div>
              <div className="text-sm text-muted-foreground">$89.99</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-muted before:absolute before:inset-0 before:rounded-xl before:border before:border-foreground/5">
              <Image
                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/phone-case_hugr6r.jpg"
                alt="phone case image"
                width={640}
                height={471}
                className="size-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-1">
              <div className="text-sm font-medium text-balance text-foreground">
                Phone Case
              </div>
              <div className="text-sm text-muted-foreground">$24.99</div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-full bg-foreground py-2.5 text-center text-sm font-medium text-background">
          Checkout
        </div>
      </div>
    </div>
  </div>
)

const StatusBar = () => (
  <div className="flex items-center justify-between py-2 pl-4 text-xs">
    <span className="font-semibold">9:41</span>
    <div className="flex items-end gap-1">
      <SignalHigh className="size-4" />
      <WifiHigh className="size-4.5" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="-mb-px size-4"
      >
        <path
          fillRule="evenodd"
          d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
)

export default ShoppingCartIllustration
