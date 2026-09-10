"use client"
import React, { useRef } from "react"
import CodeBlockView from "@/components/code-block"
import { Braces } from "lucide-react"
import Image from "next/image"

const JSON_CODE = `{
    "users": [
        {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "age": 30,
            "cart": [
                {
                    "id": 1,
                    "name": "Product 1",
                    "price": 10
                },
                {
                    "id": 2,
                    "name": "Product 2",
                    "price": 20
                }
            ]
        },`

const JSON_CODE_2 = `        {
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "age": 25,
            "cart": [
                {
                    "id": 1,
                    "name": "Product 1",
                    "price": 10
                },
                {
                    "id": 2,
                    "name": "Product 2",
                    "price": 20
                }
            ]
        }
    ]
}`

export default function CodeBlock() {
  const firstCodeRef = useRef<HTMLDivElement>(null)
  const janeSmithCodeRef = useRef<HTMLDivElement>(null)

  const scrollToFirst = () => {
    firstCodeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })
  }

  const scrollToSecond = () => {
    janeSmithCodeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })
  }

  const avatars = [
    {
      src: "https://avatars.githubusercontent.com/u/47919550?v=4",
      alt: "Méschac Irung",
      onClick: scrollToFirst,
    },
    {
      src: "https://avatars.githubusercontent.com/u/31113941?v=4",
      alt: "Bernard Ngandu",
      onClick: scrollToSecond,
    },
  ]

  return (
    <div className="relative z-10 overflow-hidden rounded-2xl border border-transparent bg-card p-1 shadow-lg ring-1 shadow-black/6.5 ring-border backdrop-blur [--code-editor-background:var(--color-illustration)]">
      <div className="absolute top-0 right-1 z-10 flex h-9 w-fit translate-y-px items-center -space-x-2">
        {/* eslint-disable-next-line react-hooks/refs */}
        {avatars.map((avatar) => (
          <button
            type="button"
            key={avatar.alt}
            onClick={avatar.onClick}
            className="group my-auto flex size-8 rounded-xl transition-transform duration-200 active:scale-90"
          >
            <div className="m-auto size-5 rounded-full bg-background shadow shadow-zinc-950/5 transition-colors duration-200 *:rounded-full group-focus:ring-2 group-focus:ring-indigo-400">
              <Image
                src={avatar.src}
                className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover"
                alt={avatar.alt}
                width="52"
                height="52"
              />
            </div>
          </button>
        ))}
      </div>
      <div className="absolute right-1 left-0 grid h-9 grid-cols-[auto_1fr]">
        <div className="pl-6">
          <div className="flex h-full items-center gap-1.5 font-mono text-xs text-foreground/75">
            <Braces className="size-3 text-amber-600" />
            response.json
          </div>
        </div>
        <div className="grid h-full grid-cols-[auto_1fr_auto]">
          <div className="h-1/2 w-5 translate-px -translate-y-px bg-card">
            <div className="mt-px h-full rounded-tr-xl border-t border-r bg-(--code-editor-background)"></div>
          </div>
          <div className="h-full rounded-bl-xl border-b border-l bg-card"></div>
          <div className="h-full w-5 bg-card">
            <div className="h-1/2 translate-y-[200%] bg-card">
              <div className="-mt-px h-full rounded-tr-xl border-t border-r bg-(--code-editor-background)"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-96 rounded-xl border bg-(--code-editor-background) pt-9">
        <div className="h-full overflow-auto mask-y-from-80% scheme-dark">
          <div ref={firstCodeRef}>
            <CodeBlockView
              code={JSON_CODE}
              lang="json"
              maxHeight={360}
              lineNumbers
              className="-mx-1 [&_pre]:h-fit [&_pre]:min-h-[12rem] [&_pre]:rounded-xl [&_pre]:border-none [&_pre]:bg-transparent! [&_pre]:pb-0"
            />
          </div>
          <div ref={janeSmithCodeRef}>
            <CodeBlockView
              code={JSON_CODE_2}
              lang="json"
              maxHeight={360}
              lineNumbers
              className="-mx-1 [--counter-start:20] [&_pre]:h-fit [&_pre]:bg-transparent! [&_pre]:pt-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
