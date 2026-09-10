import { Currency } from '@/components/illustrations/currency'
import { FileUpload } from '@/components/illustrations/file-upload'
import { Schedule } from '@/components/illustrations/schedule'
import { Chat } from '@/components/illustrations/chat'
import { Reply } from '@/components/illustrations/reply'

export default function BentoTwelve() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="@3xl:grid @3xl:grid-cols-2 @3xl:*:p-12 border *:p-8">
                    <div className="@3xl:gap-12 @3xl:border-r row-span-2 grid grid-rows-subgrid gap-8 border-b">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Financial Analytics</h3>
                            <p className="text-muted-foreground mt-4 text-lg">Track revenue streams and expense categories with real-time financial dashboards that highlight growth opportunities.</p>
                        </div>
                        <Currency />
                    </div>
                    <div className="@3xl:gap-12 row-span-2 grid grid-rows-subgrid gap-8 border-b">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Seamless File Sharing</h3>
                            <p className="text-muted-foreground mt-4 text-lg">Upload and share documents securely with team members or clients while maintaining version control and access permissions.</p>
                        </div>
                        <FileUpload variant="mixed" />
                    </div>
                    <div className="@3xl:col-span-2 @3xl:gap-22 @3xl:grid-cols-2 border-background grid gap-8 border-y">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">AI-Powered Chat Support</h3>
                            <p className="text-muted-foreground mt-4 text-lg">Get instant answers to your questions with our intelligent chat assistant that learns from your interactions to provide personalized help.</p>
                        </div>
                        <Chat />
                    </div>
                    <div className="@3xl:gap-12 @3xl:border-r row-span-2 grid grid-rows-subgrid gap-8 border-t">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Team Collaboration</h3>
                            <p className="text-muted-foreground mt-4 text-lg">Streamline communication with integrated comment threads that keep discussions organized and accessible within your projects.</p>
                        </div>
                        <Reply className="self-end" />
                    </div>
                    <div className="@3xl:gap-12 row-span-2 grid grid-rows-subgrid gap-8 border-t">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Smart Scheduling</h3>
                            <p className="text-muted-foreground mt-4 text-lg">Automate appointment booking and task management with intelligent calendar features that optimize your team's productivity.</p>
                        </div>
                        <Schedule className="self-end pl-9" />
                    </div>
                </div>
            </div>
        </section>
    )
}
