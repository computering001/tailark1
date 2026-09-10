import { cn } from '@/lib/utils'
import { LogoIcon } from "@/components/ui/logo"
import { Document } from '@/components/illustrations/document'

export const Invoice = ({ className }: { className?: string }) => {
    return (
        <div
            aria-hidden
            className="max-w-62 relative w-fit md:w-full">
            <div className={cn('mask-b-from-75% before:bg-background before:border-border after:border-border after:bg-background/50 before:z-1 group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:bottom-0 before:top-4 before:rounded-2xl before:border after:absolute after:inset-x-9 after:bottom-0 after:top-2 after:rounded-2xl after:border', className)}>
                <div className="bg-illustration ring-border-illustration relative z-10 overflow-hidden rounded-2xl border border-transparent pl-5 text-sm shadow-xl shadow-black/10 ring-1">
                    <div className="min-w-69 origin-left scale-75">
                        <div className="mb-6 flex w-full items-start justify-between">
                            <div className="w-full space-y-0.5">
                                <LogoIcon uniColor />
                                <div className="mt-4 font-mono text-xs">INV-456789</div>
                                <div className="mt-1 font-mono text-2xl font-semibold">$284,342.57</div>
                                <div className="text-xs font-medium">Due in 15 days</div>
                            </div>
                            <Document />
                        </div>

                        <div className="space-y-1.5">
                            <div className="grid grid-cols-[auto_1fr] items-center">
                                <span className="text-muted-foreground w-18 block">To</span>
                                <span className="bg-foreground/10 h-2 w-1/4 rounded-full" />
                            </div>

                            <div className="grid grid-cols-[auto_1fr] items-center">
                                <span className="text-muted-foreground w-18 block">From</span>
                                <span className="bg-foreground/10 h-2 w-1/2 rounded-full" />
                            </div>
                            <div className="grid grid-cols-[auto_1fr] items-center">
                                <span className="text-muted-foreground w-18 block">Address</span>
                                <div className="flex gap-2">
                                    <span className="bg-foreground/10 h-2 w-1/3 rounded-full" />
                                    <span className="bg-foreground/10 h-2 w-2/3 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
