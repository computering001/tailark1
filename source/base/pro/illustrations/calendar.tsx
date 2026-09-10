import { ChevronsUpDown } from 'lucide-react'

export const CalendarIllustration = () => {
    return (
        <div
            aria-hidden
            className="min-w-2xs ring-border-illustration bg-background/25 shadow-black/6.5 space-y-2 rounded-3xl p-2 shadow-md ring-1">
            <div className="bg-illustration border-border/50 relative flex justify-between rounded-2xl border p-4">
                <div className="text-lg font-semibold">Journée des martyrs de l'indépendance observée</div>
                <div className="bg-foreground/5 flex h-fit items-center gap-0.5 rounded-full border p-1">
                    <div className="size-3 rounded-full bg-emerald-500" />
                    <ChevronsUpDown className="size-3" />
                </div>
            </div>
            <div className="bg-illustration border-border/50 relative space-y-2 rounded-2xl border p-4">
                <div className="text-sm font-medium">3 Jan 2026</div>
                <div className="text-sm font-medium">
                    Alert 1 day before at 09:00 <span className="opacity-50"> (default)</span>
                </div>
            </div>
            <div className="bg-illustration border-border/50 relative rounded-2xl border p-4">
                <div className="text-sm font-medium">Jour férié</div>
            </div>
        </div>
    )
}

export default CalendarIllustration
