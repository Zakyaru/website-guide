import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { FiClock, FiTag } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../components/ui/Button";
import type { VisitsType } from "../types/commun";

function scrollToContact() {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }

export default function VisitsDetail() {
  const { t } = useTranslation();
  const { duration_slug, title_slug } = useParams();

  const visitsList =
    (t("visits.visitsList", {
      returnObjects: true,
    }) as VisitsType[]) || [];

  const timeTour = visitsList.find(
    (item) => item.duration_slug === duration_slug,
  );
  if (!timeTour) return <div>Visite non trouvée (duration slug)</div>;

  const visitsDetail = timeTour?.visitCardList.find(
    (item) => item.title_slug === title_slug,
  );
  if (!visitsDetail) return <div>Visite non trouvée (title slug)</div>;

  const priceString = `${visitsDetail.price} €`;
  const paragraphs = visitsDetail.paragraphs;

  return (
    <section className="page-width container-main">
      <Link to={"/visits"}>
        <div className="flex gap-2 items-center">
          <FaArrowLeftLong className="text-muted text-base md:text-lg" />
          <span className="text-muted text-base md:text-lg hover:underline underline-offset-4">Retour vers Catalogue</span>
        </div>
      </Link>
      

      <div className="mt-4 mb-6 flex flex-col gap-4">
        <h2>{visitsDetail.title}</h2>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FiClock className="text-xl md:text-2xl" />
            <span className="text-xl md:text-2xl">{timeTour.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiTag className="text-xl md:text-2xl" />
            <span className="text-xl md:text-2xl">{priceString}</span>
          </div>
        </div>

        <div className="flex">
          <Button variant="primary" onClick={scrollToContact} className="px-6">
            {t("visits.btn_detail_action")}
          </Button>
        </div>
      </div>

      <figure className="overflow-hidden rounded-2xl aspect-4/3 sm:aspect-video">
        <img
          src={visitsDetail.image_url}
          alt={visitsDetail.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="mt-6 space-y-4 md:space-y-6">
        {paragraphs.map((item) => (
          <p key={item.id} className="leading-relaxed">
            {item.text}
          </p>
        ))}
      </div>
    </section>
  );
}
