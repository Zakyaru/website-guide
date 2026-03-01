import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { FiClock, FiTag } from "react-icons/fi";
import Button from "../components/ui/Button";
import type { VisitsType } from "../types/commun";

export default function VisitsDetail() {
  const { t } = useTranslation();
  const { duration_slug, title_slug } = useParams();

  const visitsList =
    (t("visits.visitsList", {
      returnObjects: true,
    }) as VisitsType[]) || [];

  const timeTour = visitsList.find((item) => item.duration_slug === duration_slug);
  if (!timeTour) return <div>Visite non trouvée (duration slug)</div>;
  
  const visitsDetail = timeTour?.visitCardList.find((item) => item.title_slug === title_slug);
  if (!visitsDetail) return <div>Visite non trouvée (title slug)</div>;

  const priceString = `${visitsDetail.price} €`;
  const paragraphs = visitsDetail.paragraphs;

  return (
    <section className="page-width container-main">
      <h2>{visitsDetail.title}</h2>

      <div className="mt-4 mb-4 flex flex-col gap-4">

        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <FiClock className="text-2xl" />
            <span className="text-2xl">{timeTour.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiTag className="text-xl" />
            <span className="text-xl">{priceString}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="primary">Réserver</Button>
          <Link to={"/visits"}>
            <Button variant="secondary">Retour</Button>
          </Link>
        </div>
        
      </div>

      <figure className="overflow-hidden rounded-2xl">
        <img
          src={visitsDetail.image_url}
          alt={visitsDetail.title}
          loading="lazy"
          className="w-full h-150 object-cover"
        />
      </figure>

      <div className="mt-10 space-y-6">
        {paragraphs.map((item) => (
          <p key={item.id} className="leading-relaxed">
            {item.text}
          </p>
        ))}
      </div>
    </section>
  );
}
