import { useState } from "react";

export default function Question() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <button
      className={`flex flex-row gap-4 text-left rounded-lg px-4 py-4 w-full ${
        isOpen ? "bg-light" : "bg-dark"
      }`}
      onClick={handleClick}
    >
      <div className="mt-1">
        <svg
          className={`h-5 w-5 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 30.727 30.727"
          fill="currentColor"
        >
          <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z" />
        </svg>
      </div>
      <div className="">
        <div className="text-lg">
          Combien de jours il faut prévoir au total ?
        </div>
        {isOpen && (
          <div className="mt-3 text-muted">
            Pour faire vraiment le tour de la vallée de la Loire je recommande 2
            à 3 jours. Cela vous permettra vraiment de profiter pleinement de
            nos merveilleux châteaux et des plats locaux.
          </div>
        )}
      </div>
    </button>
  );
}
