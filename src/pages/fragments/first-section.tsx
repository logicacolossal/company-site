import { Card } from "../../components/card";
import { Trans, useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";

export function FirstSection() {
  const homeTranslations = useTranslation("home-page");
  const commonTranslations = useTranslation("common");

  const className = "text-justify tracking-wide indent-2";

  return (
    <div className="flex flex-col gap-10 items-center p-4 sm:p-8">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-foreground text-center sm:text-5xl">
          <Trans
            defaults={homeTranslations.t("first.title")}
            components={{
              gradient: (
                <span className="bg-gradient-to-br from-sky-500 to-purple-500 bg-clip-text text-transparent text-extrabold" />
              ),
            }}
          />
        </h1>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card className="hover:bg-emerald-500/10 hover:border-emerald-500">
          <div className="flex w-full items-center justify-center">
            <Card.Image
              className="group-hover:border-emerald-500 group-hover:bg-emerald-500/10"
              alt="graphs"
              src="/images/graphs.avif"
              height={1080}
              width={1920}
            />
          </div>
          <Card.Content>
            <Card.Title className="text-emerald-500">
              {homeTranslations.t("first.mayom.title")}
            </Card.Title>
            <p className={cn(className, "text-emerald-500")}>
              {homeTranslations.t("first.mayom.description")}
            </p>
          </Card.Content>
          <Card.Link
            className="text-emerald-500"
            href="https://mayom.app"
            target="_blank"
            text={commonTranslations.t("see-more")}
          />
        </Card>

        <Card>
          <div className="flex w-full items-center justify-center">
            <Card.Image
              alt="laptop-web-dev"
              src="/images/laptop-web-dev.avif"
              height={1080}
              width={1920}
            />
          </div>
          <Card.Content>
            <Card.Title>
              {homeTranslations.t("first.web-development.title")}
            </Card.Title>
            <p className={className}>
              {homeTranslations.t("first.web-development.description")}
            </p>
          </Card.Content>
          <Card.Link
            href="/services/web-development"
            text={commonTranslations.t("see-more")}
          />
        </Card>

        <Card>
          <div className="flex w-full items-center justify-center">
            <Card.Image
              alt="web-api-cloud"
              src="/images/web-api-cloud.avif"
              height={1080}
              width={1920}
            />
          </div>
          <Card.Content>
            <Card.Title>{homeTranslations.t("first.web-api.title")}</Card.Title>
            <p className={className}>
              {homeTranslations.t("first.web-api.description")}
            </p>
          </Card.Content>
          <div />
          {/* <Card.Link
            href="/services/web-api"
            text={commonTranslations.t("see-more")}
          /> */}
        </Card>
        <Card>
          <Card.Image
            alt="monitor"
            src="/images/monitor.avif"
            height={1080}
            width={1920}
          />
          <Card.Content>
            <Card.Title>
              {homeTranslations.t("first.freelance.title")}
            </Card.Title>
            <p className={className}>
              {homeTranslations.t("first.freelance.description")}
            </p>
          </Card.Content>
          <div />
          {/* <Card.Link
            href="/services/freelance"
            text={commonTranslations.t("see-more")}
          /> */}
        </Card>
      </div>
    </div>
  );
}
