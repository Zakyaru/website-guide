import heroImage from "../assets/hero_image.webp";

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

      {/* Gradient overlay — dark at the bottom for text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full page-width mx-auto pb-12 sm:pb-16">
        <h1 className="text-5xl md:text-6xl text-white leading-tight">
          Des visites guidées faites avec passion pour petits et grands
        </h1>
        <p className="mt-3 text-xl sm:text-2xl text-white/80">
          Avec Maria Kouzmina, guide conférencière certifiée
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {/* Bouton principal */}
          <button>Catalogue des visites</button>
          {/* Bouton secondaire */}
          <button>Qui suis-je ?</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
