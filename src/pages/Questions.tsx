import { useRef, useState, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import Question from "../components/ui/Question";

type FaqItem = { id: number; question: string; response: string };

export default function Questions() {
  const { t } = useTranslation();

  // Récupère la liste FAQ depuis i18n (retourne un tableau d'objets)
  const faqItems = t("questions.questionsList", {
    returnObjects: true,
  }) as FaqItem[];

  // id de la question actuellement ouverte (ou null si aucune)
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  /**
   * Références DOM vers les boutons de chaque question.
   * Clef = id de l'item FAQ.
   * Le parent (cette page) enregistre les références afin de mesurer
   * la position avant / après toggle pour compenser le scroll.
   */
  const buttonRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  /**
   * Valeur mesurée 'top' (getBoundingClientRect().top) du bouton cliqué,
   * mesurée AVANT le changement d'état (open/close). Utilisée pour comparer
   * après rendu et compenser le scroll si nécessaire.
   */
  const prevButtonTopRef = useRef<number | null>(null);

  /**
   * Stocke l'id de la question sur laquelle on a cliqué juste avant le toggle.
   * Permet ensuite de retrouver la bonne référence dans useLayoutEffect.
   */
  const prevClickedQuestionIdRef = useRef<number | null>(null);

  /**
   * handleToggle — déclenché quand on clique une question.
   * 1) mesure la position actuelle du bouton cliqué et la stocke
   * 2) stocke l'id cliqué
   * 3) change openQuestionId (toggle)
   */
  function handleToggle(questionId: number) {
    const btn = buttonRefs.current[questionId];

    if (btn) {
      // mesurer la position du bouton AVANT le toggle
      prevButtonTopRef.current = btn.getBoundingClientRect().top;
      prevClickedQuestionIdRef.current = questionId;
    } else {
      prevButtonTopRef.current = null;
      prevClickedQuestionIdRef.current = null;
    }

    setOpenQuestionId((current) =>
      current === questionId ? null : questionId,
    );
  }

  /**
   * Après le DOM update (synchronisé avant peinture), on mesure la nouvelle position
   * du bouton cliqué et on compense le scroll par la différence (delta).
   *
   * Pourquoi useLayoutEffect ?
   * - on veut mesurer le DOM **après** le rendu mais **avant** que le navigateur
   *   n'affiche la frame finale (évite un flicker).
   */
  useLayoutEffect(() => {
    const clickedId = prevClickedQuestionIdRef.current;
    const prevTop = prevButtonTopRef.current;

    // si on n'a pas d'info précédente, rien à faire
    if (clickedId == null || prevTop == null) return;

    const btn = buttonRefs.current[clickedId];
    if (!btn) return;

    const newTop = btn.getBoundingClientRect().top;
    const delta = newTop - prevTop;

    // Si la position a bougé (delta !== 0), on compense le scroll de la page
    // pour donner l'impression que l'écran n'a pas bougé.
    if (delta !== 0) {
      // `behavior: "auto"` pour une compensation instantanée.
      // mettre "smooth" si tu veux une animation plus douce.
      window.scrollBy({ top: delta, left: 0, behavior: "auto" });
    }

    // Réinitialiser les valeurs stockées pour le prochain toggle.
    prevButtonTopRef.current = null;
    prevClickedQuestionIdRef.current = null;
  }, [openQuestionId]); // on déclenche après chaque changement d'état d'ouverture

  return (
    <section>
      <h2>{t("questions.title")}</h2>
      <p className="mt-4">{t("questions.paragraph")}</p>

      <div className="mt-8 flex flex-col gap-4">
        {faqItems.map((item) => (
          <Question
            key={item.id}
            question={item.question}
            response={item.response}
            isOpen={openQuestionId === item.id}
            onToggle={() => handleToggle(item.id)}
            registerButtonRef={(el) => {
              buttonRefs.current[item.id] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
}
