import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const className = {
  P1: "text-[20px] leading-[30px] md:text-[24px] md:leading-[32px]",
  P2: "text-[20px] leading-[30px]",
  P3: "text-[16px] leading-[24px]",
  P4: "text-[14px] leading-[20px]",
};

const variantsFn = cva("font-outfit text-white", {
  variants: {
    variant: className,
  },
  defaultVariants: {
    variant: "P1",
  },
});

interface PProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof variantsFn> {}

export const P = forwardRef<HTMLParagraphElement, PProps>(
  ({ className, variant, ...props }, ref) => (
    <p
      ref={ref}
      {...props}
      className={cn(variantsFn({ variant, className }))}
    />
  )
);

P.displayName = "P";
