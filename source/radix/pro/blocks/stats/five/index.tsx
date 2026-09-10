'use client'
import NumberFlow from '@number-flow/react'
import { useEffect, useState } from 'react'

export default function StatsSection() {
    const [flowValue, setFlowValue] = useState(67904370)

    useEffect(() => {
        const interval = setInterval(() => {
            setFlowValue((prevValue) => prevValue + Math.floor(Math.random() * 11))
        }, 5000)

        return () => clearInterval(interval)
    }, [])
    return (
        <section className="bg-background py-12 md:py-20">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <div>
                    <NumberFlow
                        value={flowValue}
                        className="text-foreground font-mono text-5xl font-semibold sm:text-6xl lg:text-8xl tracking-tight"
                    />
                </div>
                <p className="text-muted-foreground mx-auto max-w-md">
                    Our advanced visual processing system can <strong className="text-foreground font-semibold">analyze and interpret complex images</strong>, enabling applications.
                </p>
            </div>
        </section>
    )
}
