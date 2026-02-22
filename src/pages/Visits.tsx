import { useTranslation } from "react-i18next";
import VisitCard from "../components/ui/VisitCard";
import type {Visit} from "../types/commun";
import { FiClock } from "react-icons/fi";

export default function Visits() {
  const { t } = useTranslation();
  const visitsList = t("visits.visitsList", {returnObjects: true,}) as Visit[] || [];

  return (
    <section>
      <h2 className="mb-2">Catalogue des visites</h2>
      <p>Ici un texte explicatif du fonctionnement des visites</p>
      <div className="mt-8 mb-2 flex items-center gap-3">
        <FiClock className="text-3xl" />
        <h4>{t("visits.twoHour")}</h4>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visitsList.map((visit) => (
          <VisitCard key={visit.id} visit={visit}/>
        ))}
      </div>
      <div className="mt-8 mb-2 flex items-center gap-3">
        <FiClock className="text-3xl" />
        <h4>{t("visits.fourHour")}</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visitsList.map((visit) => (
          <VisitCard key={visit.id} visit={visit}/>
        ))}
      </div>
      <div className="mt-8 mb-2 flex items-center gap-3">
        <FiClock className="text-3xl" />
        <h4>{t("visits.day")}</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visitsList.map((visit) => (
          <VisitCard key={visit.id} visit={visit}/>
        ))}
      </div>
      <div className="mt-8 mb-2 flex items-center gap-3">
        <FiClock className="text-3xl" />
        <h4>{t("visits.special")}</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visitsList.map((visit) => (
          <VisitCard key={visit.id} visit={visit}/>
        ))}
      </div>
    </section>
  );
}
