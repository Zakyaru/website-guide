
import Navbar from "./components/Navbar.tsx";
import Card from "./components/Card.tsx";
import Questions from "./components/Questions.tsx";
import Contact from "./components/Contact.tsx";
import Home from "./pages/Home.tsx";
import { useTranslation } from "react-i18next";

function App() {
  //ici qu'on fait le routing normalement

  const {t} = useTranslation();
  return (
    <div className="min-h-screen text-main bg-white">
      <Navbar></Navbar>

      <main className="page-width container-main">
        <Home></Home>
        <div className="flex justify-center">
          <h2>{t("visits.title")}</h2>
        </div>
        <div className="flex flex-wrap justify-center mt-10 gap-x-16 gap-y-8">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <Questions></Questions>
      
      </main>
      <Contact></Contact>
    </div>
  );
}

export default App;
