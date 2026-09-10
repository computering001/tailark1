export const TranslationInterfaceIllustration = () => {
  return (
    <div aria-hidden className="max-w-xs min-w-xs">
      <div className="space-y-3">
        <div className="mask-y-from-35%">
          <p className="text-sm/6">
            Corporis voluptates voluptatem atque excepturi, tempore dolor
            distinctio libero dicta vel, nihil rem consequatur esse aspernatur
            nostrum, minus magnam labore quas optio?
          </p>
        </div>

        <div className="relative flex w-fit items-center gap-1">
          <span className="rounded bg-linear-to-r from-primary to-emerald-500 bg-clip-text text-sm text-transparent">
            Auto translated from English
          </span>
        </div>

        <div className="bg-illustration rounded-xl p-3 shadow-md ring-1 shadow-black/6.5 ring-primary/50">
          <div className="mb-3 text-xs text-muted-foreground">Spanish</div>

          <p className="text-sm/6 text-foreground">
            Hola, ¿cómo puedo ayudarte hoy? Estoy aquí para responder cualquier
            pregunta que tengas sobre nuestros servicios y productos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TranslationInterfaceIllustration
