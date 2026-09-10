"use client"
import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import React from "react"
import { useScroll, useMotionValueEvent } from "motion/react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X, ArrowRight } from "lucide-react"
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
}

interface MobileLink {
  groupName?: string
  links?: FeatureLink[]
  name?: string
  href?: string
}

const features: FeatureLink[] = [
  {
    href: "#automation",
    name: "Automation",
    description: "Automate your workflow",
  },
  {
    href: "#scalability",
    name: "Scalability",
    description: "Scale your application effortlessly",
  },
  {
    href: "#backup",
    name: "Backup",
    description: "Keep your data backed up",
  },
  {
    href: "#analytics",
    name: "Analytics",
    description: "Track and measure your progress",
  },
]

const useCases: FeatureLink[] = [
  {
    href: "#ux",
    name: "Marketplace",
    description: "Find and buy AI tools",
  },
  {
    href: "#performance",
    name: "Guides",
    description: "Learn how to use AI tools",
  },
  {
    href: "#security",
    name: "API Integration",
    description: "Integrate AI tools into your app",
  },
  {
    href: "#support",
    name: "Partnerships",
    description: "Get help when you need it",
  },
]

const contentLinks: FeatureLink[] = [
  {
    name: "Announcements",
    href: "#announcements",
  },
  {
    name: "Resources",
    href: "#resources",
  },
  { name: "Blog", href: "#link" },
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

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const isLarge = useMedia("(min-width: 64rem)")

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 5)
  })

  return (
    <header
      data-state={isMobileMenuOpen ? "active" : "inactive"}
      {...(isScrolled && { "data-scrolled": true })}
    >
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b in-data-scrolled:bg-background",
          !isLarge && "h-14 overflow-hidden border-b",
          isMobileMenuOpen && "h-screen bg-background"
        )}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative flex flex-wrap items-center justify-between lg:py-3">
            <div className="flex justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo uniColor />
              </Link>

              {isLarge && (
                <div className="absolute inset-0 m-auto size-fit">
                  <NavMenu />{" "}
                </div>
              )}
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

            {!isLarge && isMobileMenuOpen && (
              <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
            )}

            <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 in-data-[state=active]:flex max-lg:in-data-[state=active]:mt-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild variant="ghost" className="rounded-full pr-2.5">
                  <Link href="#">
                    <span>Continue</span>
                    <span className="flex size-5 rounded-full bg-card text-primary shadow-xs ring-1 ring-border *:m-auto *:size-3!">
                      <ArrowRight className="size-4" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <nav className="w-full">
      <Accordion
        type="single"
        collapsible
        className="-mx-4 mt-0.5 space-y-0.5 **:hover:no-underline"
      >
        {mobileLinks.map((link, index) => {
          if (link.groupName && link.links) {
            return (
              <AccordionItem
                key={link.groupName}
                value={link.groupName}
                className="group relative border-b-0 before:pointer-events-none before:absolute before:inset-x-4 before:bottom-0 before:border-b"
              >
                <AccordionTrigger className="flex items-center justify-between px-4 py-3 text-lg **:font-normal! data-[state=open]:bg-foreground/5">
                  {link.groupName}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul>
                    {link.links.map((feature, featureIndex) => (
                      <li key={feature.name}>
                        <Link
                          href={feature.href}
                          onClick={closeMenu}
                          className="block px-4 py-3 text-lg"
                        >
                          {feature.name}
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
      {mobileLinks.map((link, index) => {
        if (link.name && link.href) {
          return (
            <Link
              key={link.name ?? link.href}
              href={link.href}
              onClick={closeMenu}
              className="group relative block border-0 border-b py-4 text-lg"
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
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent className="mx-auto grid max-w-xl min-w-xl grid-cols-2 divide-x rounded-3xl! p-1 shadow-black/5!">
            <div className="p-3">
              <span className="ml-4 text-xs font-medium text-muted-foreground">
                Features
              </span>
              <ul className="mt-2">
                {features.map((feature, index) => (
                  <ListItem
                    key={feature.name}
                    href={feature.href}
                    title={feature.name}
                    description={feature.description}
                  />
                ))}
              </ul>
            </div>
            <div className="p-3">
              <span className="ml-4 text-xs font-medium text-muted-foreground">
                Agents Workflow
              </span>
              <ul className="mt-2">
                {useCases.map((useCase, index) => (
                  <ListItem
                    key={useCase.name}
                    href={useCase.href}
                    title={useCase.name}
                    description={useCase.description}
                  />
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#">Company</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  description,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  title: string
  description?: string
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="gap-0 px-4">
          <div className="text-sm font-medium text-foreground">{title}</div>
          <p className="line-clamp-1 text-sm text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
