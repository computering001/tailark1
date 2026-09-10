"use client"
import Link from "next/link"
import { LogoIcon } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Headset,
  Menu,
  X,
  Shield,
  SquareActivity,
  Sparkles,
  Cpu,
  Gem,
  ShoppingBag,
  GraduationCap,
  BookOpen,
  Notebook,
  Croissant,
} from "lucide-react"
import { useMedia } from "@/hooks/use-media"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface FeatureLink {
  href: string
  name: string
  description?: string
  icon: React.ReactElement
}

interface MobileLink {
  groupName?: string
  links?: FeatureLink[]
  name?: string
  href?: string
}

const features: FeatureLink[] = [
  {
    href: "#ux",
    name: "AI",
    description: "Generate Insights and Recommendations",
    icon: <Sparkles className="fill-green-500/15 stroke-foreground" />,
  },
  {
    href: "#performance",
    name: "Performance",
    description: "Lightning-fast load times",
    icon: <SquareActivity className="fill-indigo-500/15 stroke-foreground" />,
  },
  {
    href: "#security",
    name: "Security",
    description: "Keep your data safe and secure",
    icon: <Shield className="fill-blue-500/15 stroke-foreground" />,
  },
  {
    href: "#support",
    name: "Customer Support",
    description: "Get help when you need it",
    icon: <Headset className="fill-pink-500/15 stroke-foreground" />,
  },
]

const useCases: FeatureLink[] = [
  {
    href: "#ux",
    name: "Marketplace",
    description: "Find and buy AI tools",
    icon: <ShoppingBag className="fill-emerald-500/25 stroke-foreground" />,
  },
  {
    href: "#performance",
    name: "Guides",
    description: "Learn how to use AI tools",
    icon: <GraduationCap className="fill-indigo-500/15 stroke-foreground" />,
  },
  {
    href: "#security",
    name: "API Integration",
    description: "Integrate AI tools into your app",
    icon: <Cpu className="fill-blue-500/15 stroke-foreground" />,
  },
  {
    href: "#support",
    name: "Partnerships",
    description: "Get help when you need it",
    icon: <Gem className="fill-pink-500/15 stroke-foreground" />,
  },
]

const contentLinks: FeatureLink[] = [
  {
    name: "Announcements",
    href: "#announcements",
    icon: <BookOpen className="fill-purple-500/15 stroke-foreground" />,
  },
  {
    name: "Resources",
    href: "#resources",
    icon: <Croissant className="fill-red-500/15 stroke-foreground" />,
  },
  {
    name: "Blog",
    href: "#blog",
    icon: <Notebook className="fill-zinc-500/15 stroke-foreground" />,
  },
]

const mobileLinks: MobileLink[] = [
  {
    groupName: "Product",
    links: features,
  },
  {
    groupName: "Solutions",
    links: [...useCases, ...contentLinks],
  },
  { name: "Pricing", href: "#" },
  { name: "Company", href: "#" },
]

