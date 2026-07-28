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
          />
          {timeTour.duration_slug === "dayTour" && (
                <div className="mt-2">
                  {timeTour.specifications?.map((item) => (
                    <p
                      key={item.id}
                      className="text-sm md:text-base italic"
                    >
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
