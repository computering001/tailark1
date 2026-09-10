"use client"
import { useEffect, useRef, useState } from "react"
import CodeBlockView from "@/components/code-block"
import LoginPage from "@/components/illustrations/login-preview"
import type { JSX, SVGProps } from "react"
import type { BundledLanguage } from "shiki/bundle/web"

const Nextjs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_408_139"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={180}
      height={180}
    >
      <circle cx={90} cy={90} r={90} fill="black" />
    </mask>
    <g mask="url(#mask0_408_139)">
      <circle
        cx={90}
        cy={90}
        r={87}
        fill="black"
        stroke="white"
        strokeWidth={6}
      />
      <path
        d="M149.51 157.52L69.14 54H54V125.97H66.11V69.38L140 164.84C143.33 162.61 146.51 160.16 149.51 157.52Z"
        fill="url(#paint0_linear_408_139)"
      />
      <rect
        x={115}
        y={54}
        width={12}
        height={72}
        fill="url(#paint1_linear_408_139)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_408_139"
        x1={109}
        y1={116.5}
        x2={144.5}
        y2={160.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_408_139"
        x1={121}
        y1={54}
        x2={120.799}
        y2={106.875}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

const Svelte = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 308"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
      fill="#FF3E00"
    />
    <path
      d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
      fill="#FFF"
    />
  </svg>
)

type Language = {
  id: string
  label: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  code: string
  lang: BundledLanguage
  theme: string
}

