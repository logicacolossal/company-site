"use client";

import { useState } from "react";
import { DiMsqlServer } from "react-icons/di";
import { SiMongodb, SiMysql } from "react-icons/si";
import { cn } from "../../lib/utils";
import { useTranslation } from "react-i18next";

export function SecondSectionBackEndTechs() {
  const { t, i18n } = useTranslation("home-page");

  const defaultTech = { name: t("these"), color: "text-foreground" };
  const [tech, setTech] = useState(defaultTech);

  i18n.on("languageChanged", (lang) => {
    if (tech.name === defaultTech.name) {
      setTech({ name: t("these", { lng: lang }), color: "text-foreground" });
    }
  });

  return (
    <div className="grid sm:grid-cols-4 lg:grid-cols-12 w-full bg-gradient-to-r from-background from-30% to-foreground/10 shadow-lg shadow-black/10">
      <div className="col-span-4 border border-input p-4 flex items-center justify-start">
        <h1 className="text-3xl font-thin text-foreground">
          {t("second.used-techs-web-api")}
          <span
            className={cn("font-extrabold font-jet-brains-mono", tech.color)}
          >
            {tech.name}
          </span>
        </h1>
      </div>
      <div
        onMouseEnter={() =>
          setTech({
            name: ".NET",
            color:
              "bg-gradient-to-br from-pink-500 to-purple-500 text-transparent bg-clip-text font-extrabold",
          })
        }
        onMouseLeave={() => setTech(defaultTech)}
        className="group col-span-1 transition-all duration-300 flex min-h-32 border border-input justify-center items-center hover:bg-accent"
      >
        <a
          href="https://dotnet.microsoft.com/en-us/"
          target="_blank"
          aria-label="Link to Microsoft .NET website"
        >
          <span className="transition-all duration-300 font-jet-brains-mono text-4xl text-foreground font-bold group-hover:font-extrabold group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-purple-500 group-hover:text-transparent group-hover:bg-clip-text">
            .NET
          </span>
        </a>
      </div>
      <div
        onMouseEnter={() =>
          setTech({
            name: "MongoDB.",
            color: "text-emerald-500",
          })
        }
        onMouseLeave={() => setTech(defaultTech)}
        className="group col-span-1 transition-all duration-300 flex min-h-32 border border-input justify-center items-center hover:bg-accent"
      >
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          aria-label="Link to MongoDB website"
        >
          <SiMongodb className="transition-all duration-300 w-12 h-12 text-foreground group-hover:text-emerald-500" />
        </a>
      </div>
      <div
        onMouseEnter={() =>
          setTech({
            name: "SQL Server.",
            color: "text-red-500",
          })
        }
        onMouseLeave={() => setTech(defaultTech)}
        className="group col-span-1 transition-all duration-300 flex min-h-32 border border-input justify-center items-center hover:bg-accent"
      >
        <a
          href="https://www.microsoft.com/en-us/sql-server/"
          target="_blank"
          aria-label="Link to SQL Server website"
        >
          <DiMsqlServer className="transition-all duration-300 text-foreground w-14 h-14 group-hover:text-red-500" />
        </a>
      </div>
      <div
        onMouseEnter={() =>
          setTech({
            name: "MySQL.",
            color: "text-blue-600",
          })
        }
        onMouseLeave={() => setTech(defaultTech)}
        className="group col-span-1 transition-all duration-300 flex min-h-32 border border-input justify-center items-center hover:bg-accent"
      >
        <a
          href="https://www.mysql.com/"
          target="_blank"
          aria-label="Link to MySQL website"
        >
          <SiMysql className="transition-all duration-300 w-12 h-12 text-foreground group-hover:text-blue-600" />
        </a>
      </div>
    </div>
  );
}
