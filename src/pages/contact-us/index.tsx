import { useTranslation } from "react-i18next";
import { Input } from "../../components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { PiBroomFill } from "react-icons/pi";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormSchemaProps } from "./form-schema";
import { cn } from "../../lib/utils";
import { toast } from "sonner";

export function ContactUsPage() {
  const { t } = useTranslation("contact-us");
  const { register, handleSubmit, formState, reset } =
    useForm<ContactFormSchemaProps>({
      resolver: zodResolver(contactFormSchema),
    });

  const sendEmail = async (data: ContactFormSchemaProps) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("company", data.company);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("access_key", "13832d4d-78a6-4833-bebe-054eac3fae72");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      reset();

      toast.success(t("message.submitted.title"), {
		classNames: {
			icon: "!text-emerald-300",
			toast: "!bg-emerald-500 !border !border-emerald-300",
			title: "!text-emerald-100",
			description: "!text-emerald-200"
		},
        position: "top-center",
        description: t("message.submitted.description"),
      });
    } catch (error) {
      console.error(
        `somethihng went wrong while trying to send the message: ${error}`,
      );

      toast.error(t("message.failed.title"), {
		classNames: {
			icon: "!text-destructive-foreground",
			toast: "!bg-destructive !border !border-destructive-foreground",
			title: "!text-destructive-foreground",
			description: "!text-destructive-foreground"
		},
        position: "top-center",
        description: t("message.failed.description"),
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 min-h-[calc(100vh-5rem)] bg-gradient-to-br from-foreground/15 to-30% to-background text-foreground p-4 sm:p-8">
      <h1 className="text-3xl font-bold bg-gradient-to-br from-sky-500 to-purple-500 text-center bg-clip-text text-transparent text-extrabold sm:text-5xl">
        {t("title")}
      </h1>
      <div className="w-full md:w-4/5 xl:w-3/5">
        <p className="text-justify tracking-wide indent-2 text-lg sm:text-xl">
          {t("description")}
        </p>
      </div>

      <form
        onSubmit={handleSubmit(sendEmail)}
        className="flex flex-col gap-10 w-full border border-input rounded-lg p-8 shadow-md shadow-black/5 sm:w-[35rem] lg:w-[60rem]"
      >
        <h2 className="text-xl font-bold bg-gradient-to-br from-sky-500 to-purple-500 text-center bg-clip-text text-transparent text-extrabold sm:text-3xl">
          {t("form.title")}
        </h2>
        <div className="flex flex-col gap-5 text-sm sm:text-base">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className={cn(formState.errors.name && "text-destructive")}
            >
              {t("form.name")} <span className="text-primary font-bold">*</span>
            </label>
            <Input placeholder={t("form.name")} {...register("name")} />
            {formState.errors.name && (
              <span className="text-sm text-destructive">
                {formState.errors.name.message &&
                  t(`common:${formState.errors.name.message}`)}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="company"
              className={cn(formState.errors.company && "text-destructive")}
            >
              {t("form.company")}{" "}
              <span className="text-primary font-bold">*</span>
            </label>
            <Input placeholder={t("form.company")} {...register("company")} />
            {formState.errors.company && (
              <span className="text-sm text-destructive">
                {formState.errors.company.message &&
                  t(`common:${formState.errors.company.message}`)}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className={cn(formState.errors.email && "text-destructive")}
            >
              {t("form.email")}{" "}
              <span className="text-primary font-bold">*</span>
            </label>
            <Input placeholder={t("form.email")} {...register("email")} />
            {formState.errors.email && (
              <span className="text-sm text-destructive">
                {formState.errors.email.message &&
                  t(`common:${formState.errors.email.message}`)}
              </span>
            )}
          </div>
          <div
            className={cn(
              "flex flex-col gap-2",
              formState.errors.message && "text-destructive",
            )}
          >
            <label htmlFor="message">
              {t("form.message")}{" "}
              <span className="text-primary font-bold">*</span>
            </label>
            <Textarea
              className="min-h-40"
              placeholder={t("form.message")}
              {...register("message")}
            />
            {formState.errors.message && (
              <span className="text-sm text-destructive">
                {formState.errors.message.message &&
                  t(`common:${formState.errors.message.message}`)}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <Button
            className="flex-1 text-lg font-bold h-full"
            size="sm"
            type="submit"
          >
            {t("form.submit")}
          </Button>
          <Button
            variant="outline"
            size="icon"
            type="reset"
            onClick={() => reset()}
          >
            <PiBroomFill size={20} />
          </Button>
        </div>
      </form>
    </div>
  );
}
