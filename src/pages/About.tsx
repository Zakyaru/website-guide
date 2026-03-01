import { useTranslation } from "react-i18next";
import macha_about_image from "../assets/macha_about.webp";
import type { ParagraphType } from "../types/commun";

export default function About() {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", {
    returnObjects: true,
  }) as ParagraphType[];

  return (
    <section>
      <h2>{t("about.title")}</h2>
      <div className="mt-4 flex flex-col-reverse sm:flex-row gap-8">
        <div className="w-full space-y-6 sm:w-7/12">
          {paragraphs.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>
        <div className="w-full shrink-0 sm:w-5/12">
          <img
            src={macha_about_image}
            alt="photo of macha"
            className="w-full h-auto rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
