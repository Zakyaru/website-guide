import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FiTag } from "react-icons/fi";
import type { VisitCardType } from "../../types/commun";

type Props = {
  visit: VisitCardType;
  duration_slug: string;
};

export default function VisitCard({ visit, duration_slug }: Props) {
  const { t } = useTranslation();
  const { title, title_slug, image_url, price } = visit;
  const priceString = `${price} €`;

  return (
    <article className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden h-full flex flex-col">
      <img
        src={image_url}
        alt={title}
        loading="lazy"
        className="w-full h-60 sm:h-72 object-cover"
      />

      <div className="p-4 flex flex-col flex-1">
        <span className="text-base md:text-lg font-semibold">{title}</span>

        <div className="mt-1 mb-4 flex items-center gap-2">
          <FiTag className="text-base md:text-lg" />
          <span className="text-base md:text-lg">{priceString}</span>
        </div>

        <div className="mt-auto">
          <Link to={`/visits/${duration_slug}/${title_slug}`}>
            <Button variant="primary">{t("visits.btn_more")}</Button>
          </Link>
        </div>
        
      </div>
    </article>
  );
}
