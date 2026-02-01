import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../language-switcher";
import { ThemeSwitcher } from "../theme-switcher";
import { MobileNavigation } from "./mobile-navigation";

export function MobileNavbar() {
  return (
    <div className="flex w-full justify-between items-center sm:hidden">
      <div className="flex flex-row gap-4 items-center">
        <Link to="/" className="relative group">
          <img
            alt="colossus"
            src={import.meta.env.BASE_URL + "/images/colossus-colored.svg"}
            width={20}
            height={80}
          />
        </Link>
        <MobileNavigation />
        <a
          href="https://mayom.app/"
          target="_blank"
          aria-label="Go to MAYOM website"
          className="text-white bg-linear-to-tr from-emerald-500 to-cyan-500 rounded-lg px-1.5 py-2 font-semibold text-lg border border-input"
        >
          MAYOM
        </a>
      </div>

      <div className="flex gap-4 items-center">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
