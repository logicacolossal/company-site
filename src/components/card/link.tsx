import { IoMdArrowForward } from "react-icons/io";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

type CardLinkProps = {
  href: string;
  text: string;
  className?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
};

export function CardLink({ href, text, className, target }: CardLinkProps) {
  return (
    <Link
      to={href}
      target={target}
      aria-label="Click in this link to see more content related to the card's subject"
    >
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
    </Link>
  );
}
