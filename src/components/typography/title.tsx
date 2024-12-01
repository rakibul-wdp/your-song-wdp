import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const className = {
  H1: "text-[56px] leading-[67.2px] md:text-[80px] md:leading-[95px] lg:text-[104px] lg:leading-[123px] xl:text-[128px] xl:leading-[153.6px]",
  H2: "text-[48px] leading-[57.6px] md:text-6xl lg:text-7xl xl:text-[80px] xl:leading-[120px]",
  H3: "text-[40px] leading-[48px] md:text-5xl lg:text-[56px] lg:leading-[67.2px] xl:text-[64px] xl:leading-[76.8px]",
  H4: "text-[32px] leading-[44.8px] md:text-[40px] md:leading-[51.2px] lg:text-5xl xl:text-[56px] xl:leading-[64px]",
};

const variantsFn = cva("font-outfit font-bold text-white", {
  variants: {
    variant: className,
  },
  defaultVariants: {
    variant: "H1",
  },
});

interface TitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof variantsFn> {}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, variant = "H1", ...props }, ref) => {
    const allProps = {
      ref: ref,
      ...props,
      className: cn(variantsFn({ variant, className })),
    };

    switch (variant) {
      case "H1":
        return <h1 {...allProps} />;
      case "H2":
        return <h1 {...allProps} />;
      case "H3":
        return <h1 {...allProps} />;
      case "H4":
        return <h1 {...allProps} />;

      default:
        return <h1 {...allProps} />;
    }
  }
);

Title.displayName = "Title";
