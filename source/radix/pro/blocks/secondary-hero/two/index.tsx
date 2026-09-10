import { Image } from "@/components/illustrations/image"

export default function HeroSection() {
  return (
    <section data-theme="light">
      <div className="bg-white pt-44">
        <div className="mx-auto mb-12 max-w-5xl px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl font-semibold text-balance sm:text-7xl tracking-tight">
              Pioneering the Medical AI Future
            </h1>
            <p className="mt-6 ml-auto max-w-md text-lg text-balance text-muted-foreground">
              With Tailark's personal AI, get your projects to the finish line
              faster and with context.
            </p>
          </div>
        </div>
        <Image />
      </div>
    </section>
  )
}
