import { useTranslation } from "react-i18next";
import VisitCard from "../components/ui/VisitCard";

type VisitsList = {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  price: number;
  duration: string;
  paragraphs: [];
};

export default function Visits() {
  const { t } = useTranslation();
  const visitsList = t("visits.visitsList", {
    returnObjects: true,
  }) as VisitsList[];

  return (
    <section>
      <h2>Page Visites</h2>
      <div>
        {visitsList.map((item) => (
          <VisitCard
            key={item.id}
            title={item.title}
            slug={item.slug}
            image_url={item.image_url}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
