'use client'

import * as React from 'react'
import { PreviewCard as PreviewCardPrimitive } from '@base-ui/react/preview-card'

import { cn } from '@/lib/utils'

function HoverCard({
    ...props
}: PreviewCardPrimitive.Root.Props) {
    return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({
    className,
    ...props
}: PreviewCardPrimitive.Trigger.Props) {
    return (
        <PreviewCardPrimitive.Trigger
            data-slot="hover-card-trigger"
            className={className}
            {...props}
        />
    )
}

const HoverCardContent = React.forwardRef<
    HTMLDivElement,
    PreviewCardPrimitive.Popup.Props &
        Pick<
            PreviewCardPrimitive.Positioner.Props,
            'align' | 'sideOffset' | 'side'
        >
>(({ className, align = 'center', sideOffset = 4, side, children, ...props }, ref) => (
    <PreviewCardPrimitive.Portal>
        <PreviewCardPrimitive.Positioner
            align={align}
            sideOffset={sideOffset}
            side={side}>
            <PreviewCardPrimitive.Popup
                ref={ref}
                className={cn(
                    'ring-border-illustration bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md p-4 shadow-xl shadow-black/10 outline-none ring-1',
                    className
                )}
                {...props}>
                {children}
            </PreviewCardPrimitive.Popup>
        </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
))
HoverCardContent.displayName = 'HoverCardContent'

export { HoverCard, HoverCardTrigger, HoverCardContent }
