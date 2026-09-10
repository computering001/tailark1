import { Button } from '@/components/ui/button'
import { Document } from '@/components/illustrations/document'
import { Currency } from '@/components/illustrations/currency'
import { ArrowBigDown } from 'lucide-react'
import Link from 'next/link'
import DocumentCsv from '@/components/illustrations/document-csv'

export default function HowItWorksSection() {
    return (
        <section className="overflow-hidden">
            <div className="bg-background m-4 rounded-[2rem] py-24">
                <div className="relative mx-auto w-full max-w-5xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-primary">Our Process</span>
                        <h2 className="text-foreground mt-4 text-4xl font-semibold tracking-tight">Simple Three-Step Workflow</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Experience our streamlined approach to data analysis that empowers your team to make informed decisions quickly and efficiently.</p>
                    </div>

                    <div className="md:max-w-1/3 mx-auto my-8 grid gap-12 *:py-6">
                        <div className="relative">
                            <div className="text-center">
                                <span className="bg-foreground/5 text-foreground mx-auto flex size-6 items-center justify-center rounded-full border text-sm font-medium">1</span>
                                <div className="mx-auto my-8 w-fit">
                                    <DocumentCsv />
                                </div>
                                <h3 className="text-foreground mb-3 text-lg font-medium">Data Collection</h3>
                                <p className="text-muted-foreground text-balance">Easily import data from multiple sources and formats with our intuitive integration tools.</p>
                            </div>
                            <ArrowBigDown className="fill-illustration stroke-illustration absolute inset-x-0 bottom-0 mx-auto translate-y-[150%] drop-shadow" />
                        </div>
                        <div className="relative">
                            <div className="text-center">
                                <span className="bg-foreground/5 text-foreground mx-auto flex size-6 items-center justify-center rounded-full border text-sm font-medium">2</span>
                                <div className="mx-auto my-8 w-fit">
                                    <Currency />
                                </div>
                                <h3 className="text-foreground mb-3 text-lg font-medium">Automated Analysis</h3>
                                <p className="text-muted-foreground text-balance">Our AI-powered system processes complex datasets to identify patterns and insights instantly.</p>
                            </div>
                            <ArrowBigDown className="fill-illustration stroke-illustration absolute inset-x-0 bottom-0 mx-auto translate-y-[150%] drop-shadow" />
                        </div>
                        <div className="space-y-6">
                            <div className="text-center">
                                <span className="bg-foreground/5 text-foreground mx-auto flex size-6 items-center justify-center rounded-full border text-sm font-medium">3</span>
                                <div className="mx-auto my-8 flex w-fit gap-2">
                                    <Document />
                                    <Document />
                                </div>
                                <h3 className="text-foreground mb-3 text-lg font-medium">Actionable Reports</h3>
                                <p className="text-muted-foreground text-balance">Transform insights into beautiful visualizations and shareable reports to drive decisions.</p>
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
