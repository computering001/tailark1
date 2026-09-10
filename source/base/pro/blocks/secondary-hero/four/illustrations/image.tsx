"use client"

import NextImage from "next/image"
import { useState, useEffect } from "react"

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
    <div className="relative aspect-63/30 overflow-hidden">
      <NextImage
        src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/3d_gsnqq2.webp"
        alt="building"
        width={3000}
        height={1401}
        className="size-full object-cover"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 top-0 left-0 z-0 size-40 mix-blend-overlay blur-2xl transition-none duration-200 md:size-72"
        style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
      >
        <div className="absolute inset-0 translate-x-[-150%] -translate-y-full rounded-full bg-linear-to-r from-indigo-400 via-emerald-400 to-rose-500" />
      </div>
    </div>
  )
}
