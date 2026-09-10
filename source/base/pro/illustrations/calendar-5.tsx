import { CalendarDays, ListTodo } from "lucide-react"

export const Calendar5Illustration = () => {
  return (
    <div aria-hidden className="group min-w-2xs space-y-2">
      <div className="pt-32">
        <div className="bg-illustration ring-border-illustration absolute min-w-72 -translate-x-6.5 translate-y-[-102%] rounded-2xl border border-transparent shadow-lg ring-1 shadow-black/6.5 transition-transform duration-200 group-active:scale-99">
          <div className="grid grid-cols-2 divide-x divide-dashed border-b border-dashed pb-px">
            <div className="flex cursor-pointer flex-col items-center gap-1.5 rounded-tl-2xl p-4 hover:bg-muted dark:hover:bg-background">
              <div className="rounded-bl-0 flex size-9 rounded-3xl bg-foreground/5 *:m-auto">
                <CalendarDays className="size-4" />
              </div>
              <div className="text-xs font-medium">New Event</div>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-1.5 rounded-tr-2xl p-4 hover:bg-muted dark:hover:bg-background">
              <div className="flex size-9 rounded-3xl bg-foreground/5 *:m-auto">
                <ListTodo className="size-4" />
              </div>
              <div className="text-xs font-medium">New Reminder</div>
            </div>
          </div>
          <div className="space-y-1 p-5 pt-4">
            <div className="text-sm font-medium text-foreground/50">
              Create Quick Event
            </div>
            <div className="flex h-8 items-center rounded-lg border bg-background pr-3 pl-2">
              <div className="h-4.5 w-0.5 animate-pulse rounded bg-primary"></div>
              <div className="text-sm font-medium text-foreground/50">
                Team standup meeting at 9am
              </div>
            </div>
          </div>
        </div>
        <span className="text-foreground/65">
          <span className="border-b-2 border-primary py-0.5 text-foreground">
            Team standup meeting at 9am
          </span>{" "}
          has been added to your calendar.
        </span>
      </div>
    </div>
  )
}

export default Calendar5Illustration
