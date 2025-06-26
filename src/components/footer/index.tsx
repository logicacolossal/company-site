import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const { t } = useTranslation("footer");
  const navigate = useNavigate();

  return (
    <footer className="flex text-sm flex-col px-4 justify-between w-full pt-4 border-t border-input bg-gradient-to-br from-background from-70% to-primary/20 text-foreground">
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center flex-col gap-2">
          <h1 className="text-xl bg-gradient-to-br from-sky-500 to-purple-500 bg-clip-text text-transparent font-extrabold sm:text-2xl md:text-3xl lg:text-4xl">
            {t("title")}
          </h1>
          <Button className="w-fit" onClick={() => navigate("contact-us")}>
            {t("send-message")}
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{t("contacts.title")}</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <TfiEmail className="w-4 h-4" />{" "}
              <a
                aria-label="Send an email to Logica Colossal"
                href="mailto:support@logicacolossal.pt"
                className="hover:underline"
              >
                support@logicacolossal.pt
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <FaInstagram className="w-4 h-4" />{" "}
              <a
                aria-label="Go to Logica Colossal Instagram account"
                className="hover:underline"
                target="_blank"
              >
                Logica Colossal
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <FaLinkedin className="w-4 h-4" />{" "}
              <a
                aria-label="Go to Logica Colossal Linkedin account"
                className="hover:underline"
                target="_blank"
              >
                Logica Colossal
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <IoLogoGithub className="w-4 h-4" />{" "}
              <a
                aria-label="Go to Logica Colossal GitHub page"
                href="https://github.com/logicacolossal"
                className="hover:underline"
                target="_blank"
              >
                Logica Colossal
              </a>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{t("web-development")}</h1>
          <div className="flex flex-col gap-2">
            <span>{t("mobile-app-development")}</span>
            <span>{t("website")}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{t("web-apis")}</h1>
          <div className="flex flex-col gap-2">
            <span>{t("dotnet-services")}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{t("freelance")}</h1>
        </div> */}
      </div>
      <div className="flex flex-col gap-4 w-full items-center justify-evenly p-4 md:flex-row">
        <span className="text-sm">
          © 2024-{new Date(Date.now()).getFullYear()} {t("all-rights-reserved")}{" "}
          <a href="/" className="text-primary hover:underline">
            Lógica Colossal
          </a>
        </span>
        <span className="text-sm">{t("privacy-policy")}</span>
      </div>
    </footer>
  );
}
