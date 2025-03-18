import { IoMdArrowForward } from "react-icons/io";

type CardLinkProps = { href: string; text: string };

export function CardLink({ href, text }: CardLinkProps) {
  return (
    <a href={href}>
      <div className="group/link flex gap-0.5 items-center w-fit">
        <span className="text-primary text-sm group-hover/link:underline">
          {text}
        </span>
        <IoMdArrowForward className="transition-all duration-500 w-4 h-4 text-primary group-hover/link:translate-x-2" />
      </div>
    </a>
  );
}
