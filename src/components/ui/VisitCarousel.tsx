import { useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";
import VisitCard from "./VisitCard";
import type { VisitCardType } from "../../types/commun";

type Props = {
  visits: VisitCardType[];
  durationSlug: string;
};

export default function VisitCarousel({ visits, durationSlug }: Props) {
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
    <>
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
            {visits.map((visit) => (
              <div
                key={visit.id}
                className="flex-none w-full sm:w-1/2 pl-6"
              >
                <VisitCard visit={visit} duration_slug={durationSlug} />
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
        {visits.map((visit, index) => (
          <button
            key={visit.id}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}