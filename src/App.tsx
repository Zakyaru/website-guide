import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import Card from "./components/Card.tsx";
import Question from "./components/Question.tsx";

function App() {
  //ici qu'on fait le routing normalement
  return (
    <div className="min-h-screen text-main bg-white">
      <Navbar></Navbar>

      <main className="container-main">
        <Hero></Hero>
        <div className="flex justify-center">
          <h2>Visites proposées</h2>
        </div>
        <div className="flex flex-wrap justify-center mt-10 gap-x-16 gap-y-8">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className="flex justify-center">
          <h2>Questions</h2>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Question></Question>
          <Question></Question>
          <Question></Question>
          <Question></Question>
          <Question></Question>
        </div>
      
      </main>
    </div>
  );
}

export default App;