const languages: Language[] = [
  {
    id: "nextjs",
    label: "Next.js",
    icon: Nextjs,
    code: 'import { LogoIcon } from \'@/components/logo\'\nimport { Button } from \'@/components/ui/button\'\nimport { Input } from \'@/components/ui/input\'\nimport { Label } from \'@/components/ui/label\'\nimport Link from \'next/link\'\n\nexport default function LoginPage() {\n    return (\n        <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">\n            <form\n                action=""\n                className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]">\n                <div className="p-8 pb-6">\n                    <div>\n                        <Link\n                            href="/"\n                            aria-label="go home">\n                            <LogoIcon />\n                        </Link>\n                        <h1 className="mb-1 mt-4 text-xl font-semibold">Sign In to Tailark</h1>\n                        <p className="text-sm">Welcome back! Sign in to continue</p>\n                    </div>\n\n                    <div className="mt-6 grid grid-cols-2 gap-3">\n                        <Button\n                            type="button"\n                            variant="outline">\n                            <svg\n                                xmlns="http://www.w3.org/2000/svg"\n                                width="0.98em"\n                                height="1em"\n                                viewBox="0 0 256 262">\n                                <path\n                                    fill="#4285f4"\n                                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>\n                                <path\n                                    fill="#34a853"\n                                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>\n                                <path\n                                    fill="#fbbc05"\n                                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path>\n                                <path\n                                    fill="#eb4335"\n                                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>\n                            </svg>\n                            <span>Google</span>\n                        </Button>\n                        <Button\n                            type="button"\n                            variant="outline">\n                            <svg\n                                xmlns="http://www.w3.org/2000/svg"\n                                width="1em"\n                                height="1em"\n                                viewBox="0 0 256 256">\n                                <path\n                                    fill="#f1511b"\n                                    d="M121.666 121.666H0V0h121.666z"></path>\n                                <path\n                                    fill="#80cc28"\n                                    d="M256 121.666H134.335V0H256z"></path>\n                                <path\n                                    fill="#00adef"\n                                    d="M121.663 256.002H0V134.336h121.663z"></path>\n                                <path\n                                    fill="#fbbc09"\n                                    d="M256 256.002H134.335V134.336H256z"></path>\n                            </svg>\n                            <span>Microsoft</span>\n                        </Button>\n                    </div>\n\n                    <hr className="my-4 border-dashed" />\n\n                    <div className="space-y-6">\n                        <div className="space-y-2">\n                            <Label\n                                htmlFor="email"\n                                className="block text-sm">\n                                Username\n                            </Label>\n                            <Input\n                                type="email"\n                                required\n                                name="email"\n                                id="email"\n                            />\n                        </div>\n\n                        <div className="space-y-0.5">\n                            <div className="flex items-center justify-between">\n                                <Label\n                                    htmlFor="pwd"\n                                    className="text-title text-sm">\n                                    Password\n                                </Label>\n                                <Button\n                                    render={<Link href="#" className="link intent-info variant-ghost text-sm">Forgot your Password ?</Link>}\n                                    nativeButton={false}\n                                    variant="link"\n                                    size="sm"\n                                />\n                            </div>\n                            <Input\n                                type="password"\n                                required\n                                name="pwd"\n                                id="pwd"\n                                className="input sz-md variant-mixed"\n                            />\n                        </div>\n\n                        <Button className="w-full">Sign In</Button>\n                    </div>\n                </div>\n\n                <div className="bg-muted rounded-(--radius) border p-3">\n                    <p className="text-accent-foreground text-center text-sm">\n                        Don\'t have an account ?\n                        <Button\n                            render={<Link href="#">Create account</Link>}\n                            nativeButton={false}\n                            variant="link"\n                            className="px-2"\n                        />\n                    </p>\n                </div>\n            </form>\n        </section>\n    )\n}\n',
    lang: "tsx",
    theme: "global",
  },
  {
    id: "svelte",
    label: "Svelte",
    icon: Svelte,
    code: `<script lang="ts">\n  import Button from "$lib/components/ui/button/button.svelte";\n  import Input from "$lib/components/ui/input/input.svelte";\n  import Label from "$lib/components/ui/label/label.svelte";\n</script>\n\n<section\n  class="bg-linear-to-b from-muted to-background flex min-h-screen px-4 py-16 md:py-32 [--color-primary:var(--color-indigo-500)]"\n>\n  <form action="" class="max-w-92 m-auto h-fit w-full">\n    <div class="p-6">\n      <div>\n        <a href="/mist" aria-label="go home">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="22"\n            height="22"\n            viewBox="0 0 24 24"\n            fill="none"\n            role="img"\n            color="currentColor"\n          >\n            <path\n              d="M22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18Z"\n              stroke="currentColor"\n              stroke-width="1.5"\n            ></path>\n            <path\n              d="M22 10C22 11.4001 22 12.1002 21.7275 12.635C21.4878 13.1054 21.1054 13.4878 20.635 13.7275C20.1002 14 19.4001 14 18 14C16.5999 14 15.8998 14 15.365 13.7275C14.8946 13.4878 14.5122 13.1054 14.2725 12.635C14 12.1002 14 11.4001 14 10C14 8.59987 14 7.8998 14.2725 7.36502C14.5122 6.89462 14.8946 6.51217 15.365 6.27248C15.8998 6 16.5999 6 18 6C19.4001 6 20.1002 6 20.635 6.27248C21.1054 6.51217 21.4878 6.89462 21.7275 7.36502C22 7.8998 22 8.59987 22 10Z"\n              stroke="currentColor"\n              stroke-width="1.5"\n            ></path>\n            <path\n              d="M14 18C14 19.4001 14 20.1002 13.7275 20.635C13.4878 21.1054 13.1054 21.4878 12.635 21.7275C12.1002 22 11.4001 22 10 22C8.59987 22 7.8998 22 7.36502 21.7275C6.89462 21.4878 6.51217 21.1054 6.27248 20.635C6 20.1002 6 19.4001 6 18C6 16.5999 6 15.8998 6.27248 15.365C6.51217 14.8946 6.89462 14.5122 7.36502 14.2725C7.8998 14 8.59987 14 10 14C11.4001 14 12.1002 14 12.635 14.2725C13.1054 14.5122 13.4878 14.8946 13.7275 15.365C14 15.8998 14 16.5999 14 18Z"\n              stroke="currentColor"\n              stroke-width="1.5"\n            ></path>\n            <path\n              opacity="0.4"\n              d="M10 6C10 7.40013 10 8.1002 9.72752 8.63497C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72751C2.89462 9.48783 2.51217 9.10538 2.27248 8.63497C2 8.10019 2 7.40013 2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6Z"\n              stroke="currentColor"\n              stroke-width="1.5"\n            ></path>\n          </svg>\n        </a>\n        <h1 class="mt-6 text-balance text-xl font-semibold">\n          <span class="text-muted-foreground">Welcome back to Tailark!</span> Sign\n          in to continue\n        </h1>\n      </div>\n\n      <div class="mt-6 space-y-2">\n        <Button type="button" variant="outline" size="default" class="w-full">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            class="size-4"\n            viewBox="0 0 256 262"\n          >\n            <path\n              fill="#4285f4"\n              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"\n            ></path>\n            <path\n              fill="#34a853"\n              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"\n            ></path>\n            <path\n              fill="#fbbc05"\n              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"\n            ></path>\n            <path\n              fill="#eb4335"\n              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"\n            ></path>\n          </svg>\n          <span>Google</span>\n        </Button>\n        <Button type="button" variant="outline" size="default" class="w-full">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            class="size-4"\n            viewBox="0 0 256 256"\n          >\n            <path\n              fill="#1877f2"\n              d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"\n            ></path>\n            <path\n              fill="#fff"\n              d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"\n            ></path>\n          </svg>\n          <span>Facebook</span>\n        </Button>\n        <Button type="button" variant="outline" size="default" class="w-full">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            class="size-4"\n            viewBox="0 0 256 256"\n          >\n            <path fill="#f1511b" d="M121.666 121.666H0V0h121.666z"></path>\n            <path fill="#80cc28" d="M256 121.666H134.335V0H256z"></path>\n            <path fill="#00adef" d="M121.663 256.002H0V134.336h121.663z"></path>\n            <path fill="#fbbc09" d="M256 256.002H134.335V134.336H256z"></path>\n          </svg>\n          <span>Microsoft</span>\n        </Button>\n      </div>\n\n      <hr class="mb-5 mt-6" />\n\n      <div class="space-y-6">\n        <div class="space-y-2">\n          <Label for="email" class="block text-sm">Email</Label>\n          <Input\n            type="email"\n            required\n            name="email"\n            id="email"\n            placeholder="Your email"\n            class=" border-transparent dark:border-input ring-1"\n          />\n        </div>\n\n        <Button class="w-full" variant="mdefault" size="default"\n          >Continue</Button\n        >\n      </div>\n    </div>\n\n    <div class="px-6">\n      <p class="text-muted-foreground text-sm">\n        Don't have an account ?\n        <Button href="/signup" variant="link" class="px-2">\n          Create account\n        </Button>\n      </p>\n    </div>\n  </form>\n</section>`,
    lang: "svelte",
    theme: "svelte",
  },
]

