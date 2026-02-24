import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FiTag } from "react-icons/fi";
import type { Visit } from "../../types/commun";

type Props = {
  visit: Visit;
};

export default function VisitCard({ visit }: Props) {
  const { t } = useTranslation();
  const { title, slug, image_url, price } = visit;
  const priceString = `${price} €`;

  return (
    <article className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden h-full flex flex-col">
      <img
        src={image_url}
        alt={title}
        loading="lazy"
        className="w-full h-50 sm:h-72 object-cover"
      />

      <div className="p-4 flex flex-col flex-1">
        <span className="text-lg sm:text-xl font-semibold">{title}</span>

        <div className="mt-1 mb-4 flex items-center gap-2">
          <FiTag className="text-base sm:text-lg" />
          <span className="text-base sm:text-lg">{priceString}</span>
        </div>

        <div className="mt-auto">
          <Link to={`/visits/${slug}`}>
            <Button variant="primary">{t("visits.btn_more")}</Button>
          </Link>
        </div>
        
      </div>
    </article>
  );
}
