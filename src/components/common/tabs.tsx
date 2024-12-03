import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TabsProps {
  children: ReactNode;
  className?: string;
}

const Tabs = ({ children, className }: TabsProps) => {
  return <div className={cn(className)}>{children}</div>;
};

interface TabListProps {
  children: ReactNode;
  className?: string;
}

const TabList = ({ children, className }: TabListProps) => {
  return <div className={cn("flex space-x-4", className)}>{children}</div>;
};

interface TabProps {
  children: ReactNode;
  isActive: boolean;
  className?: string;
  onClick: () => void;
}

const Tab = ({ children, isActive, className, onClick }: TabProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 text-sm font-medium",
        isActive
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300",
        "rounded-md",
        className
      )}
    >
      {children}
    </button>
  );
};

interface TabPanelProps {
  children: ReactNode;
  isActive: boolean;
  className?: string;
}

const TabPanel = ({ children, isActive, className }: TabPanelProps) => {
  return (
    <div className={cn(isActive ? "block" : "hidden", "p-4", className)}>
      {children}
    </div>
  );
};

export { Tab, TabList, TabPanel, Tabs };
