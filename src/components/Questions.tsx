import { useState } from "react";
import { useTranslation } from "react-i18next";
import Question from "./ui/Question";

export default function Questions() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="w-full">
      <div className="flex justify-center">
        <h2>{t("questions.title")}</h2>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Question
          question={t("questions.question1")}
          response={t("questions.response1")}
          isOpen={openIndex === 0}
          onClick={() => handleToggle(0)}
        />

        <Question
          question={t("questions.question1")}
          response={t("questions.response1")}
          isOpen={openIndex === 1}
          onClick={() => handleToggle(1)}
        />

        <Question
          question={t("questions.question1")}
          response={t("questions.response1")}
          isOpen={openIndex === 2}
          onClick={() => handleToggle(2)}
        />
      </div>
    </section>
  );
}
