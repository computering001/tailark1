import { ChartPie, Clock9, MessageCircleHeart, Puzzle, Tickets, UserRoundPen } from 'lucide-react'

export default function DescriptionListSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="space-y-12">
                    <h2 className="text-foreground text-balance text-4xl font-semibold tracking-tight">AI-powered Marketing Tools</h2>
                    <div className="@container lg:col-span-2">
                        <dl className="@md:grid-cols-2 @2xl:grid-cols-3 @2xl:gap-12 grid gap-6 *:space-y-2">
                            <div>
                                <dt className="text-foreground flex items-center gap-2 font-medium">
                                    <UserRoundPen className="*:not-nth-2:opacity-50 *:nth-2:fill-primary *:nth-2:stroke-primary size-4 drop-shadow" />
                                    AI-Powered Analytics
                                </dt>
                                <dd className="text-muted-foreground">Leverage machine learning to gain deeper insights from your marketing data and optimize campaigns in real-time.</dd>
                            </div>
                            <div>
                                <dt className="text-foreground flex items-center gap-2 font-medium">
                                    <ChartPie className="*:first:fill-primary *:first:stroke-primary size-4 drop-shadow" />
                                    Intelligent Automation
                                </dt>
                                <dd className="text-muted-foreground">Automate repetitive tasks and workflows, allowing your team to focus on strategic initiatives.</dd>
                            </div>
                            <div>
                                <dt className="text-foreground flex items-center gap-2 font-medium">
                                    <MessageCircleHeart className="*:last:fill-primary fill-illustration size-4 drop-shadow" />
                                    Predictive Targeting
                                </dt>
                                <dd className="text-muted-foreground">Identify high-value audiences with precision using advanced predictive modeling.</dd>
                            </div>
                            <div>
                                <dt className="text-foreground flex items-center gap-2 font-medium">
                                    <Tickets className="*:first:fill-primary size-4 drop-shadow" />
                                    Smart Personalization
                                </dt>
                                <dd className="text-muted-foreground">Deliver tailored content and experiences to each user based on their behavior and preferences.</dd>
                            </div>
                            <div>
                                <dt className="text-foreground flex items-center gap-2 font-medium">
                                    <Clock9 className="fill-background *:not-nth-2:stroke-foreground/50 *:nth-2:stroke-primary size-4 drop-shadow" />
                                    Real-Time Insights
                                </dt>
                                <dd className="text-muted-foreground">Monitor campaign performance with live dashboards and instant notifications for critical metrics.</dd>
                            </div>
                            <div>
                                <dt className="text-foreground flex items-center gap-2 font-medium">
                                    <Puzzle className="fill-background size-4 drop-shadow" />
                                    Cross-Channel Integration
                                </dt>
                                <dd className="text-muted-foreground">Seamlessly connect all your marketing channels for unified reporting and coordinated campaigns.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}
