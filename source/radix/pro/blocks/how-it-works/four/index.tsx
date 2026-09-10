import { Button } from '@/components/ui/button'
import { Document } from '@/components/illustrations/document'
import { Currency } from '@/components/illustrations/currency'
import { ArrowBigRight } from 'lucide-react'
import Link from 'next/link'
import DocumentCsv from '@/components/illustrations/document-csv'

export default function HowItWorksSection() {
    return (
        <section className="overflow-hidden">
            <div className="bg-background m-4 rounded-[2rem] py-24">
                <div className="@container relative mx-auto w-full max-w-5xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-primary">Our Process</span>
                        <h2 className="text-foreground mt-4 text-4xl font-semibold tracking-tight">Simple Three-Step Workflow</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Experience our streamlined approach to data analysis that empowers your team to make informed decisions quickly and efficiently.</p>
                    </div>

                    <div className="@3xl:grid-cols-3 my-20 grid gap-12">
                        <div className="row-span-3 grid grid-rows-subgrid gap-8 text-center">
                            <span className="bg-foreground/5 text-foreground mx-auto flex size-6 items-center justify-center rounded-full border text-sm font-medium">1</span>

                            <div className="relative self-center">
                                <div className="mx-auto w-fit">
                                    <DocumentCsv />
                                </div>
                                <ArrowBigRight className="@3xl:block fill-illustration stroke-illustration absolute inset-y-0 right-0 my-auto hidden translate-x-[150%] drop-shadow" />
                            </div>

                            <div className="space-y-3 self-end">
                                <h3 className="text-foreground text-lg font-medium">Data Collection</h3>
                                <p className="text-muted-foreground text-balance">Easily import data from multiple sources and formats with.</p>
                            </div>
                        </div>

                        <div className="row-span-3 grid grid-rows-subgrid gap-8 text-center">
                            <span className="bg-foreground/5 text-foreground mx-auto flex size-6 items-center justify-center rounded-full border text-sm font-medium">2</span>

                            <div className="relative">
                                <div className="mx-auto w-fit self-center">
                                    <Currency />
                                </div>
                                <ArrowBigRight className="@3xl:block fill-illustration stroke-illustration absolute inset-y-0 right-0 my-auto hidden translate-x-[150%] drop-shadow" />
                            </div>

                            <div className="space-y-3 self-end">
                                <h3 className="text-foreground text-lg font-medium">Automated Analysis</h3>
                                <p className="text-muted-foreground text-balance">Our AI-powered system processes complex datasets to identify patterns.</p>
                            </div>
                        </div>

                        <div className="row-span-3 grid grid-rows-subgrid gap-8 text-center">
                            <span className="bg-foreground/5 textforeground0 mx-auto flex size-6 items-center justify-center rounded-full border text-sm font-medium">3</span>

                            <div className="mx-auto flex w-fit gap-2 self-center">
                                <Document />
                                <Document />
                            </div>

                            <div className="space-y-3 self-end">
                                <h3 className="text-foreground text-lg font-medium">Actionable Reports</h3>
                                <p className="text-muted-foreground text-balance">Transform insights into beautiful visualizations and shareable reports.</p>
                            </div>
                        </div>
                    </div>

                    <Button
                        asChild
                        variant="outline"
                        className="mx-auto flex w-fit">
                        <Link href="/sign-up">Get Started</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
