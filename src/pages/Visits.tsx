import { useEffect, useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import type { VisitsType } from "../types/commun";
import { FiClock } from "react-icons/fi";
import VisitCarousel from "../components/ui/VisitCarousel";

export default function Visits() {
  const { t } = useTranslation();
  const visitsList =
    (t("visits.visitsList", { returnObjects: true }) as VisitsType[]) || [];

  // Lu une seule fois au render : venons-nous du bouton "Retour" ?
  const restoreRef = useRef<boolean | null>(null);
  if (restoreRef.current === null) {
    restoreRef.current = sessionStorage.getItem("visitsRestore") === "1";
  }
  const restore = restoreRef.current;

  // Visite "fraîche" (menu, lien direct) : on efface l'état mémorisé -> tout à 0
  useLayoutEffect(() => {
    if (restore) return;
    sessionStorage.removeItem("visitsScroll");
    Object.keys(sessionStorage).forEach((key) => {
      if (key.startsWith("carousel:")) sessionStorage.removeItem(key);
    });
  }, [restore]);

  // Enregistre la position de scroll en continu (robuste au démontage / StrictMode)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        sessionStorage.setItem("visitsScroll", String(window.scrollY));
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="page-width container-main">
      <h2 className="mb-4">{t("visits.title")}</h2>
      <p>{t("visits.description")}</p>

      {visitsList.map((timeTour) => (
        <div key={timeTour.id} className="mt-8 flex flex-col gap-3">
          <div>
            <div className="flex items-center gap-2">
              <FiClock className="text-xl md:text-2xl" />
              <span className="text-xl md:text-2xl font-semibold">
                {timeTour.duration}
              </span>
            </div>
            {timeTour.description && (
              <div className="mt-2">
                {timeTour.description.map((item) => (
                  <p key={item.id}>{item.text}</p>
                ))}
              </div>
            )}
          </div>
          <VisitCarousel
            visits={timeTour.visitCardList}
            durationSlug={timeTour.duration_slug}
            restore={restore}
          />
          {timeTour.duration_slug === "dayTour" && (
            <div className="mt-2">
              {timeTour.specifications?.map((item) => (
                <p key={item.id} className="text-sm md:text-base italic">
                  {item.text}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}