"use client"

import { useState, useEffect } from "react"
import NextImage from "next/image"

export const Image = () => {
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])
  return (
    <div className="relative aspect-63/36 overflow-hidden 2xl:mx-auto 2xl:max-w-7xl">
      <NextImage
        src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/healthcare_ttc35b.jpg"
        alt="healthcare professionals"
        className="size-full object-cover"
        width={2000}
        height={1121}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 top-0 left-0 z-0 size-40 mix-blend-overlay blur-2xl md:size-72"
        style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
      >
        <div className="absolute inset-0 -translate-x-1/2 translate-y-[-200%] rounded-full bg-linear-to-r from-indigo-400 via-emerald-400 to-rose-500" />
      </div>
    </div>
  )
}
