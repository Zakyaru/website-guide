import { FiChevronRight } from "react-icons/fi";

type QuestionProps = {
  question: string;
  response: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function Question({
  question,
  response,
  isOpen,
  onClick,
}: QuestionProps) {
  return (
    <button
      className={`px-4 py-4 rounded-lg flex items-start gap-4 text-left ${
        isOpen ? "bg-light" : "bg-dark"
      }`}
      onClick={onClick}
    >
      <div className="mt-0.5">
        <FiChevronRight
          className={`h-6 w-6 text-gray-800 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </div>

      <div className="pr-2">
        <div className="text-lg">{question}</div>
        {isOpen && <div className="mt-3 text-muted">{response}</div>}
      </div>
    </button>
  );
}
