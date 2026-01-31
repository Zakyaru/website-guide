import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Visits from "./pages/Visits";
import VisitDetails from "./pages/VisitDetails";
import Questions from "./pages/Questions";
import About from "./pages/About";
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/visits" element={<Visits />} />
          <Route path="/visits/:slug" element={<VisitDetails />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
