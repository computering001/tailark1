"use client"
import CodeBlockView from "@/components/code-block"
import { useEffect, useMemo, useRef, useState } from "react"
import { LazyMotion, domMax, m } from "motion/react"
import type { BundledLanguage } from "shiki/bundle/web"
import type { SVGProps } from "react"
import { Gemini } from "@/components/ui/svgs/gemini"
import { Replit } from "@/components/ui/svgs/replit"
import { VSCodium } from "@/components/ui/svgs/vs-codium"
import { GooglePaLM } from "@/components/ui/svgs/google-palm"

type CodeBlockType = "gemini" | "replit" | "vs" | "palm"

const iconMap: {
  [key in CodeBlockType]: React.ComponentType<SVGProps<SVGSVGElement>>
} = {
  gemini: Gemini,
  replit: Replit,
  vs: VSCodium,
  palm: GooglePaLM,
}

const langMap: { [key in CodeBlockType]: BundledLanguage } = {
  gemini: "javascript",
  replit: "python",
  vs: "php",
  palm: "java",
}

const codes: { [key in CodeBlockType]: string } = {
  gemini: `const axios = require('axios');\n\nconst response = await axios.post('https://api.example.com/data', {\n  key: 'value',\n  anotherKey: 'anotherValue',\n});\n\nconsole.log(response.data);`,
  replit: `import requests\n\nresponse = requests.post('https://api.example.com/data', json={\n    'key': 'value',\n    'anotherKey': 'anotherValue',\n})\n\nprint(response.json())`,
  vs: `<?php\n\n$ch = curl_init();\n\ncurl_setopt($ch, CURLOPT_URL, 'https://api.example.com/data');\ncurl_setopt($ch, CURLOPT_POST, 1);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([\n    'key' => 'value',\n    'anotherKey' => 'anotherValue',\n]));\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($ch, CURLOPT_HTTPHEADER, [\n    'Content-Type: application/json',\n]);\n\n$response = curl_exec($ch);\ncurl_close($ch);\n\necho $response;\n`,
  palm: `import java.net.HttpURLConnection;\n\nURL url = new URL("https://api.example.com/data");\nHttpURLConnection conn = (HttpURLConnection) url.openConnection();\nconn.setRequestMethod("POST");\nconn.setRequestProperty("Content-Type", "application/json");\nconn.setDoOutput(true);\n\nString jsonInputString = "{\\"key\\": \\"value\\", \\"anotherKey\\": \\"anotherValue\\"}";\n\ntry (OutputStream os = conn.getOutputStream()) {\n    byte[] input = jsonInputString.getBytes("utf-8");\n    os.write(input, 0, input.length);\n}\n\nint code = conn.getResponseCode();\nSystem.out.println("Response Code: " + code);`,
}

export default function CodeBlock() {
  const [code, setCode] = useState<CodeBlockType>("gemini")
  const geminiRef = useRef<HTMLButtonElement>(null)
  const replitRef = useRef<HTMLButtonElement>(null)
  const vsRef = useRef<HTMLButtonElement>(null)
  const palmRef = useRef<HTMLButtonElement>(null)
  const [indicatorLeft, setIndicatorLeft] = useState(0)
  const [indicatorWidth, setIndicatorWidth] = useState(0)

  const codeBlockConfigs = useMemo(
    () => [
      {
        name: "Gemini",
        value: "gemini" as CodeBlockType,
        ref: geminiRef,
        lang: "javascript" as BundledLanguage,
      },
      {
        name: "Replit",
        value: "replit" as CodeBlockType,
        ref: replitRef,
        lang: "python" as BundledLanguage,
      },
      {
        name: "VSCodium",
        value: "vs" as CodeBlockType,
        ref: vsRef,
        lang: "php" as BundledLanguage,
      },
      {
        name: "Google PaLM",
        value: "palm" as CodeBlockType,
        ref: palmRef,
        lang: "java" as BundledLanguage,
      },
    ],
    []
  )

  useEffect(() => {
    const activeConfig = codeBlockConfigs.find(
      (config) => config.value === code
    )
    const activeRef = activeConfig ? activeConfig.ref : geminiRef

    if (activeRef.current) {
      const parentElement = activeRef.current.parentElement
      if (parentElement) {
        const parentLeft = parentElement.getBoundingClientRect().left
        const buttonLeft = activeRef.current.getBoundingClientRect().left
        const buttonWidth = activeRef.current.offsetWidth

        const newIndicatorLeft = buttonLeft - parentLeft + 16
        const newIndicatorWidth = buttonWidth
        setIndicatorLeft(newIndicatorLeft)
        setIndicatorWidth(newIndicatorWidth)
      }
    }
  }, [code, codeBlockConfigs])

  const currentLang = langMap[code]

  return (
    <LazyMotion features={domMax}>
    <div className="relative z-10 overflow-hidden rounded-2xl border border-transparent bg-illustration pt-6 shadow-lg ring-1 shadow-black/6.5 ring-border-illustration backdrop-blur">
      <div className="relative z-10 px-3">
        <div className="flex gap-1.5 px-3">
          <div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10"></div>
          <div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10"></div>
          <div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10"></div>
        </div>

        <div className="relative mt-4 flex gap-1">
          <m.span
            animate={{ x: indicatorLeft }}
            layout="size"
            style={{ width: indicatorWidth }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            className="absolute inset-y-0 -left-4 flex rounded-full border border-foreground/5 bg-foreground/5"
          />

          {codeBlockConfigs.map(({ name, value, ref }) => {
            const IconComponent = iconMap[value]
            return (
              <button
                type="button"
                key={name}
                ref={ref}
                onClick={() => setCode(value)}
                data-state={code === value ? "active" : ""}
                className="z-10 flex h-8 items-center gap-1 rounded-full px-3 text-sm transition-opacity duration-150 hover:opacity-50 data-[state=active]:text-foreground data-[state=active]:hover:opacity-100"
              >
                {IconComponent && <IconComponent className="m-auto size-4" />}
                <span className="font-medium text-nowrap">{name}</span>
              </button>
            )
          })}
        </div>
      </div>
      <div className="h-82">
        <CodeBlockView
          code={codes[code]}
          lang={currentLang}
          maxHeight={360}
          lineNumbers
          className="-mx-1 [&_pre]:h-80 [&_pre]:min-h-[12rem] [&_pre]:rounded-xl [&_pre]:border-none [&_pre]:bg-transparent! [&_pre]:mask-y-from-85%"
        />
      </div>
    </div>
  
    </LazyMotion>)
}
