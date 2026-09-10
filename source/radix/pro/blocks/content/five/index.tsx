import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="aspect-3/2 mask-radial-to-65% mx-auto max-w-2xl">
                    <Image
                        className="rounded-(--radius)"
                        src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/ai-human-2_uo6bxc.jpg"
                        alt="AI and human illustration"
                        width={5001}
                        height={3334}
                        loading="lazy"
                    />
                </div>
                <div className="mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-balance text-3xl font-medium lg:text-4xl tracking-tight">Unified Ecosystem for Modern Development</h2>
                    <p className="text-muted-foreground text-balance text-lg">
                        Our platform integrates cutting-edge models with developer-friendly <strong className="text-foreground font-semibold">APIs and business solutions</strong> that drive innovation across industries and use cases.
                    </p>
                </div>
            </div>
        </section>
    )
}
