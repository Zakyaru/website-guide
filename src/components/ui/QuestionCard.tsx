import { FiChevronRight } from "react-icons/fi";

type QuestionProps = {
  /** Texte de la question affichée */
  question: string;

  /** Contenu affiché lorsque la question est ouverte */
  response: string;

  /** Indique si la réponse est actuellement visible */
  isOpen: boolean;

  /** Appelé quand l'utilisateur clique sur la question */
  onToggle: () => void;

  /**
   * Permet au parent d'enregistrer une référence vers le bouton DOM.
   * Le parent s'en sert pour mesurer la position avant/après ouverture
   * afin de compenser le scroll et éviter que la page "saute".
   */
  registerButtonRef?: (element: HTMLButtonElement | null) => void;
};

export default function QuestionCard({
  question,
  response,
  isOpen,
  onToggle,
  registerButtonRef,
}: QuestionProps) {
  return (
    <button
      ref={registerButtonRef}
      type="button"
      onClick={onToggle}
      className={`px-4 py-4 rounded-lg flex items-start gap-4 text-left shadow-sm ${
        isOpen ? "bg-light" : "bg-dark"
      }`}
    >
      {/* Chevron qui pivote quand la réponse est ouverte */}
      <div className="mt-0.5">
        <FiChevronRight
          className={`h-6 w-6 text-gray-800 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </div>

      {/* Contenu textuel */}
      <div className="pr-2">
        {/* Question toujours visible */}
        <div className="text-lg">{question}</div>

        {/* Réponse affichée uniquement si ouverte */}
        {isOpen && (
          <div className="mt-3 text-muted">
            {response}
          </div>
        )}
      </div>
    </button>
  );
}
