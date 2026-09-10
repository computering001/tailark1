import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const SHADCN_AVATAR = "https://avatars.githubusercontent.com/u/124599?v=4"
const MESCHAC_AVATAR = "https://avatars.githubusercontent.com/u/47919550?v=4"
const THEO_AVATAR = "https://avatars.githubusercontent.com/u/68236786?v=4"
const BERNARD_AVATAR = "https://avatars.githubusercontent.com/u/31113941?v=4"
const GLODIE_AVATAR = "https://avatars.githubusercontent.com/u/99137927?v=4"

type Category =
  "company" | "marketing" | "newsroom" | "partners" | "engineering" | "press"

interface Article {
  title: string
  description: string
  category: Category
  image: string
  date: string
  href: string
  authors: Author[]
}

interface Author {
  name: string
  image: string
}

const articles: Article[] = [
  {
    title: "Embracing Remote Work Culture",
    description:
      "Uncover the benefits and challenges of adopting a remote work culture in modern businesses.",
    category: "company",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/time_djv8te.webp",
    date: "Aug 18, 2025",
    href: "#",
    authors: [
      {
        name: "Meschac Irung",
        image: MESCHAC_AVATAR,
      },
    ],
  },
  {
    title: "The Transformative Future of AI in Digital Marketing",
    description:
      "Explore the potential of AI to revolutionize marketing strategies and customer engagement.",
    category: "marketing",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/article-2_rey9it.png",
    date: "Sep 10, 2025",
    href: "#",
    authors: [
      {
        name: "Theo Balick",
        image: THEO_AVATAR,
      },
      {
        name: "Méschac Irung",
        image: MESCHAC_AVATAR,
      },
    ],
  },
  {
    title: "Cutting-Edge Innovations in Data Analytics",
    description:
      "Learn about the latest trends in data analytics and how they can drive business growth.",
    category: "company",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/dots-pattern_yfnqcy.jpg",
    date: "Oct 5, 2025",
    href: "#",
    authors: [
      {
        name: "Shadcn",
        image: SHADCN_AVATAR,
      },
      {
        name: "Meschac Irung",
        image: MESCHAC_AVATAR,
      },
    ],
  },
  {
    title: "Advancements in Cybersecurity",
    description:
      "Discover new technologies protecting businesses from digital threats.",
    category: "company",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/article-2_rey9it.png",
    date: "Oct 15, 2025",
    href: "#",
    authors: [
      {
        name: "Meschac Irung",
        image: MESCHAC_AVATAR,
      },
    ],
  },
  {
    title: "The Role of Blockchain in Modern Finance",
    description:
      "Understand how blockchain is reshaping the financial landscape.",
    category: "marketing",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/dots-2_kmiukp.webp",
    date: "Nov 1, 2025",
    href: "#",
    authors: [
      {
        name: "Theo Balick",
        image: THEO_AVATAR,
      },
    ],
  },
  {
    title: "Sustainability in Tech: A Growing Focus",
    description: "Explore efforts towards sustainable practices in technology.",
    category: "marketing",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/dots-pattern_yfnqcy.jpg",
    date: "Nov 10, 2025",
    href: "#",
    authors: [
      {
        name: "Shadcn",
        image: SHADCN_AVATAR,
      },
    ],
  },
  {
    title: "Leveraging Big Data for Business Success",
    description: "See how big data analytics can unlock new opportunities.",
    category: "newsroom",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/time_djv8te.webp",
    date: "Dec 5, 2025",
    href: "#",
    authors: [
      {
        name: "Bernard Ngandu",
        image: BERNARD_AVATAR,
      },
    ],
  },
  {
    title: "Leveraging Big Data for Business Success",
    description: "See how big data analytics can unlock new opportunities.",
    category: "newsroom",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/article-3_tettwd.png",
    date: "Dec 5, 2025",
    href: "#",
    authors: [
      {
        name: "Glodie Lukose",
        image: GLODIE_AVATAR,
      },
    ],
  },
  {
    title: "Leveraging Big Data for Business Success",
    description:
      "See how big data analytics can unlock new opportunities insights and more from.",
    category: "newsroom",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/article-2_rey9it.png",
    date: "Dec 5, 2025",
    href: "#",
    authors: [
      {
        name: "Bernard Ngandu",
        image: BERNARD_AVATAR,
      },
      {
        name: "Shadcn",
        image: SHADCN_AVATAR,
      },
    ],
  },
  {
    title: "Embracing Remote Work Culture",
    description:
      "Uncover the benefits and challenges of adopting a remote work culture in modern businesses.",
    category: "company",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/time_djv8te.webp",
    date: "Aug 18, 2025",
    href: "#",
    authors: [
      {
        name: "Meschac Irung",
        image: MESCHAC_AVATAR,
      },
    ],
  },
  {
    title: "The Transformative Future of AI in Digital Marketing",
    description:
      "Explore the potential of AI to revolutionize marketing strategies and customer engagement.",
    category: "marketing",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/article-2_rey9it.png",
    date: "Sep 10, 2025",
    href: "#",
    authors: [
      {
        name: "Theo Balick",
        image: THEO_AVATAR,
      },
      {
        name: "Méschac Irung",
        image: MESCHAC_AVATAR,
      },
    ],
  },
  {
    title: "Cutting-Edge Innovations in Data Analytics",
    description:
      "Learn about the latest trends in data analytics and how they can drive business growth.",
    category: "company",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/dots-pattern_yfnqcy.jpg",
    date: "Oct 5, 2025",
    href: "#",
    authors: [
      {
        name: "Shadcn",
        image: SHADCN_AVATAR,
      },
      {
        name: "Meschac Irung",
        image: MESCHAC_AVATAR,
      },
    ],
  },
  {
    title: "Advancements in Cybersecurity",
    description:
      "Discover new technologies protecting businesses from digital threats.",
    category: "company",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/article-2_rey9it.png",
    date: "Oct 15, 2025",
    href: "#",
    authors: [
      {
        name: "Meschac Irung",
        image: MESCHAC_AVATAR,
      },
    ],
  },
  {
    title: "The Role of Blockchain in Modern Finance",
    description:
      "Understand how blockchain is reshaping the financial landscape.",
    category: "marketing",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/dots-2_kmiukp.webp",
    date: "Nov 1, 2025",
    href: "#",
    authors: [
      {
        name: "Theo Balick",
        image: THEO_AVATAR,
      },
    ],
  },
  {
    title: "Sustainability in Tech: A Growing Focus",
    description: "Explore efforts towards sustainable practices in technology.",
    category: "marketing",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/dots-pattern_yfnqcy.jpg",
    date: "Nov 10, 2025",
    href: "#",
    authors: [
      {
        name: "Shadcn",
        image: SHADCN_AVATAR,
      },
    ],
  },
  {
    title: "Leveraging Big Data for Business Success",
    description: "See how big data analytics can unlock new opportunities.",
    category: "newsroom",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/time_djv8te.webp",
    date: "Dec 5, 2025",
    href: "#",
    authors: [
      {
        name: "Bernard Ngandu",
        image: BERNARD_AVATAR,
      },
    ],
  },
  {
    title: "Leveraging Big Data for Business Success",
    description: "See how big data analytics can unlock new opportunities.",
    category: "newsroom",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/article-3_tettwd.png",
    date: "Dec 5, 2025",
    href: "#",
    authors: [
      {
        name: "Glodie Lukose",
        image: GLODIE_AVATAR,
      },
    ],
  },
  {
    title: "Leveraging Big Data for Business Success",
    description:
      "See how big data analytics can unlock new opportunities insights and more from.",
    category: "newsroom",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/article-2_rey9it.png",
    date: "Dec 5, 2025",
    href: "#",
    authors: [
      {
        name: "Bernard Ngandu",
        image: BERNARD_AVATAR,
      },
      {
        name: "Shadcn",
        image: SHADCN_AVATAR,
      },
    ],
  },
]

