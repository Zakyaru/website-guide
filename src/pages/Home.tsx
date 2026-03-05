import Hero from "../components/Hero";
import { useTranslation } from "react-i18next";

type Paragraph = { id: number; text: string };

export default function Home() {
  const { t } = useTranslation();

  const paragraphs = t("home.paragraphs", {
    returnObjects: true,
  }) as Paragraph[];

  return (
    <>
      <Hero />
      <section className="page-width container-main">
        <h2>{t("home.title")}</h2>
        <div className="mt-4 space-y-4 md:space-y-6">
          {paragraphs.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>
      </section>
    </>
  );
}
