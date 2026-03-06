import { useTranslation } from "react-i18next";
import type { VisitsType } from "../types/commun";
import { FiClock } from "react-icons/fi";
import VisitCarousel from "../components/ui/VisitCarousel";

export default function Visits() {
  const { t } = useTranslation();
  const visitsList =
    (t("visits.visitsList", { returnObjects: true }) as VisitsType[]) || [];

  return (
    <section className="page-width container-main">
      <h2 className="mb-4">{t("visits.title")}</h2>
      <p>{t("visits.description")}</p>

      {visitsList.map((timeTour) => (
        <div key={timeTour.id} className="mt-8 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FiClock className="text-2xl md:text-3xl" />
            <h2>{timeTour.duration}</h2>
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