"use client";

import { IoListOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { useTranslation } from "react-i18next";

export function MobileNavigation() {
  const { t } = useTranslation("navbar");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <IoListOutline className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>{t("services.title")}</DropdownMenuItem>
        <Separator orientation="horizontal" />
        <DropdownMenuItem>{t("contact-us")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
