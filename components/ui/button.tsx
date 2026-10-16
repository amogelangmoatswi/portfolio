import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { NoiseTexture } from "@/components/ui/noise-texture"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 border border-primary/20",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80",
        outline:
          "border border-white/10 bg-black/40 backdrop-blur-md text-white/90 shadow-sm hover:bg-black/60 hover:text-white hover:border-white/20",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 border border-white/5",
        ghost: "hover:bg-white/10 text-muted-foreground hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
        mine: "bg-black/60 backdrop-blur-md text-white/90 border border-white/10 shadow-sm hover:bg-black/80 hover:border-white/25 hover:text-white",
        mineghost: "bg-black/40 backdrop-blur-md text-white/80 border border-white/10 hover:bg-black/60 hover:border-white/20 hover:text-white"
      },
      size: {
        default: "h-9 px-4 py-2 text-sm",
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4 text-sm",
        lg: "h-11 px-6 text-base",
        icon: "h-9 w-9 p-0",
        icontext: "h-9 px-4 gap-2",
      },
    },
    defaultVariants: {
      variant: "mine",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <NoiseTexture
          className="opacity-20 dark:opacity-30 pointer-events-none"
          frequency={0.5}
          octaves={5}
          slope={0.18}
          noiseOpacity={0.6}
        />
        <span className="relative z-10 inline-flex items-center justify-center gap-1.5 w-full h-full">
          {children}
        </span>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
