"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { PiMoonStars, PiSun } from "react-icons/pi";
import { useTheme } from "../theme-provider";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <Button
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      variant="ghost"
      size="icon"
    >
      {theme === "light" && (
        <PiSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-foreground" />
      )}
      {theme === "dark" && (
        <PiMoonStars className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-foreground" />
      )}
    </Button>
  ) : (
    <></>
  );
}
