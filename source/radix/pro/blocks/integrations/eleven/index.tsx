import { Gemini } from '@/components/ui/svgs/gemini'
import { GooglePaLM } from '@/components/ui/svgs/google-palm'
import { Claude } from '@/components/ui/svgs/claude'
import { OpenAI } from '@/components/ui/svgs/open-ai'
import { Linear } from '@/components/ui/svgs/linear'
import { Vercel } from '@/components/ui/svgs/vercel'

export default function IntegrationsSection() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-xl">
                    <div
                        aria-hidden
                        className="aspect-ratio *:ring-border grid grid-cols-8 gap-px *:flex *:aspect-square *:rounded-xl *:ring-1 sm:grid-cols-10">
                        <div
                            aria-hidden
                            className="max-sm:hidden"
                        />
                        <div aria-hidden />
                        <div aria-hidden />
                        <div className="bg-illustration relative shadow-md shadow-black/10">
                            <Linear className="m-auto size-6" />
                        </div>
                        <div aria-hidden />
                        <div />
                        <div />
                        <div className="bg-illustration relative shadow-md shadow-black/10">
                            <Vercel className="m-auto size-6" />
                        </div>
                        <div />
                        <div
                            aria-hidden
                            className="max-sm:hidden"
                        />

                        <div
                            aria-hidden
                            className="max-sm:hidden"
                        />
                        <div />
                        <div className="bg-illustration relative shadow-md shadow-black/10">
                            <Claude className="m-auto size-6" />
                        </div>
                        <div aria-hidden />
                        <div aria-hidden />
                        <div aria-hidden />
                        <div className="bg-illustration relative shadow-md shadow-black/10">
                            <Gemini className="m-auto size-6" />
                        </div>
                        <div aria-hidden />
                        <div aria-hidden />
                        <div
                            aria-hidden
                            className="max-sm:hidden"
                        />

                        <div
                            aria-hidden
                            className="max-sm:hidden"
                        />
                        <div aria-hidden />
                        <div aria-hidden />
                        <div className="bg-illustration relative shadow-md shadow-black/10">
                            <GooglePaLM className="m-auto size-6" />
                        </div>
                        <div aria-hidden />
                        <div className="bg-illustration relative shadow-md shadow-black/10">
                            <OpenAI className="m-auto size-6" />
                        </div>
                        <div aria-hidden />
                        <div aria-hidden />
                        <div aria-hidden />
                        <div
                            aria-hidden
                            className="max-sm:hidden"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
