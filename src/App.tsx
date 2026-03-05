import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Visits from "./pages/Visits";
import VisitsDetail from "./pages/VisitsDetail";
import Questions from "./pages/Questions";
import About from "./pages/About";
import NotFound from "./pages/NotFound"
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/visits" element={<Visits />} />
          <Route path="/visits/:duration_slug/:title_slug" element={<VisitsDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
