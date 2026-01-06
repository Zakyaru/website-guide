import Button from "./ui/Button.tsx";
import macha from "../assets/macha.jpg";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10 sm:gap-16">
        {/*Hero text*/}
        <div className="flex flex-col">
          <h1>{t("hero.name")}</h1>
          <h3 className="mt-2 text-muted">{t("hero.subtitle")}</h3>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" className="w-40">
              {t("hero.btn_contact")}
            </Button>
            <Button variant="secondary">{t("hero.btn_about")}</Button>
          </div>
        </div>
        {/*Hero image*/}
        <div className="flex sm:justify-end justify-center">
          <div className="w-64 sm:w-76 aspect-square rounded-2xl overflow-hidden shadow-lg">
            <img
              src={macha}
              alt="Photo du guide"
              className="w-full h-full object-cover object-[50%_85%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
