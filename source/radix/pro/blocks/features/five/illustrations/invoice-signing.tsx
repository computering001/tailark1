import { LogoIcon } from "@/components/ui/logo"
import { cn } from '@/lib/utils'

export const InvoiceSigning = ({ className }: { className?: string }) => {
    return (
        <div className={cn('mask-b-from-50% -mx-6 -mt-6 px-6 pt-6', className)}>
            <div className="bg-linear-to-r from-primary rounded-2xl to-emerald-500 pt-1">
                <div className="ring-foreground/10 bg-card relative overflow-hidden rounded-2xl border border-transparent p-8 text-sm shadow-lg shadow-black/5 ring-1">
                    <div className="space-y-0.5">
                        <LogoIcon />
                        <div className="mt-4 font-mono text-xs">INV-456789</div>
                        <div className="mt-1 -translate-x-1 font-mono text-2xl font-semibold">$284,342.57</div>
                        <div className="text-xs font-medium">Due in 15 days</div>
                    </div>

                    <div className="h-22 my-6 flex items-center justify-center rounded-md border border-dashed">
                        <div className="border-b px-6 font-serif">Sign here</div>
                    </div>
                    <div className="space-y-1.5 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)]">
                        <div className="grid grid-cols-[auto_1fr] items-center">
                            <span className="text-muted-foreground w-18 block">To</span>
                            <span className="bg-border h-2 w-1/4 rounded-full px-2" />
                        </div>

                        <div className="grid grid-cols-[auto_1fr] items-center">
                            <span className="text-muted-foreground w-18 block">From</span>
                            <span className="bg-border h-2 w-1/2 rounded-full px-2" />
                        </div>

                        <div className="grid grid-cols-[auto_1fr] items-center">
                            <span className="text-muted-foreground w-18 block">Address</span>
                            <span className="bg-border h-2 w-2/3 rounded-full px-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
