import { useTranslation } from "react-i18next";
import VisitCard from "../components/ui/VisitCard";
import type {Visit} from "../types/commun";

export default function Visits() {
  const { t } = useTranslation();
  const visitsList = t("visits.visitsList", {returnObjects: true,}) as Visit[] || [];

  return (
    <section>
      <h2 className="mb-2">Catalogue des visites</h2>
      <p>Ici un texte explicatif du fonctionnement des visites</p>
      <h3 className="mt-8 mb-2">2 heures</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visitsList.map((visit) => (
          <VisitCard key={visit.id} visit={visit}/>
        ))}
      </div>
      <h3 className="mt-8 mb-2">4 heures</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visitsList.map((visit) => (
          <VisitCard key={visit.id} visit={visit}/>
        ))}
      </div>
      <h3 className="mt-8 mb-2">Journée complète (8-9 heures)</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visitsList.map((visit) => (
          <VisitCard key={visit.id} visit={visit}/>
        ))}
      </div>
      <h3 className="mt-8 mb-2">Pack spécial</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visitsList.map((visit) => (
          <VisitCard key={visit.id} visit={visit}/>
        ))}
      </div>
    </section>
  );
}
