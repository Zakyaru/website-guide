import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FiTag } from "react-icons/fi";
import type { Visit } from "../../types/commun";

type Props = {
  visit: Visit;
};

export default function VisitCard({ visit }: Props) {
    const {t} = useTranslation();
  const { title, slug, image_url, price } = visit;
  const priceString = `${price} €`;

  return (
    <article className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden">
      <img
        src={image_url}
        alt={title}
        loading="lazy"
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <span className="text-xl font-semibold">{title}</span>
        <div className="mt-1 mb-4 flex items-center gap-2">
            <FiTag className="text-lg"/>
            <span className="text-lg">{priceString}</span>
        </div>
        
        <Link to={`/visits/${slug}`}>
          <Button variant="primary">{t("visits.btn_more")}</Button>
        </Link>
      </div>
    </article>
  );
}
