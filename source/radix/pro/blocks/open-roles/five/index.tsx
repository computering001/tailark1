import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

type Role = {
    slug: string
    title: string
    location: string
    time: 'full' | 'part'
    category: 'engeneering' | 'marketing' | 'compliance' | 'data' | 'finance'
    description: string
}

const openRoles: Role[] = [
    {
        slug: 'ai-engineer',
        title: 'AI Engineer',
        location: 'San Francisco',
        time: 'full',
        category: 'engeneering',
        description: 'Build and deploy cutting-edge AI models and systems.',
    },
    {
        slug: 'design-engineer',
        title: 'Design Engineer',
        location: 'San Francisco',
        time: 'full',
        category: 'engeneering',
        description: 'Bridge the gap between design and engineering.',
    },
    {
        slug: 'product-engineer',
        title: 'Product Engineer',
        location: 'Remote',
        time: 'full',
        category: 'engeneering',
        description: 'Own features end-to-end from ideation to delivery.',
    },
    {
        slug: 'backend-engineer',
        title: 'Backend Engineer',
        location: 'San Francisco',
        time: 'full',
        category: 'engeneering',
        description: 'Design and build scalable backend services.',
    },
    {
        slug: 'software-engineer',
        title: 'Software Engineer',
        location: 'New York',
        time: 'full',
        category: 'engeneering',
        description: 'Develop high-quality software solutions.',
    },
    {
        slug: 'marketing-manager',
        title: 'Marketing Manager',
        location: 'New York',
        time: 'full',
        category: 'marketing',
        description: 'Lead marketing campaigns and brand strategy.',
    },
    {
        slug: 'content-strategist',
        title: 'Content Strategist',
        location: 'Remote',
        time: 'part',
        category: 'marketing',
        description: 'Create compelling content that drives engagement.',
    },
    {
        slug: 'growth-marketer',
        title: 'Growth Marketer',
        location: 'San Francisco',
        time: 'full',
        category: 'marketing',
        description: 'Drive user acquisition and retention strategies.',
    },
    {
        slug: 'compliance-officer',
        title: 'Compliance Officer',
        location: 'San Francisco',
        time: 'full',
        category: 'compliance',
        description: 'Ensure regulatory compliance across operations.',
    },
    {
        slug: 'regulatory-analyst',
        title: 'Regulatory Analyst',
        location: 'New York',
        time: 'full',
        category: 'compliance',
        description: 'Analyze and interpret regulatory requirements.',
    },
    {
        slug: 'compliance-manager',
        title: 'Compliance Manager',
        location: 'Remote',
        time: 'full',
        category: 'compliance',
        description: 'Oversee compliance programs and policies.',
    },
    {
        slug: 'data-scientist',
        title: 'Data Scientist',
        location: 'Remote',
        time: 'full',
        category: 'data',
        description: 'Extract insights from complex datasets.',
    },
    {
        slug: 'data-analyst',
        title: 'Data Analyst',
        location: 'San Francisco',
        time: 'full',
        category: 'data',
        description: 'Transform data into actionable business insights.',
    },
    {
        slug: 'data-engineer',
        title: 'Data Engineer',
        location: 'New York',
        time: 'full',
        category: 'data',
        description: 'Build and maintain data pipelines and infrastructure.',
    },
    {
        slug: 'financial-analyst',
        title: 'Financial Analyst',
        location: 'New York',
        time: 'full',
        category: 'finance',
        description: 'Provide financial analysis and forecasting.',
    },
    {
        slug: 'accountant',
        title: 'Accountant',
        location: 'San Francisco',
        time: 'part',
        category: 'finance',
        description: 'Manage financial records and reporting.',
    },
    {
        slug: 'finance-manager',
        title: 'Finance Manager',
        location: 'Remote',
        time: 'full',
        category: 'finance',
        description: 'Lead financial planning and strategy.',
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
                <h2 className="text-balance px-4 text-4xl font-semibold tracking-tight">Open Positions</h2>

                <div className="space-y-12">
                    {Object.entries(groupedRoles).map(([category, roles]) => (
                        <div
                            key={category}
                            className="space-y-3">
                            <h3 className="text-muted-foreground px-4 text-sm capitalize">{category}</h3>

                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {roles.map((role, index) => (
                                    <div
                                        key={role.slug}
                                        className="bg-card ring-border shadow-black/4 hover:shadow-black/6.5 group relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl p-6 shadow ring-1">
                                        <div className="space-y-2">
                                            <h3 className="group-hover:text-primary text-lg font-medium">
                                                <Link
                                                    href={role.slug}
                                                    className="after:absolute after:inset-0">
                                                    {role.title}
                                                </Link>
                                            </h3>

                                            <p className="text-muted-foreground text-sm">{role.description}</p>
                                        </div>
                                        <div className="flex items-end justify-between">
                                            <div className="text-muted-foreground text-sm">
                                                <span>{role.location}</span>
                                                <span className="mx-2">·</span>
                                                <span className="capitalize">{role.time}-time</span>
                                            </div>
                                            <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-4 transition-colors" />
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