export default function CodeBlock() {
  const [activeCode, setActiveCode] = useState<string>(languages[0].id)
  const [indicatorWidth, setIndicatorWidth] = useState(0)
  const [indicatorLeft, setIndicatorLeft] = useState(0)

  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const handleTabClick = (code: string) => {
    setActiveCode(code)
  }

  useEffect(() => {
    const button = buttonRefs.current[activeCode]

    if (button) {
      setIndicatorWidth(button.offsetWidth)
      setIndicatorLeft(button.offsetLeft)
    }
  }, [activeCode])

  const activeLang = languages.find((l) => l.id === activeCode)

  return (
    <div className="relative">
      <div className="relative divide-dashed divide-border/50 rounded-2xl border border-border/75 bg-background mask-b-from-75% @3xl:grid @3xl:grid-cols-[1fr_auto] @3xl:divide-x">
        <div className="overflow-hidden rounded-l-2xl pr-px">
          <div className="h-10 px-1.5">
            <div className="relative h-full">
              <div
                data-theme={activeLang?.theme}
                className="absolute bottom-0 h-px translate-y-px rounded-full bg-primary transition-[width] duration-300 ease-in-out will-change-auto"
                style={{
                  width: `calc(${indicatorWidth}px - 16px)`,
                  left: `calc(${indicatorLeft}px + 8px)`,
                }}
              />
              <div className="relative flex h-full w-fit items-center py-1.5 *:h-full *:rounded-full *:px-2 *:transition-colors *:duration-200">
                {languages.map((lang) => (
                  <button
                    type="button"
                    key={lang.id}
                    ref={(el) => {
                      buttonRefs.current[lang.id] = el
                    }}
                    data-state={activeCode === lang.id && "active"}
                    onClick={() => handleTabClick(lang.id)}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:bg-foreground/5 data-[state=active]:text-foreground"
                  >
                    <lang.icon />
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-1 ml-1 rounded-l-lg border-y border-l bg-illustration @max-3xl:mr-1 @max-3xl:rounded-r-lg @max-3xl:border-r">
            <CodeBlockView
              code={activeLang?.code ?? ""}
              lang={activeLang?.lang ?? "tsx"}
              maxHeight={521}
              lineNumbers
              className="aspect-4/3 mask-y-from-95% mask-r-from-95% [&_pre]:min-h-[12rem] [&_pre]:border-none [&_pre]:bg-transparent! [&_pre]:pb-0 [&_pre]:pl-2"
            />
          </div>
        </div>
        <div className="relative w-80"></div>
      </div>
      <div
        data-theme={activeLang?.theme}
        className="h-fit h-full -translate-y-6 rounded-xl bg-card pb-4 shadow-xl ring-1 shadow-black/6.5 ring-border @3xl:absolute @3xl:top-0 @3xl:-right-2 @3xl:w-84 @3xl:translate-y-4 dark:shadow-black/50"
      >
        <div className="flex h-9 items-center gap-1.5 px-4">
          <div className="size-2 rounded-full border border-foreground/10 bg-foreground/5"></div>
          <div className="size-2 rounded-full border border-foreground/10 bg-foreground/5"></div>
          <div className="size-2 rounded-full border border-foreground/10 bg-foreground/5"></div>
        </div>
        <div>
          <LoginPage />
        </div>
      </div>
    </div>
  )
}
