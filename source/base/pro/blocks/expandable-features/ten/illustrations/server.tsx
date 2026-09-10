import { cn } from '@/lib/utils'

export const Server = ({ className, isActive }: { className?: string; isActive?: boolean }) => {
    return (
        <svg
            viewBox="0 0 592 675"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('relative h-auto w-52 transition-colors duration-300 [--color-layer-border:--alpha(var(--color-foreground)/50%)]', !isActive && 'opacity-30', className)}>
            <path
                d="M295.83 0C245.1 1.75e-06 204.28 23.57 122.63 70.71C40.98 117.85 0.15 141.42 0.15 170.71V504.04C0.15 533.33 40.98 556.9 122.63 604.04C204.28 651.18 245.1 674.75 295.83 674.75C346.56 674.75 387.39 651.18 469.04 604.04C550.69 556.9 591.51 533.33 591.51 504.04C591.51 392.93 591.51 281.82 591.51 170.71C591.51 141.42 550.69 117.85 469.04 70.71C387.39 23.57 346.56 -1.75e-06 295.83 0Z"
                fill="#474C59"
            />
            <path
                d="M591.46 350.71H0V504.04L0.15 504.04C0.15 533.33 40.98 556.9 122.63 604.04C204.28 651.18 245.1 674.75 295.83 674.75C346.56 674.75 387.39 651.18 469.04 604.04C550.69 556.9 591.51 533.33 591.51 504.04C591.51 503.43 591.5 502.81 591.46 502.2V350.71Z"
                fill="url(#paint0_linear_2002_218)"
                stroke="var(--color-layer-border)"
                strokeWidth={2}
            />
            <path
                d="M122.63 250.71C204.28 203.57 245.1 180 295.83 180C346.56 180 387.39 203.57 469.04 250.71C550.69 297.85 591.51 321.42 591.51 350.71C591.51 380 550.69 403.57 469.04 450.71C387.39 497.85 346.56 521.42 295.83 521.42C245.1 521.42 204.28 497.85 122.63 450.71C40.98 403.57 0.15 380 0.15 350.71C0.15 321.42 40.98 297.85 122.63 250.71Z"
                fill="var(--color-background)"
                stroke="var(--color-layer-border)"
                strokeWidth={2}
            />
            <path
                d="M142.44 485.04C142.44 484.49 142.83 484.27 143.31 484.54L161.78 495.21C162.26 495.49 162.65 496.16 162.65 496.71V601.38C162.65 601.93 162.26 602.15 161.78 601.88L143.31 591.21C142.83 590.93 142.44 590.26 142.44 589.71V485.04Z"
                fill="var(--color-primary)"
                stroke="var(--color-layer-border)"
                fillOpacity={isActive ? 1 : 0}
                className="transition-[fill-opacity] duration-200"
            />
            <path
                d="M109.11 467.54C109.11 466.99 109.5 466.77 109.97 467.04L128.45 477.71C128.93 477.99 129.32 478.66 129.32 479.21V583.88C129.32 584.43 128.93 584.65 128.45 584.38L109.97 573.71C109.5 573.43 109.11 572.76 109.11 572.21V467.54Z"
                fill="var(--color-primary)"
                stroke="var(--color-layer-border)"
                fillOpacity={isActive ? 1 : 0}
                className="transition-[fill-opacity] duration-200"
            />
            <path
                d="M75.78 448.38C75.78 447.82 76.16 447.6 76.64 447.88L95.12 458.54C95.6 458.82 95.98 459.49 95.98 460.04V564.71C95.98 565.26 95.6 565.49 95.12 565.21L76.64 554.54C76.16 554.27 75.78 553.6 75.78 553.04V448.38Z"
                fill="var(--color-primary)"
                stroke="var(--color-layer-border)"
                fillOpacity={isActive ? 1 : 0}
                className="transition-[fill-opacity] duration-200"
            />
            <path
                d="M42.44 426.71C42.44 426.16 42.83 425.93 43.31 426.21L61.78 436.88C62.26 437.15 62.65 437.82 62.65 438.38V543.04C62.65 543.6 62.26 543.82 61.78 543.54L43.31 532.88C42.83 532.6 42.44 531.93 42.44 531.38V426.71Z"
                fill="var(--color-primary)"
                stroke="var(--color-layer-border)"
                fillOpacity={isActive ? 1 : 0}
                className="transition-[fill-opacity] duration-200"
            />
            <path
                d="M591.46 170.71H4.58e-05V327.38H0.15C0.15 356.67 40.98 380.24 122.63 427.38C204.28 474.52 245.1 498.09 295.83 498.09C346.56 498.09 387.39 474.52 469.04 427.38C550.69 380.24 591.51 356.67 591.51 327.38C591.51 326.76 591.5 326.14 591.46 325.53V170.71Z"
                fill="url(#paint0_linear_2002_218)"
                stroke="var(--color-layer-border)"
                strokeWidth={2}
            />
            <path
                d="M122.63 70.71C204.28 23.57 245.1 1.75e-06 295.83 0C346.56 -1.75e-06 387.39 23.57 469.04 70.71C550.69 117.85 591.51 141.42 591.51 170.71C591.51 200 550.69 223.57 469.04 270.71C387.39 317.85 346.56 341.42 295.83 341.42C245.1 341.42 204.28 317.85 122.63 270.71C40.98 223.57 0.15 200 0.15 170.71C0.15 141.42 40.98 117.85 122.63 70.71Z"
                fill="var(--color-illustration)"
                stroke="var(--color-layer-border)"
                strokeWidth={2}
            />

            <path
                d="M278.51 289.04C288.08 283.52 303.59 283.52 313.15 289.04C322.72 294.57 322.72 303.52 313.15 309.04C303.59 314.57 288.08 314.57 278.51 309.04C268.95 303.52 268.95 294.57 278.51 289.04Z"
                fill="var(--color-border)"
                stroke="var(--color-illustration)"
                strokeWidth={12}
            />
            <path
                d="M45.33 160.71C54.89 155.19 70.4 155.19 79.97 160.71C89.54 166.23 89.54 175.19 79.97 180.71C70.4 186.23 54.89 186.23 45.33 180.71C35.76 175.19 35.76 166.23 45.33 160.71Z"
                fill="var(--color-border)"
                stroke="var(--color-illustration)"
                strokeWidth={12}
            />
            <path
                d="M520.33 160.71C529.89 155.19 545.4 155.19 554.97 160.71C564.54 166.23 564.54 175.19 554.97 180.71C545.4 186.23 529.89 186.23 520.33 180.71C510.76 175.19 510.76 166.23 520.33 160.71Z"
                fill="var(--color-border)"
                stroke="var(--color-illustration)"
                strokeWidth={12}
            />
            <path
                d="M278.51 24.04C288.08 18.52 303.59 18.52 313.15 24.04C322.72 29.57 322.72 38.52 313.15 44.04C303.59 49.57 288.08 49.57 278.51 44.04C268.95 38.52 268.95 29.57 278.51 24.04Z"
                fill="var(--color-border)"
                stroke="var(--color-illustration)"
                strokeWidth={12}
            />

            <defs>
                <pattern
                    id="paint0_linear_2002_218"
                    patternUnits="userSpaceOnUse"
                    width="10"
                    height="15"
                    patternTransform="rotate(0)">
                    <rect
                        width="10"
                        height="15"
                        fill="var(--color-background)"
                    />
                    <rect
                        x="5"
                        width="2"
                        height="15"
                        fill="var(--color-border)"
                    />
                </pattern>
            </defs>
        </svg>
    )
}
