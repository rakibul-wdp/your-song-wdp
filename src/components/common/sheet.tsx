"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

const Sheet = ({
  children,
  open,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onOpenChange,
}: {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (state: boolean) => void;
}) => {
  return open ? <div>{children}</div> : null;
};

const SheetTrigger = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return <button onClick={onClick}>{children}</button>;
};

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-[#141416] p-6 shadow-lg transition ease-in-out duration-300",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b animate-slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t animate-slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm animate-slide-in-from-left",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm animate-slide-in-from-right",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SheetContentProps extends VariantProps<typeof sheetVariants> {
  children: React.ReactNode;
  onClose: () => void;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const SheetContent = ({
  side = "right",
  className,
  children,
  onClose,
}: SheetContentProps) => (
  <div className={cn(sheetVariants({ side }), className)}>
    {children}
    <button
      onClick={onClose}
      className="absolute right-7 top-[26px] p-2 rounded-full opacity-70 hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary-charcoal"
    >
      <X className="h-6 w-6 text-white" />
      <span className="sr-only">Close</span>
    </button>
  </div>
);

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);

const SheetTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

export { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger };
