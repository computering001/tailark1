import { Image } from "@/components/illustrations/image"

export default function HeroSection() {
  return (
    <section data-theme="light" className="bg-white py-24 md:pt-32 lg:pt-44">
      <div className="mx-auto mb-12 max-w-5xl px-6">
        <Image />
        <div className="relative mt-6 grid items-end gap-6 md:-mt-12 md:grid-cols-2">
          <h1 className="text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl tracking-tight">
            Building the roots for your Startup growth
          </h1>
          <p className="text-lg text-balance text-muted-foreground">
            Your team’s toolkit to stop configuring and start innovating.
            Securely build, deploy, and scale the best web experiences with
            Vercel.
          </p>
        </div>
      </div>
    </section>
  )
}
