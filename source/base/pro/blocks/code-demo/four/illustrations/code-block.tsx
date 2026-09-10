"use client"
import React, { useEffect, useRef, useState } from "react"
import CodeBlockView from "@/components/code-block"
import { Braces, type LucideIcon } from "lucide-react"

const USERS_JSON = `{
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
        },
        {
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

const RESPONSE_JSON = `{
    "status": "success",
    "code": 200,
    "data": {
        "products": [
            {
                "id": "p-123",
                "name": "Premium Headphones",
                "price": 149.99,
                "stock": 45,
                "categories": ["electronics", "audio"]
            },
            {
                "id": "p-456",
                "name": "Wireless Keyboard",
                "price": 89.99,
                "stock": 23,
                "categories": ["electronics", "accessories"]
            },
            {
                "id": "p-789",
                "name": "Smart Watch",
                "price": 199.99,
                "stock": 12,
                "categories": ["electronics", "wearables"]
            }
        ],
        "pagination": {
            "total": 3,
            "page": 1,
            "limit": 10
        }
    }
}`

interface Tab {
  id: string
  label: string
  icon: LucideIcon
  code: string
}

const tabs: Tab[] = [
  {
    id: "users",
    label: "users.json",
    icon: Braces,
    code: USERS_JSON,
  },
  {
    id: "response",
    label: "response.json",
    icon: Braces,
    code: RESPONSE_JSON,
  },
]

export default function CodeBlock() {
  const [indicatorLeft, setIndicatorLeft] = useState(0)
  const [indicatorWidth, setIndicatorWidth] = useState(0)
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  useEffect(() => {
    const activeTabRef = tabRefs.current[activeTab]
    if (activeTabRef) {
      const parentElement = activeTabRef.parentElement
      if (parentElement) {
        const parentLeft = parentElement.getBoundingClientRect().left
        const buttonLeft = activeTabRef.getBoundingClientRect().left
        const buttonWidth = activeTabRef.offsetWidth

        const newIndicatorLeft = buttonLeft - parentLeft + 16
        const newIndicatorWidth = buttonWidth
        setIndicatorLeft(newIndicatorLeft)
        setIndicatorWidth(newIndicatorWidth)
      }
    }
  }, [activeTab])

  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  return (
    <div className="relative z-10 overflow-hidden rounded-2xl border border-transparent bg-card px-1 pb-1 shadow-lg ring-1 shadow-black/6.5 ring-border-illustration backdrop-blur [--code-editor-background:var(--color-illustration)]">
      <div className="relative h-10">
        <div className="flex h-full items-center gap-1">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el
              }}
              onClick={() => setActiveTab(tab.id)}
              data-tab={tab.id}
              data-state={activeTab === tab.id ? "active" : ""}
              className="relative z-10 flex h-8 items-center gap-1.5 rounded-lg px-3 font-mono text-xs text-foreground/75 outline-none first:rounded-tl-xl not-data-[state=active]:hover:bg-foreground/5 not-data-[state=active]:focus-visible:bg-foreground/5"
            >
              <tab.icon className="size-3 text-amber-600" />
              {tab.label}
            </button>
          ))}
        </div>
        <div
          className="absolute top-1 -bottom-px -translate-x-4 rounded-t-xl border-x border-t bg-(--code-editor-background)"
          style={{ left: indicatorLeft, width: `${indicatorWidth}px` }}
        >
          {activeTab === tabs[0].id ? (
            <div className="absolute -bottom-4 -left-px size-4 border-l bg-(--code-editor-background)"></div>
          ) : (
            <div className="absolute bottom-0 -left-4 size-4 bg-(--code-editor-background)">
              <div className="absolute inset-0 rounded-br-xl border-r border-b bg-card"></div>
            </div>
          )}

          <div className="absolute -right-4 bottom-0 size-4 bg-(--code-editor-background)">
            <div className="absolute inset-0 rounded-bl-xl border-b border-l bg-card"></div>
          </div>
        </div>
      </div>

      <div className="h-96 rounded-xl border bg-(--code-editor-background)">
        <div className="h-full overflow-auto mask-y-from-80% scheme-dark">
          <CodeBlockView
            code={activeTabData?.code ?? ""}
            lang="json"
            maxHeight={360}
            lineNumbers
            className="-mx-1 [&_pre]:h-fit [&_pre]:min-h-[12rem] [&_pre]:rounded-xl [&_pre]:border-none [&_pre]:bg-transparent! [&_pre]:pb-0"
          />
        </div>
      </div>
    </div>
  )
}
