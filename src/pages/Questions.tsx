import { useState } from "react";
import { useTranslation } from "react-i18next";
import Question from "../components/ui/Question";

type QuestionList = { id: number; question: string; response: string };

export default function Questions() {
  const { t } = useTranslation();

  const questionList = t("questions.questionsList", {
    returnObjects: true,
  }) as QuestionList[];
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section>
      <div className="text-center">
        <h2>{t("questions.title")}</h2>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        {questionList.map((item) => (
          <Question
            question={item.question}
            response={item.response}
            isOpen={openIndex === item.id}
            onClick={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
