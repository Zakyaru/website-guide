import { useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";
import type { ImageType } from "../../types/commun";

type Props = {
  images: ImageType[];
  alt: string;
};

export default function ImageCarousel({ images, alt }: Props) {
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
          <div className="flex -ml-6 pb-1">
            {images.map((image) => (
              <div
                key={image.id}
                className="flex-none w-full sm:w-1/2 pl-6"
              >
                <figure className="overflow-hidden rounded-2xl h-full">
                  <img
                    src={image.image_url}
                    alt={alt}
                    loading="lazy"
                    className="w-full h-90 sm:h-110 object-cover object-center"
                  />
                </figure>
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
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? "bg-indigo-600" : "bg-gray-300"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}