const items = [
    {
        dt: 'Secure & Reliable',
        dd: 'Built with enterprise-grade security protocols and a 99.9% uptime guarantee, ensuring your data remains protected and your services stay available around the clock.',
    },
    {
        dt: 'Fast & Scalable',
        dd: 'Optimized for lightning-fast performance with intelligent caching and load balancing that seamlessly grows with your business demands without compromising speed.',
    },
    {
        dt: 'Easy to Use',
        dd: 'Intuitive interface designed for seamless onboarding and daily use, with comprehensive documentation and guided workflows that reduce the learning curve significantly.',
    },
    {
        dt: 'Attention to Detail',
        dd: 'Crafted with precision and care for a polished user experience, where every interaction has been thoughtfully designed to delight users and enhance productivity.',
    },
]

export default function DescriptionListSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-2xl px-6">
                <div className="@container">
                    <h2 className="text-foreground text-balance text-2xl font-medium">What makes Tailark your perfect fit</h2>
                    <p className="text-muted-foreground mt-3">Optimized for lightning-fast performance with intelligent caching and load balancing that seamlessly grows with your business demands without compromising speed.</p>
                    <dl className="mt-12 space-y-6">
                        {items.map((item, index) => (
                            <div
                                key={item.dt}
                                className="grid grid-cols-[auto_1fr] border-b pb-6">
                                <span className="text-muted-foreground mt-0.5 w-14 font-mono text-sm">0{index + 1}.</span>

                                <div className="space-y-3">
                                    <dt className="text-foreground font-medium">{item.dt}</dt>
                                    <dd className="text-muted-foreground">{item.dd}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
