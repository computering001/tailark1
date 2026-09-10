import { Sparkles } from 'lucide-react'

export const AIIllustration3 = () => {
    return (
        <div
            aria-hidden
            className="min-w-xs shadow-black/6.5 ring-border-illustration bg-illustration rounded-2xl p-6 shadow ring-1">
            <div className="space-y-4">
                <div className="space-y-2">
                    <div className="bg-border-illustration h-1.5 rounded-full"></div>
                    <div className="flex items-center gap-1">
                        <div className="bg-border-illustration h-1.5 w-2/5 rounded-full"></div>
                        <div className="bg-border-illustration h-1.5 w-1/5 rounded-full"></div>
                        <div className="bg-border-illustration h-1.5 w-2/5 rounded-full"></div>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center gap-1">
                        <div className="bg-border-illustration h-1.5 w-2/5 rounded-full"></div>
                        <div className="bg-border-illustration h-1.5 w-1/5 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="bg-border-illustration h-1.5 w-1/5 rounded-full"></div>
                        <div className="bg-border-illustration h-1.5 w-4/5 rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="relative mt-6 h-8 w-fit overflow-hidden rounded-full p-px">
                <div className="bg-linear-to-br/increasing animate-hue-rotate absolute inset-0 from-pink-400 to-purple-400 opacity-50"></div>
                <div className="bg-illustration relative flex h-full items-center gap-2 rounded-full px-3 text-sm">
                    <Sparkles className="fill-foreground *:not-first:opacity-50 size-3" />
                    Summarize
                </div>
            </div>
        </div>
    )
}

export default AIIllustration3
