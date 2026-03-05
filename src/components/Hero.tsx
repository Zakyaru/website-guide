import Button from "./ui/Button.tsx";
import { useTranslation } from "react-i18next";
import heroImage from "../assets/hero_image.webp";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-end">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Château de la Loire"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />

      {/* Gradient overlay — dark at the bottom for text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full page-width mx-auto pb-12 sm:pb-16">
        <h1 className="font-hero-2 text-5xl sm:text-6xl md:text-7xl text-white leading-tight">
          {t("home.hero.title")}
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-white/80">
          {t("home.hero.name")}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="primary" className="w-40">
            {t("home.hero.btn_contact")}
          </Button>
          <Button variant="secondary" className="bg-gray-300">
            {t("home.hero.btn_about")}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
