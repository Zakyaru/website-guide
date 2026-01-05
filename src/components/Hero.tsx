import Button from "./ui/Button.tsx";
import macha from "../assets/macha.jpg";

function Hero() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10 sm:gap-16">
        {/* Bloc image */}
        <div className="flex flex-col">
          <h1>Maria Kouzmina</h1>
          <h3 className="mt-2 text-muted">
            Guide touristique de la vallée de la Loire
          </h3>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" className="w-40">
              Contacter
            </Button>
            <Button variant="secondary">Qui suis-je ?</Button>
          </div>
        </div>

        {/* Bloc image */}
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
