import { Clock, Star, MapPin } from "lucide-react"
import Image from "next/image"

export const FoodDeliveryIllustration = () => (
  <div aria-hidden className="relative min-w-92 mask-t-from-75% px-4 pb-2">
    <div className="ring-border-illustration mx-auto items-end overflow-hidden rounded-b-[2.5rem] border border-transparent bg-background/75 px-2 pb-2 shadow-md ring-1 shadow-black/6.5">
      <div className="ring-border-illustration rounded-b-[2rem] bg-muted pt-32 shadow ring-1 dark:bg-background">
        <div className="ring-border-illustration rounded-t-3xl rounded-b-[2rem] bg-card p-6 ring-1">
          <div className="mb-4 text-sm font-medium">Order Tracking</div>

          <div className="flex gap-4">
            <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-muted before:absolute before:inset-0 before:rounded-xl before:border before:border-foreground/5">
              <Image
                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/burger_vndgo4.jpg"
                alt="burger image"
                width={640}
                height={471}
                className="size-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground">Burger Palace</div>
              <div className="mt-1 flex items-center gap-2 text-xs">
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="size-3 fill-current" />
                  <span>4.8</span>
                </div>
                <span className="text-muted-foreground">(234)</span>
              </div>
              <div className="mt-2 flex gap-1">
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs">
                  Burgers
                </span>
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs">
                  American
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-border pt-4">
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center gap-1 pt-1">
                <div className="size-2 rounded-full border border-foreground"></div>
                <div className="h-8.5 border-l border-dashed border-foreground/25"></div>
                <MapPin className="size-4 text-foreground" />
              </div>
              <div className="flex-1 space-y-3 *:space-y-1.5">
                <div>
                  <div className="text-xs text-foreground/50">Restaurant</div>
                  <div className="text-sm font-medium text-foreground">
                    Burger Palace
                  </div>
                </div>
                <div>
                  <div className="text-xs text-foreground/50">Delivery to</div>
                  <div className="text-sm font-medium text-foreground">
                    123 Main Street
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3 pl-px text-sm text-foreground">
              <Clock className="size-3.5" />
              <span className="font-medium">Arriving in 20-30 min</span>
            </div>
            <span className="font-semibold text-foreground">$14.48</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FoodDeliveryIllustration
