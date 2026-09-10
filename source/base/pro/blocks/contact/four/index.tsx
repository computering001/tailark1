import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Building2, Headphones, MessageSquare } from 'lucide-react'

const contactOptions = [
    {
        icon: MessageSquare,
        title: 'Chat with us',
        description: 'Speak to our friendly team via live chat.',
        action: 'Start a conversation',
        href: '#chat',
    },
    {
        icon: Headphones,
        title: 'Call us',
        description: 'Mon-Fri from 8am to 5pm.',
        action: '+1 (555) 000-0000',
        href: 'tel:+15550000000',
    },
    {
        icon: Building2,
        title: 'Visit us',
        description: 'Visit our office HQ.',
        action: 'Get directions',
        href: '#directions',
    },
]

export default function Contact() {
    return (
        <section className="bg-background py-24">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:tracking-tight tracking-tight">Get in touch</h1>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg">
                        Choose the best way to reach us. <br /> Our team is here to help.
                    </p>
                </div>

                <div className="@sm:grid-cols-2 @2xl:grid-cols-3 mx-auto mt-12 grid max-w-2xl gap-3">
                    {contactOptions.map((option) => (
                        <Card
                            key={option.title}
                            className="group relative flex flex-col p-6 transition-shadow hover:shadow-lg">
                            <option.icon className="text-muted-foreground mb-6 size-4" />

                            <h2 className="font-medium">{option.title}</h2>
                            <p className="text-muted-foreground mb-4 mt-2 text-sm">{option.description}</p>
                            <Link
                                href={option.href}
                                className="text-primary mt-4 mt-auto text-sm font-medium hover:underline">
                                {option.action}
                            </Link>
                        </Card>
                    ))}
                </div>

                <div className="bg-muted/50 mx-auto mt-3 max-w-2xl rounded-xl p-8 text-center">
                    <h2 className="text-xl font-semibold">Can't find what you're looking for?</h2>
                    <p className="text-muted-foreground mt-2">Check out our comprehensive documentation and FAQ section.</p>
                    <div className="mt-6 flex justify-center gap-3">
                        <Button
                            render={<Link href="#faq">Browse FAQ</Link>}
                            nativeButton={false}
                            size="sm"
                        />
                        <Button
                            render={<Link href="#docs">View documentation</Link>}
                            nativeButton={false}
                            variant="outline"
                            size="sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
