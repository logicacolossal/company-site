import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="flex text-sm flex-col px-4 justify-between w-full pt-4 border-t border-input bg-gradient-to-br from-background from-70% to-primary/20 text-foreground">
      <div className="w-full grid gap-y-8 gap-x-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{t("contacts.title")}</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <TfiEmail className="w-4 h-4" />{" "}
              <a
                aria-label="Send an email to Logica Colossal"
                href="mailto:logicacolossallda@gmail.com"
                className="hover:underline"
              >
                logicacolossallda@gmail.com
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <FaInstagram className="w-4 h-4" />{" "}
              <a
                aria-label="Go to Logica Colossal Instagram account"
                href="mailto:logicacolossallda@gmail.com"
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
                href="mailto:logicacolossallda@gmail.com"
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
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Web Development</h1>
          <div className="flex flex-col gap-2">
            <span>Mobile Application Development</span>
            <span>Website</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Web APIs</h1>
          <div className="flex flex-col gap-2">
            <span>.NET Service</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Freelance</h1>
        </div>
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
