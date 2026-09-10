export default function DescriptionListSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-24">
                    <h2 className="text-muted-foreground text-balance text-4xl font-semibold tracking-tight">
                        Building the next generation of <strong className="text-foreground font-semibold">AI-powered Marketing Tools</strong>
                    </h2>
                    <dl className="space-y-6 *:space-y-2">
                        <div>
                            <dt className="text-foreground font-semibold">AI-Powered Analytics</dt>
                            <dd className="text-muted-foreground">Leverage machine learning to gain deeper insights from your marketing data and optimize campaigns in real-time.</dd>
                        </div>
                        <div>
                            <dt className="text-foreground font-semibold">Intelligent Automation</dt>
                            <dd className="text-muted-foreground">Automate repetitive tasks and workflows, allowing your team to focus on strategic initiatives.</dd>
                        </div>
                        <div>
                            <dt className="text-foreground font-semibold">Predictive Targeting</dt>
                            <dd className="text-muted-foreground">Identify high-value audiences with precision using advanced predictive modeling.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    )
}
