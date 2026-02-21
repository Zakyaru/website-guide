import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

type VisitsList = {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  price: number;
  duration: string;
  paragraphs: [];
};

type Paragraph = { id: number; text: string };

export default function VisitsDetail() {
  const { t } = useTranslation();
  const { slug } = useParams();

  const visitsList = t("visits.visitsList", {
    returnObjects: true,
  }) as VisitsList[];

  const visitsDetail = visitsList.find((item) => item.slug === slug);
  if (!visitsDetail) return <div>Visite non trouvée</div>;

  const paragraphs = visitsDetail.paragraphs as Paragraph[];

  return (
    <section>
      <h2>Page Visite Details</h2>
      <h3>{visitsDetail.title}</h3>
      <img
        src={visitsDetail.image_url}
        alt={visitsDetail.title}
        loading="lazy"
        style={{ width: "100%", maxHeight: 500, objectFit: "cover" }}
      />
      <div className="mt-10 space-y-6">
        {paragraphs.map((item) => (
        <p>{item.text}</p>
      ))}
      </div>   
    </section>
  );
}
