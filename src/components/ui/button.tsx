import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-lg",
    "transition-all duration-150 ease-bounce select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-button hover:brightness-110 active:translate-y-[2px] active:shadow-button-pressed [--button-shadow:var(--brand-800)] dark:[--button-shadow:var(--brand-700)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-button hover:brightness-95 dark:hover:brightness-110 active:translate-y-[2px] active:shadow-button-pressed [--button-shadow:var(--neutral-300)] dark:[--button-shadow:var(--neutral-700)]",
        success:
          "bg-correct text-white shadow-button hover:brightness-110 active:translate-y-[2px] active:shadow-button-pressed [--button-shadow:var(--brand-800)] dark:[--button-shadow:var(--brand-700)]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-button hover:brightness-110 active:translate-y-[2px] active:shadow-button-pressed [--button-shadow:var(--button-shadow-destructive)]",
        outline:
          "border-2 border-border bg-background text-foreground hover:bg-muted active:scale-[0.98]",
        ghost:
          "bg-transparent text-foreground hover:bg-muted active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, disabled, children, ...props },
    ref,
  ) => {
    const classes = cn(buttonVariants({ variant, size, className }));
    const isDisabled = disabled || loading;

    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={classes}
          aria-busy={loading || undefined}
          data-loading={loading || undefined}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        data-loading={loading || undefined}
        {...props}
      >
        {loading ? <Loader2 className="animate-spin" /> : null}
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
