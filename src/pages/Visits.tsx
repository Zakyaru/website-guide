import { useTranslation } from "react-i18next";
import VisitCard from "../components/ui/VisitCard";
import type { Visit } from "../types/commun";
import { FiClock } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";

export default function Visits() {
  const { t } = useTranslation();
  const visitsList =
    (t("visits.visitsList", { returnObjects: true }) as Visit[]) || [];

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
  });

  return (
    <section>
      <h2 className="mb-2">Catalogue des visites</h2>
      <p>Ici un texte explicatif du fonctionnement des visites</p>
      <div className="mt-8 mb-2 flex items-center gap-3">
        <FiClock className="text-3xl" />
        <h4>{t("visits.twoHour")}</h4>
      </div>

      {/* Wrapper Embla */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6">
          {visitsList.map((visit) => (
            <div
              key={visit.id}
              className="flex-none w-full sm:w-1/2 pl-6"
            >
              <VisitCard visit={visit} />
            </div>
          ))}
        </div>
      </div>


      
    </section>
  );
}
