"use client";

import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MdLanguage } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguageHandler = (lang: "en" | "pt-BR" | "pt-PT") => {
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MdLanguage className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex flex-row items-center gap-2"
          onClick={() => changeLanguageHandler("en")}
        >
          {i18n.language === "en" && (
            <IoCheckmark className="text-foreground" size={20} />
          )}
          <span className="font-quicksand">English</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex flex-row items-center gap-2"
          onClick={() => changeLanguageHandler("pt-BR")}
        >
          {i18n.language === "pt-BR" && (
            <IoCheckmark className="text-foreground" size={20} />
          )}
          <span className="font-quicksand">Português (Brasil)</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex flex-row items-center gap-2"
          onClick={() => changeLanguageHandler("pt-PT")}
        >
          {i18n.language === "pt-PT" && (
            <IoCheckmark className="text-foreground" size={20} />
          )}
          <span className="font-quicksand">Português (Portugal)</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
