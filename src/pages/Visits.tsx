import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import VisitCard from "../components/ui/VisitCard";
import type { Visit } from "../types/commun";
import { FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";

export default function Visits() {
  const { t } = useTranslation();
  const visitsList =
    (t("visits.visitsList", { returnObjects: true }) as Visit[]) || [];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
  if (!emblaApi) return;
  emblaApi.on("select", onSelect);
  emblaApi.on("reInit", onSelect);
  emblaApi.on("init", onSelect);
  return () => {
    emblaApi.off("select", onSelect);
    emblaApi.off("reInit", onSelect);
    emblaApi.off("init", onSelect);
  };
}, [emblaApi, onSelect]);

  return (
    <section>
      <h2 className="mb-2">Catalogue des visites</h2>
      <p>Ici un texte explicatif du fonctionnement des visites. Mais quand même assez long juste pour voir ce que ça fait sur 2 lignes</p>

      <div className="mt-8 mb-2 flex items-center gap-3">
        <FiClock className="text-3xl" />
        <h4>{t("visits.special")}</h4>
      </div>

      {/* Carousel + flèches desktop */}
      <div className="flex items-center gap-4">
        <button
          onClick={scrollPrev}
          className="hidden sm:flex p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex-none"
          aria-label="Précédent"
        >
          <FiChevronLeft className="text-xl" />
        </button>

        <div className="overflow-hidden flex-1" ref={emblaRef}>
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

        <button
          onClick={scrollNext}
          className="hidden sm:flex p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex-none"
          aria-label="Suivant"
        >
          <FiChevronRight className="text-xl" />
        </button>
      </div>

      {/* Dots — mobile uniquement */}
      <div className="flex justify-center gap-2 mt-4 sm:hidden">
        {visitsList.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}