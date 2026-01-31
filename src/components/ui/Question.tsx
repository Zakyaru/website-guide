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
      className={`w-full px-4 py-4 rounded-lg flex flex-row gap-4 text-left ${
        isOpen ? "bg-light" : "bg-dark"
      }`}
      onClick={onClick}
    >
      <div className="mt-1">
        <svg
          className={`h-5 w-5 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
          viewBox="0 0 30.727 30.727"
          fill="currentColor"
        >
          <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z" />
        </svg>
      </div>

      <div className="pr-2">
        <div className="text-lg">{question}</div>
        {isOpen && <div className="mt-3 text-muted">{response}</div>}
      </div>
    </button>
  );
}
