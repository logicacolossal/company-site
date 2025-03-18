import { cn } from "../../lib/utils";

type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function CardImage({ alt, src, className, ...props }: CardImageProps) {
  return (
    <img
      alt={alt}
      src={src}
      className={cn(
        "transition-all duration-300 rounded-lg border border-input group-hover:border-primary bg-accent group-hover:bg-primary/10",
        className
      )}
      {...props}
    />
  );
}
