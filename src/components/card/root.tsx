import { cn } from "../../lib/utils";
import { HTMLAttributes } from "react";

type CardRootProps = HTMLAttributes<HTMLDivElement> & {};

export function CardRoot({ children, className, ...props }: CardRootProps) {
  return (
    <div
      className={cn(
        "group transition-all duration-300 flex flex-col gap-2 justify-between border border-input rounded-xl bg-background p-4 hover:border-primary shadow-md shadow-black/10 hover:shadow-lg hover:bg-primary/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
