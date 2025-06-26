import { Trans, useTranslation } from "react-i18next";

export function WebDevelopmentPage() {
  const { t } = useTranslation("web-development");

  return (
    <div className="flex flex-col items-center gap-10 min-h-[calc(100vh-5rem)] bg-gradient-to-br from-foreground/15 to-30% to-background text-foreground p-4 sm:p-8">
      <h1 className="text-3xl font-bold bg-gradient-to-br from-sky-500 to-purple-500 text-center bg-clip-text text-transparent text-extrabold sm:text-5xl">
        {t("title")}
      </h1>
      <div className="flex flex-col gap-4 w-full md:w-4/5 xl:w-3/5">
        <p className="text-justify tracking-wide indent-2 text-lg sm:text-xl">
          <Trans
            defaults={t("description")}
            components={{
              gradient: (
                <span className="bg-gradient-to-br font-bold from-sky-500 to-purple-500 bg-clip-text text-transparent text-extrabold" />
              ),
            }}
          />
        </p>

        <div className="px-2 flex flex-col gap-4 text-justify tracking-wide indent-2 text-lg sm:text-xl">
          <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            {t("what-we-deliver.title")}
          </span>
          <ul className="flex flex-col gap-2 list-disc">
            <li>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
                {t("what-we-deliver.custom-web-apps.title")}
              </p>
              <p>{t("what-we-deliver.custom-web-apps.description")}</p>
            </li>
            <li>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
                {t("what-we-deliver.responsive.title")}
              </p>
              <p>{t("what-we-deliver.responsive.description")}</p>
            </li>
            <li>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
                {t("what-we-deliver.user-centric.title")}
              </p>
              <p>{t("what-we-deliver.user-centric.description")}</p>
            </li>
            <li>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
                {t("what-we-deliver.security-performance.title")}
              </p>
              <p>{t("what-we-deliver.security-performance.description")}</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <p className="text-4xl font-bold bg-gradient-to-br from-sky-500 to-purple-500 text-center bg-clip-text text-transparent text-extrabold sm:text-5xl">
            {t("conclusion.title")}
          </p>
          <p className="text-justify tracking-wide indent-2 text-lg sm:text-xl">
            {t("conclusion.description")}
          </p>
        </div>
      </div>
    </div>
  );
}
