import { cn } from "../../lib/utils";

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-2 text-foreground", className)}
      {...props}
    >
      {children}
    </div>
  );
}
