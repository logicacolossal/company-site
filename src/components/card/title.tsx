import { cn } from "../../lib/utils";
import { HTMLAttributes } from "react";

type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;

export function CardTitle({ children, className, ...props }: CardTitleProps) {
  return (
    <h1
      className={cn(
        "text-3xl font-semibold font-quicksand text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
