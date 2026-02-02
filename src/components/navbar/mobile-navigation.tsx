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
import { Link } from "react-router-dom";

export function MobileNavigation() {
  const { t } = useTranslation("navbar");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Open navigation options"
        >
          <IoListOutline className="w-4 h-4 text-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/services">{t("services.title")}</Link>
        </DropdownMenuItem>
        <Separator orientation="horizontal" />
        <DropdownMenuItem>
          <Link to="/contact-us">{t("contact-us")}</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
