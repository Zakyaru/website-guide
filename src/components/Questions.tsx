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
      <div className="text-center">
        <h2>{t("questions.title")}</h2>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <Question
          question={t("questions.question2")}
          response={t("questions.response2")}
          isOpen={openIndex === 0}
          onClick={() => handleToggle(0)}
        />

        <Question
          question={t("questions.question3")}
          response={t("questions.response3")}
          isOpen={openIndex === 1}
          onClick={() => handleToggle(1)}
        />

        <Question
          question={t("questions.question4")}
          response={t("questions.response4")}
          isOpen={openIndex === 2}
          onClick={() => handleToggle(2)}
        />

        <Question
          question={t("questions.question5")}
          response={t("questions.response5")}
          isOpen={openIndex === 3}
          onClick={() => handleToggle(3)}
        />

        <Question
          question={t("questions.question6")}
          response={t("questions.response6")}
          isOpen={openIndex === 4}
          onClick={() => handleToggle(4)}
        />

        <Question
          question={t("questions.question7")}
          response={t("questions.response7")}
          isOpen={openIndex === 5}
          onClick={() => handleToggle(5)}
        />
      </div>
    </section>
  );
}