export default function HeaderThree() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const isLarge = useMedia("(min-width: 64rem)")

  return (
    <>
      <header
        data-state={isMobileMenuOpen ? "active" : "inactive"}
        className="bg-background"
      >
        <div
          className={cn(
            "fixed inset-x-0 top-0 z-50 bg-linear-to-b from-background px-3 pt-3 backdrop-blur",
            !isLarge && "h-18 overflow-hidden",
            isMobileMenuOpen && "h-screen bg-background/75 backdrop-blur"
          )}
        >
          <div className="mx-auto max-w-xl rounded-2xl bg-card/75 px-6 shadow-md ring-1 shadow-black/6.5 ring-border backdrop-blur-xl lg:px-2">
            <div className="relative flex flex-wrap items-center justify-between lg:py-2">
              <div className="flex items-center justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:in-data-[state=active]:border-b max-lg:in-data-[state=active]:border-foreground/5">
                <Link
                  href="/"
                  aria-label="home"
                  className="-ml-3 flex h-10 w-11 rounded-xl hover:bg-foreground/5 lg:-m-1"
                >
                  <LogoIcon uniColor className="m-auto" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label={
                    isMobileMenuOpen == true ? "Close Menu" : "Open Menu"
                  }
                  className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="m-auto size-5 transition-opacity duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                  <X className="absolute inset-0 m-auto size-5 scale-0 -rotate-180 opacity-0 transition-opacity duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
                </button>
              </div>

              {isLarge && (
                <div className="absolute inset-0 m-auto size-fit">
                  <NavMenu />
                </div>
              )}
              {!isLarge && isMobileMenuOpen && (
                <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
              )}

              <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 in-data-[state=active]:flex max-lg:in-data-[state=active]:mt-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <Button
                    render={<Link href="#">Sign In</Link>}
                    nativeButton={false}
                    variant="outline"
                    size="sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="h-[120vh] bg-background" />
    </>
  )
}

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <nav className="w-full">
      <Accordion className="mt-0.5 space-y-0.5 **:hover:no-underline">
        {mobileLinks.map((link) => {
          if (link.groupName && link.links) {
            return (
              <AccordionItem
                key={link.groupName}
                value={link.groupName}
                className="group relative before:pointer-events-none before:absolute before:inset-x-0 before:bottom-0 before:border-b before:border-border"
              >
                <AccordionTrigger className="flex items-center justify-between border-b-0 py-3 text-lg font-medium data-open:bg-foreground/5">
                  {link.groupName}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul>
                    {link.links.map((feature) => (
                      <li key={feature.name}>
                        <Link
                          href={feature.href}
                          onClick={closeMenu}
                          className="grid grid-cols-[auto_1fr] items-center gap-2.5 py-2"
                        >
                          <div
                            aria-hidden
                            className="flex items-center justify-center *:size-4"
                          >
                            {feature.icon}
                          </div>
                          <div className="text-base">{feature.name}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )
          }
          return null
        })}
      </Accordion>
      {mobileLinks.map((link) => {
        if (link.name && link.href) {
          return (
            <Link
              key={link.name ?? link.href}
              href={link.href}
              onClick={closeMenu}
              className="group relative block border-0 border-b py-4 text-lg font-medium"
            >
              {link.name}
            </Link>
          )
        }
        return null
      })}
    </nav>
  )
}

const NavMenu = () => {
  return (
    <NavigationMenu viewport={false} className="max-lg:hidden">
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0">
            <div className="w-72">
              <div className="relative rounded-xl bg-card p-0.5 pt-2 shadow ring-1 ring-border">
                <span className="ml-3 text-xs font-medium text-muted-foreground uppercase">
                  Features
                </span>
                <ul className="mt-1">
                  {features.map((feature, index) => (
                    <ListItem
                      key={feature.name}
                      href={feature.href}
                      title={feature.name}
                      description={feature.description}
                    >
                      {feature.icon}
                    </ListItem>
                  ))}
                </ul>
              </div>
              <div className="-mt-2">
                <NavigationMenuLink
                  render={
                    <Link href="#" className="text-primary">
                      More features
                    </Link>
                  }
                  className={navigationMenuTriggerStyle({
                    className: "w-full items-start pt-7 pb-5",
                  })}
                />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className="grid min-w-lg grid-cols-[auto_1fr] gap-1.5 p-0">
            <div className="rounded-xl bg-card p-0.5 pt-2 shadow ring-1 ring-border">
              <span className="ml-3 text-xs font-medium text-muted-foreground uppercase">
                Use Cases
              </span>
              <ul className="mt-1">
                {useCases.map((useCase, index) => (
                  <ListItem
                    key={useCase.name}
                    href={useCase.href}
                    title={useCase.name}
                    description={useCase.description}
                  >
                    {useCase.icon}
                  </ListItem>
                ))}
              </ul>
            </div>
            <div className="p-0.5 pt-2">
              <span className="ml-3 text-xs font-medium text-muted-foreground uppercase">
                Content
              </span>
              <ul className="mt-1">
                {contentLinks.map((content, index) => (
                  <NavigationMenuLink
                    render={
                      <Link
                        href={content.href}
                        className="grid grid-cols-[auto_1fr] items-center gap-2.5 px-3"
                      >
                        {content.icon}
                        <div className="text-sm font-medium text-foreground">
                          {content.name}
                        </div>
                      </Link>
                    }
                    key={content.name}
                  />
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="#">Pricing</Link>}
            className={navigationMenuTriggerStyle()}
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="#">Company</Link>}
            className={navigationMenuTriggerStyle()}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  description,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  title: string
  description?: string
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href} className="grid grid-cols-[auto_1fr] gap-2.5 p-3">
            <div className="relative flex size-9 items-center justify-center rounded-lg border border-transparent bg-illustration shadow-sm ring-1 ring-foreground/10 *:drop-shadow *:drop-shadow-black/6.5 before:absolute before:inset-0 before:rounded-lg before:bg-radial before:to-foreground/3">
              {children}
            </div>
            <div className="space-y-0.5">
              <div className="text-sm font-medium text-foreground">{title}</div>
              <p className="line-clamp-1 text-xs text-muted-foreground">
                {description}
              </p>
            </div>
          </Link>
        }
      />
    </li>
  )
}
