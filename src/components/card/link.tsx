import { IoMdArrowForward } from "react-icons/io";
import { cn } from "../../lib/utils";

type CardLinkProps = {
  href: string;
  text: string;
  className?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
};

export function CardLink({ href, text, className, target }: CardLinkProps) {
  return (
    <a href={href} target={target}>
      <div className="group/link flex gap-0.5 items-center w-fit">
        <span
          className={cn(
            "text-primary text-sm group-hover/link:underline",
            className
          )}
        >
          {text}
        </span>
        <IoMdArrowForward
          className={cn(
            "transition-all duration-500 w-4 h-4 text-primary group-hover/link:translate-x-2",
            className
          )}
        />
      </div>
    </a>
  );
}
