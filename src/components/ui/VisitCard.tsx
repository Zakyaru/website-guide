import { Link } from "react-router-dom";
import Button from "./Button.tsx";

type VisitProps = {
    title: string;
    slug: string;
    image_url: string;
    price: number;
};

export default function VisitCard({title, slug, image_url, price}: VisitProps) {
    return (
    <div>
        <img
            src={image_url}
            alt={title}
            loading="lazy"
            style={{width: "100%", height: "200px", objectFit: "cover"}}
        />
        <div>
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
        <Link to={`/visits/${slug}`}>
            <Button variant="primary">En savoir plus</Button>
        </Link>
    </div>
    );
}