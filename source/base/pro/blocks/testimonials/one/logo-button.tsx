import { cn } from '@/lib/utils'
import React from 'react'

interface LogoButtonProps {
    label: string
    onClick: () => void
    LogoComponent: React.ElementType
    logoHeight: number
    logoWidth: number
    buttonRef?: React.RefObject<HTMLButtonElement | null>
    className?: string
}

export const LogoButton = ({ label, onClick, LogoComponent, logoHeight, logoWidth, buttonRef, className }: LogoButtonProps) => {
    return (
        <button type="button"
            ref={buttonRef}
            aria-label={label}
            className={cn('hover:bg-foreground/5 not-last:before:absolute not-last:before:-right-[2.5px] not-last:before:inset-y-0.5 not-last:before:w-px not-last:before:bg-foreground/10 relative flex h-10 items-center rounded px-6 transition-colors duration-200', className)}
            onClick={onClick}>
            <LogoComponent
                height={logoHeight}
                width={logoWidth}
            />
        </button>
    )
}
