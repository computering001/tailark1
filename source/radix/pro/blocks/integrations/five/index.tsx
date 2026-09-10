import { Gemini } from '@/components/ui/svgs/gemini'
import { Claude } from '@/components/ui/svgs/claude'
import { OpenAI } from '@/components/ui/svgs/open-ai'
import { Vercel } from '@/components/ui/svgs/vercel'
import { Stripe } from '@/components/ui/svgs/stripe'

export default function IntegrationsSection() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-4 grid-rows-6 border *:border-dashed md:grid-cols-10 md:grid-rows-3">
                    <div className="col-span-full row-span-3 space-y-4 p-8 md:col-span-7">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl tracking-tight">Seamlessly Integrate with your favorite Tools</h2>
                        <p className="text-muted-foreground text-balance md:text-lg">Each Kit is a full recreation of every shadcn/ui component, plus extra elements, all crafted with precision and an eye for modern trends. In addition to having a unique design style.</p>
                    </div>

                    <div className="col-start-4 flex items-center justify-center border-b border-l max-md:row-start-4 max-md:border-t md:col-start-10">
                        <Gemini className="size-6" />
                    </div>

                    <div className="col-start-3 row-start-5 flex items-center justify-center border-l border-t md:col-start-9 md:row-start-2">
                        <Vercel className="size-6" />
                    </div>
                    <div className="col-start-4 row-start-5 flex items-center justify-center border-l md:col-start-10 md:row-start-2">
                        <Claude className="size-6" />
                    </div>
                    <div className="col-start-2 row-start-6 flex items-center justify-center border-l border-t md:col-start-8 md:row-start-3">
                        <OpenAI className="size-6" />
                    </div>
                    <div className="col-start-3 col-end-5 row-start-6 flex items-center justify-center border-l border-t md:col-start-9 md:col-end-11 md:row-start-3">
                        <Stripe className="h-6 w-16" />
                    </div>
                </div>
            </div>
        </section>
    )
}
