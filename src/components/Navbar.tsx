import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import flagFr from "../assets/flag-fr.svg";
import flagRu from "../assets/flag-ru.svg";

type Lang = "fr" | "ru";

function Navbar() {
  const { t, i18n } = useTranslation();

  const current = (i18n.resolvedLanguage || i18n.language || "fr") as string;
  const isRu = current?.startsWith("ru");

  const setLang = (lang: Lang) => i18n.changeLanguage(lang);

  // Dropdown langue
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Burger menu mobile
  const [mobileOpen, setMobileOpen] = useState(false);

  // Fermer le dropdown langue si clic en dehors
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const currentFlag = isRu ? flagRu : flagFr;

  return (
    <header className="sticky top-0 z-50 w-full bg-navbar border-b">
      <div className="page-width mx-auto px-6 h-16 flex items-center justify-between">
        {/* Gauche: burger (mobile) + menu (desktop) */}
        <div className="flex items-center gap-3">
          {/* Bouton burger - visible uniquement < md */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-md border bg-light hover:bg-dark transition"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="h-5 w-5 text-gray-800"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>

          {/* Menu desktop - visible uniquement >= md */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:underline">
              {t("nav.home")}
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              {t("nav.visits")}
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              {t("nav.questions")}
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              {t("nav.about")}
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              {t("nav.contact")}
            </a>
          </nav>
        </div>

        {/* Dropdown de langue à droite (drapeaux only) */}
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="h-9 px-2 inline-flex items-center gap-1 rounded-md border bg-light hover:bg-dark transition"
            aria-haspopup="menu"
            aria-expanded={open}
            aria-label="Change language"
          >
            <img
              src={currentFlag}
              alt=""
              className="h-5 w-5 rounded-sm"
              draggable={false}
            />

            {/* Flèche dropdown */}
            <svg
              className={`h-3 w-3 text-gray-800 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {open && (
            <div
              role="menu"
              className="absolute right-0 mt-2 w-14 rounded-md border bg-light shadow-sm p-1 flex flex-col gap-1"
            >
              <button
                type="button"
                onClick={() => {
                  setLang("fr");
                  setOpen(false);
                }}
                className="h-9 w-full inline-flex items-center justify-center rounded-md hover:bg-dark"
                aria-label="Français"
              >
                <img
                  src={flagFr}
                  alt=""
                  className="h-5 w-5 rounded-sm"
                  draggable={false}
                />
              </button>

              <button
                type="button"
                onClick={() => {
                  setLang("ru");
                  setOpen(false);
                }}
                className="h-9 w-full inline-flex items-center justify-center rounded-md hover:bg-dark"
                aria-label="Русский"
              >
                <img
                  src={flagRu}
                  alt=""
                  className="h-5 w-5 rounded-sm"
                  draggable={false}
                />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Menu mobile - visible uniquement < md */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-navbar">
          <nav className="page-width mx-auto px-6 py-3 flex flex-col gap-2">
            <a
              href="#"
              className="py-2 text-sm font-medium hover:underline"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.home")}
            </a>
            <a
              href="#"
              className="py-2 text-sm font-medium hover:underline"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.visits")}
            </a>
            <a
              href="#"
              className="py-2 text-sm font-medium hover:underline"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.questions")}
            </a>
            <a
              href="#"
              className="py-2 text-sm font-medium hover:underline"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.about")}
            </a>
            <a
              href="#"
              className="py-2 text-sm font-medium hover:underline"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.contact")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
