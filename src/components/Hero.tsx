import heroImage from "../assets/hero_image.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hero() {
  const {t} = useTranslation();
  
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full page-width mx-auto pb-12 sm:pb-16">
        <h1 className="text-white text-balance">
          {t("home.hero.title")}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/85 font-medium tracking-wide">
          {t("home.hero.subtitle")}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {/* Bouton principal */}
          <Link to={"/visits"}>
            <button className="px-6 py-3 bg-indigo-600 text-white text-sm font-medium tracking-wide uppercase rounded-sm hover:bg-indigo-700 transition-colors duration-200 cursor-pointer">
              {t("home.hero.btn_action1")}
            </button>
          </Link>

          {/* Bouton secondaire */}
          <Link to={"/about"}>
            <button className="px-6 py-3 border border-white/60 text-white text-sm font-medium tracking-wide uppercase rounded-sm hover:bg-white/10 hover:border-white transition-colors duration-200 cursor-pointer">
              {t("home.hero.btn_action2")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
