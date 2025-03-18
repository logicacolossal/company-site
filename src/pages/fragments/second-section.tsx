import { SecondSectionFrontEndTechs } from "./second-section-front-techs";
import { SecondSectionBackEndTechs } from "./second-section-back-techs";
import { Card } from "../../components/card";
import { Trans, useTranslation } from "react-i18next";

export function SecondSection() {
  const { t } = useTranslation("home-page");
  const frontEndItemsKeys = [0, 1, 2];
  const backEndItemsKeys = [0, 1, 2];

  return (
    <div className="w-full flex flex-col gap-10 items-center p-4 bg-gradient-to-tr from-background from-70% to-foreground/15 sm:px-8 sm:py-16 text-foreground">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-foreground text-center sm:text-5xl">
          <Trans
            defaults={t("second.title")}
            components={{
              gradient: (
                <span className="bg-gradient-to-br from-sky-500 to-purple-500 bg-clip-text text-transparent font-extrabold" />
              ),
            }}
          />
        </h1>
      </div>
      <div className="flex flex-col w-full justify-evenly gap-8 md:gap-16 md:flex-row items-center">
        <Card className="flex-1 h-full">
          <Card.Title>{t("second.front-end.title")}</Card.Title>
          <p>{t("second.front-end.description")}</p>
          <ul className="flex flex-col gap-4 list-disc py-2 px-4">
            {frontEndItemsKeys.map((key) => (
              <li
                className="transition-all duration-300 p-2 bg-accent rounded-lg group-hover:bg-primary/10"
                key={key}
              >
                <h2 className="text-xl font-semibold pb-2">
                  {t(`second.front-end.items.${key}.name`)}
                </h2>
                <span>{t(`second.front-end.items.${key}.description`)}</span>
              </li>
            ))}
          </ul>
          <p>{t("second.front-end.conclusion")}</p>
        </Card>
        <Card className="flex-1 h-full">
          <Card.Title>{t("second.back-end.title")}</Card.Title>
          <p>{t("second.back-end.description")}</p>
          <ul className="flex flex-col gap-4 list-disc py-2 px-4">
            {backEndItemsKeys.map((key) => (
              <li
                className="transition-all duration-300 p-2 bg-accent rounded-lg group-hover:bg-primary/10"
                key={key}
              >
                <h2 className="text-xl font-semibold pb-2">
                  {t(`second.back-end.items.${key}.name`)}
                </h2>
                <span>{t(`second.back-end.items.${key}.description`)}</span>
              </li>
            ))}
          </ul>
          <p>{t("second.back-end.conclusion")}</p>
        </Card>
      </div>
      <div className="w-full">
        <SecondSectionFrontEndTechs />
        <SecondSectionBackEndTechs />
      </div>
    </div>
  );
}
