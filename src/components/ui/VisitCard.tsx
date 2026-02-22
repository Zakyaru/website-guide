import { Link } from "react-router-dom";
import Button from "./Button";
import type { Visit } from "../../types/commun";

type Props = {
  visit: Visit;
};

export default function VisitCard({ visit }: Props) {
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
        <h3>{title}</h3>
        <p className="mb-4">{priceString}</p>
        <Link to={`/visits/${slug}`}>
          <Button variant="primary">En savoir plus</Button>
        </Link>
      </div>
    </article>
  );
}
