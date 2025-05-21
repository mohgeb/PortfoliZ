"use client"

import * as React from "react"
import type { TooltipProps } from "recharts"

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: Record<string, { label: string; color: string }>
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ config, className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
        <style jsx global>{`
          ${Object.entries(config)
            .map(
              ([key, value]) => `
            .recharts-tooltip-item-name.${key} {
              color: ${value.color};
            }
          `,
            )
            .join("\n")}
        `}</style>
      </div>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex flex-col">
              <span className={`text-[10px] font-bold ${entry.dataKey}`}>{`${entry.name}`}</span>
              <span className="text-[10px]">{`${entry.value}`}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 text-center text-[10px] text-muted-foreground">{label}</div>
      </div>
    )
  }

  return null
}

const ChartTooltipContent = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex flex-col">
              <span className={`text-[10px] font-bold ${entry.dataKey}`}>{entry.name}</span>
              <span className="text-[10px]">{entry.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 text-center text-[10px] text-muted-foreground">{label}</div>
      </div>
    )
  }

  return null
}

export { ChartContainer, ChartTooltip, ChartTooltipContent }
