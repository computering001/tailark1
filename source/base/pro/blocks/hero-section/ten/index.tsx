import HeroHeader from "@/components/header"
import { Product } from "@/components/illustrations/product"

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden bg-background">
        <section className="relative py-32 md:py-44 lg:py-52">
          <div className="relative z-30 mx-auto max-w-5xl px-6 text-center">
            <h1 className="mx-auto max-w-3xl text-4xl font-semibold text-balance sm:text-5xl tracking-tight">
              Write. Refine. Publish.
            </h1>

            <p className="mx-auto mt-3 mb-7 max-w-xl text-xl text-balance text-muted-foreground">
              Write poetry and stories with the world's first AI poetry muse.
            </p>

            <Product />
          </div>
        </section>
      </main>
    </>
  )
}
