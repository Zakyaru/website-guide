import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx"

function App() {
  //ici qu'on fait le routing normalement
  return (
    <div className="container-main min-h-screen text-main bg-gray-100">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="flex flex-col gap-2 items-center justify-center ">
        <h2>
          Visites proposées
        </h2>
        <p>Et là maintenant j'écris un texte super long pour qu'il prenne tout l'écran et carrément plus parce que là je vois que c'est pas assez. Phrase finale pour arriver sur un saut de ligne et s'envoler dans l'espace avec une fusée arc-en-ciel qui vole vraiment haut dans les nuages et qui part dans l'espace un peu comme le fond défaut de ce site, mais ça ne restera pas longtemps comme ça. Oh non Mme Bovary ne l'acccepterai pas.</p>
      </div>
    </div>
    
  );
}

export default App;