export default function Blog() {
  return (
    <section className="@container bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-md">
          <h2 className="text-4xl font-semibold text-balance text-muted-foreground tracking-tight">
            Latest{" "}
            <strong className="font-semibold text-foreground">News</strong>
          </h2>
        </div>

        <div className="mt-12 md:mt-20">
          {articles.map((article, index) => (
            <div key={`${article.title}-${article.image}`}>
              <div
                aria-hidden
                className="h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-size-[4px_1px] bg-repeat-x opacity-20"
              />
              <article className="group relative grid gap-4 py-6 transition-none duration-200 md:grid-cols-[1fr_auto]">
                <div className="grid gap-4 md:grid-cols-[auto_1fr_auto]">
                  <div className="flex gap-4 max-md:justify-between">
                    <span className="text-sm text-muted-foreground capitalize md:hidden">
                      {article.category}
                    </span>
                    <time
                      className="text-sm text-muted-foreground md:w-24"
                      dateTime={new Date(article.date).toISOString()}
                    >
                      {article.date}
                    </time>
                  </div>
                  <h2 className="font-semibold text-foreground">
                    {article.title}
                  </h2>
                  <div className="flex h-6 w-24 items-center max-md:hidden">
                    <span className="text-sm text-muted-foreground capitalize">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 max-md:justify-between md:grid md:w-40 md:grid-cols-[1fr_auto]">
                  <div className="flex justify-end gap-2">
                    {article.authors.map((author) => (
                      <div
                        key={author.name}
                        className="aspect-square size-6 overflow-hidden rounded-md border border-transparent bg-card shadow-md ring-1 shadow-black/15 ring-border-illustration"
                      >
                        <Image
                          src={author.image}
                          alt={author.name}
                          width={40}
                          height={40}
                          className="size-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex h-6 items-center">
                    <Link
                      href={article.href}
                      aria-label={`Read ${article.title}`}
                      className="flex items-center gap-1 text-sm font-medium text-primary transition-colors duration-200 before:absolute before:inset-0 hover:text-foreground"
                    >
                      Read
                      <ChevronRight
                        strokeWidth={2.5}
                        aria-hidden="true"
                        className="size-3.5 translate-y-px transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
