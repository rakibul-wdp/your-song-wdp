import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary-coral text-sm leading-4 font-bold font-outfit text-white uppercase rounded-full hover:bg-[#C0463C] duration-100",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-white text-sm leading-4 font-bold font-outfit text-white uppercase rounded-full hover:bg-primary-coral duration-100",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-[#D9D9D980] rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "py-4 px-6",
        sm: "py-[3px] px-[7px] md:py-[7px] md:pl-[13px] md:pr-2",
        lg: "lg:pl-[23px] lg:pr-[20px] p-[6px] lg:py-4",
        exLg: "py-4 lg:py-6 px-[35px]",
        icon: "px-6 lg:px-[54px] py-2 lg:py-[18px]",
        filterSearch: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: React.ElementType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild: Component = "button", ...props },
    ref
  ) => {
    return (
      <Component
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
