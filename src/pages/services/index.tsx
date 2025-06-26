import { Trans, useTranslation } from "react-i18next";
import { Card } from "../../components/card";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export function ServicesPage() {
  const { t } = useTranslation("services");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-10 min-h-[calc(100vh-5rem)] bg-gradient-to-br from-foreground/15 to-30% to-background text-foreground p-4 sm:p-8">
      <h1 className="text-3xl font-bold bg-gradient-to-br from-sky-500 to-purple-500 text-center bg-clip-text text-transparent text-extrabold sm:text-5xl">
        {t("title")}
      </h1>
      <div className="w-full md:w-4/5 xl:w-3/5">
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
      </div>
      <div className="w-full md:w-4/5 xl:w-3/5">
        <p className="text-justify tracking-wide indent-2 text-lg sm:text-xl">
          {t("services-intro")}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 w-full xl:grid-cols-2 md:w-4/5 xl:w-3/5">
        <Card>
          <Card.Content>
            <Card.Title>{t("web-development.title")}</Card.Title>
            <span className="text-justify tracking-wide indent-2">
              {t("web-development.description")}
            </span>
          </Card.Content>
          <Card.Link
            href="/services/web-development"
            text={t("common:see-more")}
          />
        </Card>
        <Card>
          <Card.Content>
            <Card.Title>{t("web-apis.title")}</Card.Title>
            <span className="text-justify tracking-wide indent-2">
              {t("web-apis.description")}
            </span>
          </Card.Content>
          <div />
          {/* <Card.Link href="/services/web-apis" text={t("common:see-more")} /> */}
        </Card>
        <Card>
          <Card.Content>
            <Card.Title>{t("mobile-app.title")}</Card.Title>
            <span className="text-justify tracking-wide indent-2">
              {t("mobile-app.description")}
            </span>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Title>{t("freelance.title")}</Card.Title>
            <span className="text-justify tracking-wide indent-2">
              {t("freelance.description")}
            </span>
          </Card.Content>
          <div />
          {/* <Card.Link href="/services/freelance" text={t("common:see-more")} /> */}
        </Card>
      </div>
      <div className="flex flex-col gap-10 items-center w-full md:w-4/5 xl:w-3/5">
        <h1 className="text-3xl font-bold bg-gradient-to-br from-sky-500 to-purple-500 bg-clip-text text-transparent text-center text-extrabold sm:text-5xl">
          {t("conclusion.title")}
        </h1>
        <p className="text-justify tracking-wide indent-2 text-lg sm:text-xl">
          <Trans
            defaults={t("conclusion.description")}
            components={{
              gradient: (
                <span className="bg-gradient-to-br font-bold from-sky-500 to-purple-500 bg-clip-text text-transparent text-extrabold" />
              ),
            }}
          />
        </p>
        <Button
          className="text-lg text-semibold"
          onClick={() => navigate("/contact-us")}
        >
          {t("contact-form")}
        </Button>
      </div>
    </div>
  );
}
