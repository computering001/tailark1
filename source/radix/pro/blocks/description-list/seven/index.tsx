import { Clock4, Cloud, MessagesSquare, MousePointer2, Puzzle, ShieldCheck } from 'lucide-react'

export default function DescriptionListSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="@container">
                    <dl className="@md:grid-cols-2 @2xl:grid-cols-3 @2xl:gap-12 grid gap-6 *:space-y-2 *:text-balance *:text-center *:text-sm">
                        <div>
                            <div
                                aria-hidden
                                className="relative mx-auto flex size-12 items-center justify-center">
                                <ShieldCheck
                                    className="z-1 stroke-foreground/10 drop-shadow-emerald-500/15 fill-illustration *:nth-2:stroke-primary relative size-6 drop-shadow-md"
                                    strokeWidth={1}
                                />
                                <ShieldCheck
                                    className="absolute inset-0 m-auto size-8 opacity-15"
                                    strokeWidth={0.5}
                                />
                                <ShieldCheck
                                    className="absolute inset-0 m-auto size-10 opacity-10"
                                    strokeWidth={0.25}
                                />
                            </div>
                            <dt className="text-foreground mt-4 font-medium">AI-Powered Analytics</dt>
                            <dd className="text-muted-foreground">Use machine learning for deeper marketing insights and real-time optimization.</dd>
                        </div>
                        <div>
                            <div
                                aria-hidden
                                className="relative mx-auto flex size-12 items-center justify-center">
                                <Cloud
                                    className="z-1 stroke-foreground/10 drop-shadow-blue-500/15 fill-illustration relative size-6 drop-shadow-md"
                                    strokeWidth={1}
                                />
                                <Cloud
                                    className="absolute inset-0 m-auto size-8 opacity-15"
                                    strokeWidth={0.5}
                                />
                                <Cloud
                                    className="absolute inset-0 m-auto size-10 opacity-10"
                                    strokeWidth={0.25}
                                />
                            </div>
                            <dt className="text-foreground mt-4 font-medium">Intelligent Automation</dt>
                            <dd className="text-muted-foreground">Automate repetitive tasks so your team can focus on strategy.</dd>
                        </div>
                        <div>
                            <div
                                aria-hidden
                                className="relative mx-auto flex size-12 items-center justify-center">
                                <MessagesSquare
                                    className="z-1 stroke-foreground/10 *:first:fill-illustration relative size-8 *:first:drop-shadow-md"
                                    strokeWidth={0.5}
                                />
                            </div>
                            <dt className="text-foreground mt-4 font-medium">Predictive Targeting</dt>
                            <dd className="text-muted-foreground">Identify high-value audiences with advanced predictive modeling.</dd>
                        </div>
                        <div>
                            <div
                                aria-hidden
                                className="relative mx-auto flex size-12 items-center justify-center">
                                <div className="border-border/50 mask-r-from-35% mask-r-to-75% absolute inset-1 rotate-45 rounded-full border before:absolute before:inset-1 before:rounded-full before:border" />
                                <MousePointer2
                                    className="fill-illustration stroke-foreground/15 size-5 drop-shadow"
                                    strokeWidth={0.5}
                                />
                            </div>
                            <dt className="text-foreground mt-4 font-medium">Smart Personalization</dt>
                            <dd className="text-muted-foreground">Deliver tailored content based on user behavior and preferences.</dd>
                        </div>
                        <div>
                            <div
                                aria-hidden
                                className="relative mx-auto flex size-12 items-center justify-center">
                                <div className="border-border/50 absolute inset-1 rounded-full border before:absolute before:inset-1 before:rounded-full before:border" />
                                <Clock4
                                    strokeWidth={0.5}
                                    className="fill-illustration *:not-nth-2:stroke-foreground/50 *:nth-2:stroke-2 *:nth-2:stroke-primary size-6 drop-shadow"
                                />
                            </div>
                            <dt className="text-foreground mt-4 font-medium">Real-Time Insights</dt>
                            <dd className="text-muted-foreground">Monitor campaigns with live dashboards and instant notifications.</dd>
                        </div>
                        <div>
                            <div
                                aria-hidden
                                className="relative mx-auto flex size-12 items-center justify-center">
                                <div className="border-border/50 absolute inset-2 border before:absolute before:-inset-x-1 before:inset-y-0 before:border-x" />

                                <Puzzle
                                    className="z-1 stroke-foreground/10 drop-shadow-purple-500/15 fill-illustration relative size-6 drop-shadow-md"
                                    strokeWidth={1}
                                />
                            </div>
                            <dt className="text-foreground mt-4 font-medium">Cross-Channel Integration</dt>
                            <dd className="text-muted-foreground">Connect all marketing channels for unified reporting and campaigns.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    )
}
