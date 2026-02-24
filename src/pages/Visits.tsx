import { useTranslation } from "react-i18next";
import type { VisitsType } from "../types/commun";
import { FiClock } from "react-icons/fi";
import VisitCarousel from "../components/ui/VisitCarousel";

export default function Visits() {
  const { t } = useTranslation();
  const visitsList =
    (t("visits.visitsList", { returnObjects: true }) as VisitsType[]) || [];

  return (
    <section>
      <h2 className="mb-2">{t("visits.title")}</h2>
      <p>{t("visits.description")}</p>

      {visitsList.map((timeTour) => (
        <div key={timeTour.id}>
          <div className="mt-8 mb-2 flex items-center gap-3">
            <FiClock className="text-3xl" />
            <h4>{timeTour.duration}</h4>
          </div>
          <VisitCarousel
            visits={timeTour.visitCardList}
            durationSlug={timeTour.duration_slug}
          />
        </div>
      ))}
    </section>
  );
}