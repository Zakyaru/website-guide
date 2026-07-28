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
  const { title, title_slug, main_image_url, price } = visit;

  return (
    <article className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden h-full flex flex-col">
      <img
        src={main_image_url}
        alt={title}
        loading="lazy"
        className="w-full h-70 sm:h-85 object-cover"
      />

      <div className="px-4 pb-4 pt-2 flex flex-col flex-1">
        <span className={`${price ? 'mb-1' : 'mb-3'} text-base md:text-lg font-semibold`}>{title}</span>

        {price && (
          <div className="mb-3 flex items-center gap-2">
          <FiTag className="text-base md:text-lg" />
          <span className="text-base md:text-lg">{`${price} €`}</span>
        </div>
        )}
        <div className="mt-auto">
          <Link to={`/visits/${duration_slug}/${title_slug}`}>
            <Button variant="primary">{t("visits.btn_more")}</Button>
          </Link>
        </div>
        
      </div>
    </article>
  );
}
