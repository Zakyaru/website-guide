import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const current = i18n.resolvedLanguage || i18n.language; // plus fiable
  const setLang = (lang: "fr" | "ru") => i18n.changeLanguage(lang);

  const isFr = current?.startsWith("fr");
  const isRu = current?.startsWith("ru");

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      {/* Il faudra factoriser le max-w-4xl*/}
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Menus à gauche */}
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:underline">
            {t("nav.home")}
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            {t("nav.visits")}
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            {t("nav.faq")}
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            {t("nav.about")}
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            {t("nav.contact")}
          </a>
        </nav>

        {/* Switch de langue à droite */}
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-md border bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => setLang("fr")}
              className={[
                "px-3 h-9 text-sm font-medium transition",
                isFr ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
              ].join(" ")}
            >
              FR
            </button>

            <button
              type="button"
              onClick={() => setLang("ru")}
              className={[
                "px-3 h-9 text-sm font-medium transition border-l",
                isRu ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
              ].join(" ")}
            >
              RU
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
