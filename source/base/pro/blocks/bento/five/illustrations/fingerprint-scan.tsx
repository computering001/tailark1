import { cn } from '@/lib/utils'
import Image from 'next/image'

export const FingerprintScan = () => {
    return (
        <div className="relative aspect-square max-w-64">
            <div className="mask-radial-from-0% mask-radial-to-75% relative flex aspect-square justify-center">
                <Image
                    src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/fingerprint-scanner_vtvyyq.png"
                    alt="Fingerprint scanner"
                    className="size-full scale-110 object-cover"
                    width={224}
                    height={224}
                />
            </div>
            <div className="aspect-3/4 bg-linear-to-b from-foreground/5 to-foreground/5 -translate-y-9.5 inset-18 absolute m-auto translate-x-1.5 border border-white/5 via-transparent">
                <CardDecorator className="border-primary" />
                <div className="animate-scan absolute inset-0 z-10">
                    <div className="absolute inset-x-0 m-auto h-2 w-2/3 bg-indigo-500 blur-lg" />
                </div>
            </div>
        </div>
    )
}

export const CardDecorator = ({ className }: { className?: string }) => (
    <>
        <span className={cn('animate-breathing absolute -left-px -top-px block size-2.5 rounded-tl border-l-[1.5px] border-t-[1.5px] border-white', className)}></span>
        <span className={cn('animate-breathing absolute -right-px -top-px block size-2.5 rounded-tr border-r-[1.5px] border-t-[1.5px] border-white', className)}></span>
        <span className={cn('animate-breathing absolute -bottom-px -left-px block size-2.5 rounded-bl border-b-[1.5px] border-l-[1.5px] border-white', className)}></span>
        <span className={cn('animate-breathing absolute -bottom-px -right-px block size-2.5 rounded-br border-b-[1.5px] border-r-[1.5px] border-white', className)}></span>
    </>
)
