import { ThemeSwitcher } from "../theme-switcher";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { LanguageSwitcher } from "../language-switcher";
import { Separator } from "../ui/separator";
import { Trans, useTranslation } from "react-i18next";

export function DesktopNavbar() {
  const { t } = useTranslation("navbar");

  return (
    <div className="justify-between hidden sm:flex sm:w-full text-foreground">
      <div className="h-full flex gap-4 items-center">
        <a href="/" className="relative group" aria-label="Go to the main page">
          <img
            loading="lazy"
            alt="colossus"
            src="/images/colossus-colored.svg"
            width={20}
            height={80}
          />
        </a>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <a href="/services" aria-label="Go to the services page">
                <NavigationMenuTrigger
                  className={`${navigationMenuTriggerStyle()} text-xl bg-transparent`}
                >
                  {t("services.title")}
                </NavigationMenuTrigger>
              </a>
              <NavigationMenuContent>
                <div className="flex gap-6 p-4">
                  <div className="w-72">
                    <img
                      alt="react-js"
                      loading="lazy"
                      className="transition-all duration-300 border border-input rounded-lg hover:bg-primary/10 hover:border-primary"
                      src="/images/reactjs.avif"
                      width={800}
                      height={1080}
                    />
                  </div>
                  <NavigationMenuLink
                    href="/services/web-development"
                    aria-label="Go to the web development service page"
                    className="group transition-all duration-300 flex flex-col gap-2 w-72 hover:bg-accent rounded-lg px-4 py-2 shadow-sm shadow-black/20"
                  >
                    <span className="transition-all duration-300 text-xl font-bold group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-teal-500 group-hover:bg-clip-text group-hover:text-transparent">
                      {t("services.web-development.title")}
                    </span>
                    <p className="indent-2 text-sm text-foreground/80">
                      <Trans
                        defaults={t("services.web-development.description")}
                        components={{ b: <b /> }}
                      />
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="/services/web-api"
                    aria-label="Go to the web API service page"
                    className="group transition-all duration-300 flex flex-col gap-2 w-72 hover:bg-accent rounded-lg px-4 py-2 shadow-sm shadow-black/20"
                  >
                    <span className="transition-all duration-300 text-xl font-bold group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-teal-500 group-hover:bg-clip-text group-hover:text-transparent">
                      {t("services.web-api.title")}
                    </span>
                    <p className="indent-2 text-sm text-foreground/80">
                      {t("services.web-api.description")}
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="/services/freelance"
                    aria-label="Go to the freelance service page"
                    className="group transition-all duration-300 flex flex-col gap-2 w-72 hover:bg-accent rounded-lg px-4 py-2 shadow-sm shadow-black/20"
                  >
                    <span className="transition-all duration-300 text-xl font-bold group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-teal-500 group-hover:bg-clip-text group-hover:text-transparent">
                      {t("services.freelance.title")}
                    </span>
                    <p className="indent-2 text-sm text-foreground/80">
                      {t("services.freelance.description")}
                    </p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact-us"
                className={`${navigationMenuTriggerStyle()} text-xl bg-transparent`}
              >
                {t("contact-us")}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="https://mayom.app"
                target="_blank"
                aria-label="Go to our FMS (Financial Management System) product page"
                className="transition-colors duration-300 text-xl font-bold text-emerald-500 p-2 bg-gradient-to-tr rounded-md hover:from-emerald-500 hover:to-cyan-500 hover:border hover:border-input hover:text-white"
              >
                MAYOM
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex gap-2 items-center">
        <LanguageSwitcher />
        <Separator orientation="vertical" className="max-h-12" />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
