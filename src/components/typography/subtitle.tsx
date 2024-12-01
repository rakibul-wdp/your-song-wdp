import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const className = {
  H4: "text-[32px] leading-[44.8px] md:text-4xl lg:text-[40px] lg:leading-[48px]",
  H5: "text-[32px] leading-[44.8px] md:text-4xl lg:text-[40px] lg:leading-[40px]",
  H6: "text-[32px] leading-[44.8px] lg:text-[32px] lg:leading-[40px]",
  H7: "text-[24px] leading-[32px]",
  H8: "text-[20px] leading-[24px]",
  H9: "text-[18px] leading-[24px]",
};

const variantsFn = cva("font-outfit font-bold text-white", {
  variants: {
    variant: className,
  },
  defaultVariants: {
    variant: "H4",
  },
});

interface SubTitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof variantsFn> {}

export const SubTitle = forwardRef<HTMLHeadingElement, SubTitleProps>(
  ({ className, variant = "H4", ...props }, ref) => {
    const allProps = {
      ref: ref,
      ...props,
      className: cn(variantsFn({ variant, className })),
    };
    switch (variant) {
      case "H4":
        return <h4 {...allProps} />;
      case "H5":
        return <h4 {...allProps} />;
      case "H6":
        return <h4 {...allProps} />;
      case "H7":
        return <h4 {...allProps} />;
      case "H8":
        return <h4 {...allProps} />;
      case "H9":
        return <h4 {...allProps} />;

      default:
        return <h4 {...allProps} />;
    }
  }
);

SubTitle.displayName = "SubTitle";
