import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import macha from "./assets/macha.jpg";

function App() {
  //ici qu'on fait le routing normalement
  return (
    <div className="min-h-screen text-main bg-white">
      <Navbar></Navbar>

      <main className="container-main">
        <Hero></Hero>
        <div className="flex flex-col gap-2 items-center justify-center ">
          <h2>Visites proposées</h2>
          <p>
            Et là maintenant j'écris un texte super long pour qu'il prenne tout
            l'écran et carrément plus parce que là je vois que c'est pas assez.
            Phrase finale pour arriver sur un saut de ligne et s'envoler dans
            l'espace avec une fusée arc-en-ciel qui vole vraiment haut dans les
            nuages et qui part dans l'espace un peu comme le fond défaut de ce
            site, mais ça ne restera pas longtemps comme ça. Oh non Mme Bovary
            ne l'acccepterai pas.
          </p>
        </div>
      </main>
      <div className="flex flex-col items-center gap-8">
        <div className="w-64 sm:w-76 aspect-square rounded-2xl overflow-hidden shadow-lg">
          <img
            src={macha}
            alt="Photo du guide"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-64 sm:w-76 aspect-square rounded-2xl overflow-hidden shadow-lg">
          <img
            src={macha}
            alt="Photo du guide"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
