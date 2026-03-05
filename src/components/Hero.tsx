import heroImage from "../assets/hero_image.webp";
import { Link } from "react-router-dom";

function Hero() {
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
          Découvrez la vallée de la Loire avec Maria Kouzmina
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 tracking-wide">
          Visites conçues avec passion pour petits et grands
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {/* Bouton principal */}
          <Link to={"/visits"}>
            <button className="px-6 py-3 bg-blue-600 text-white text-sm font-medium tracking-wide uppercase rounded-sm hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
  Catalogue des visites
</button>
          </Link>

          {/* Bouton secondaire */}
          <Link to={"/about"}>
            <button className="px-6 py-3 border border-white/60 text-white text-sm font-medium tracking-wide uppercase rounded-sm hover:bg-white/10 hover:border-white transition-colors duration-200 cursor-pointer">
              Qui suis-je ?
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
