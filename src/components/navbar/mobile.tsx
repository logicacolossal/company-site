import { LanguageSwitcher } from "../language-switcher";
import { ThemeSwitcher } from "../theme-switcher";
import { MobileNavigation } from "./mobile-navigation";

export function MobileNavbar() {
  return (
    <div className="flex w-full justify-between items-center sm:hidden">
      <div className="flex gap-4 items-center">
        <a href="/" className="relative group">
          {/* <span className="font-jet-brains-mono text-4xl font-thin text-primary">
            L
          </span> */}
          <img
            alt="colossus"
            src="/images/colossus-colored.svg"
            width={20}
            height={80}
          />
        </a>
        <MobileNavigation />
      </div>

      <div className="flex gap-4 items-center">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
