import { P } from "@/components/typography";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface IPagination {
  id: number;
  label: string;
}

const pagination: IPagination[] = [
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
  { id: 4, label: "4" },
  { id: 5, label: "•••" },
  { id: 6, label: "15" },
  { id: 7, label: "16" },
];

export const Pagination: FC<{ isSmallDevice: boolean }> = ({
  isSmallDevice,
}) => {
  const smallDevicePagination = [
    ...pagination.slice(0, 3),
    { id: -1, label: "•••" },
    pagination[pagination.length - 1],
  ];

  const currentPagination = isSmallDevice ? smallDevicePagination : pagination;

  return (
    <div className="flex items-center justify-center gap-2">
      {currentPagination.map(({ id, label }) => (
        <div
          key={id}
          className={cn(
            "py-3 px-[17px] rounded-lg hover:bg-primary-coral delay-75 transition-all cursor-pointer",
            id === 2 && "bg-primary-coral"
          )}
        >
          <P variant="P3" className="leading-4">
            {label}
          </P>
        </div>
      ))}
    </div>
  );
};
