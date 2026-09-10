import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type Role = {
    slug: string
    title: string
    location: string
    time: 'full' | 'part'
    category: 'engeneering' | 'marketing' | 'compliance' | 'data' | 'finance'
}

const openRoles: Role[] = [
    {
        slug: 'ai-engineer',
        title: 'AI Engineer',
        location: 'San Francisco',
        time: 'full',
        category: 'engeneering',
    },
    {
        slug: 'design-engineer',
        title: 'Design Engineer',
        location: 'San Francisco',
        time: 'full',
        category: 'engeneering',
    },
    {
        slug: 'product-engineer',
        title: 'Product Engineer',
        location: 'Remote',
        time: 'full',
        category: 'engeneering',
    },
    {
        slug: 'backend-engineer',
        title: 'Backend Engineer',
        location: 'San Francisco',
        time: 'full',
        category: 'engeneering',
    },
    {
        slug: 'software-engineer',
        title: 'Software Engineer',
        location: 'New York',
        time: 'full',
        category: 'engeneering',
    },
    {
        slug: 'marketing-manager',
        title: 'Marketing Manager',
        location: 'New York',
        time: 'full',
        category: 'marketing',
    },
    {
        slug: 'content-strategist',
        title: 'Content Strategist',
        location: 'Remote',
        time: 'part',
        category: 'marketing',
    },
    {
        slug: 'compliance-officer',
        title: 'Compliance Officer',
        location: 'San Francisco',
        time: 'full',
        category: 'compliance',
    },
    {
        slug: 'regulatory-analyst',
        title: 'Regulatory Analyst',
        location: 'New York',
        time: 'full',
        category: 'compliance',
    },
    {
        slug: 'data-scientist',
        title: 'Data Scientist',
        location: 'Remote',
        time: 'full',
        category: 'data',
    },
    {
        slug: 'data-analyst',
        title: 'Data Analyst',
        location: 'San Francisco',
        time: 'full',
        category: 'data',
    },
    {
        slug: 'financial-analyst',
        title: 'Financial Analyst',
        location: 'New York',
        time: 'full',
        category: 'finance',
    },
    {
        slug: 'accountant',
        title: 'Accountant',
        location: 'San Francisco',
        time: 'part',
        category: 'finance',
    },
]

type GroupedRoles = { [K in Role['category']]?: Role[] }

const groupedRoles: GroupedRoles = openRoles.reduce((acc: GroupedRoles, role) => {
    if (!acc[role.category]) {
        acc[role.category] = []
    }
    acc[role.category]!.push(role)
    return acc
}, {})

export default function OpenRolesSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-2">
                <div className="max-w-xl px-4">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight">Open Roles</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Join our team and help shape the future. Browse our current openings and find the perfect opportunity to grow your career with us.</p>
                </div>
                <div className="space-y-8">
                    {Object.entries(groupedRoles).map(([category, roles]) => (
                        <div
                            key={category}
                            className="bg-foreground/5 overflow-hidden rounded-2xl p-1">
                            <div className="px-4 py-3">
                                <h3 className="text-muted-foreground text-xs font-medium uppercase">{category}</h3>
                            </div>
                            <div className="ring-border bg-card shadow-black/6.5 overflow-hidden rounded-xl shadow-md ring-1">
                                {roles.map((role, index) => (
                                    <div
                                        key={role.slug}
                                        className="not-last:border-b not-last:border-dashed group">
                                        <div className="hover:bg-foreground/2 relative flex flex-wrap items-center gap-1 gap-x-2 px-4 py-3">
                                            <Link
                                                href={role.slug}
                                                className="font-medium after:absolute after:inset-0 max-md:w-full">
                                                {role.title}
                                            </Link>

                                            <span className="bg-foreground/35 size-0.5 rounded-full max-md:hidden" />
                                            <span className="text-muted-foreground text-sm">{role.location}</span>

                                            <div className="group-hover:bg-foreground/6.5 group-hover:border-border-illustration ml-auto flex h-7 items-center gap-1.5 rounded-full border border-transparent pl-3 pr-2">
                                                <span className="not-group-hover:opacity-0 text-xs font-medium transition-opacity duration-100">Learn More</span>
                                                <ArrowRight className="text-muted-foreground group-hover:text-primary size-4 transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
