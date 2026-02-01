import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

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

  // Burger menu mobile (drawer)
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

  // Bloquer le scroll du body quand le drawer est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Fermer avec la touche ESC
  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  function scrollToContact() {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
    setMobileOpen(false);
  }

  const currentFlag = isRu ? flagRu : flagFr;

  const linkBase = "link";
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${isActive ? "underline text-primary" : ""}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-navbar border-b border-gray-300">
      <div className="page-width mx-auto h-16 flex items-center justify-between">
        {/* Gauche: burger (mobile) + menu (desktop) */}
        <div className="flex items-center gap-3">
          {/* Bouton burger - visible uniquement < md */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-md border border-gray-400 bg-light hover:bg-dark transition"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
          >
            {mobileOpen ? (
              <FiX className="h-5 w-5 text-gray-800" />
            ) : (
              <FiMenu className="h-5 w-5 text-gray-800" />
            )}
          </button>

          {/* Menu desktop - visible uniquement >= md */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={navLinkClass} end>
              {t("nav.home")}
            </NavLink>

            <NavLink to="/visits" className={navLinkClass}>
              {t("nav.visits")}
            </NavLink>

            <NavLink to="/questions" className={navLinkClass}>
              {t("nav.questions")}
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              {t("nav.about")}
            </NavLink>
          </nav>
        </div>

        {/* Droite : Contact + Lang */}
        <div className="flex flex-row gap-4">
          <button
            type="button"
            onClick={scrollToContact}
            className="btn btn-secondary text-sm"
          >
            {t("nav.contact")}
          </button>

          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="h-9 px-2 inline-flex items-center gap-1 rounded-md border border-gray-400 bg-light hover:bg-dark transition"
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

              <FiChevronDown
                className={`h-4 w-4 text-gray-800 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-14 rounded-md border border-gray-400 bg-light shadow-sm p-1 flex flex-col gap-1"
              >
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
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Drawer mobile + overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 ${
          mobileOpen ? "" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Overlay */}
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panneau latéral */}
        <aside
          id="mobile-drawer"
          className={`absolute left-0 top-0 h-full w-3/4 max-w-sm bg-gray-50 border-r shadow-lg
          transform transition-transform duration-300 ease-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="h-16 px-4 flex items-center justify-between">
            <span className="font-semibold text-main">Menu</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-gray-400 bg-light hover:bg-dark transition"
              aria-label="Close navigation menu"
            >
              <FiX className="h-5 w-5 text-gray-800" />
            </button>
          </div>

          <nav className="px-4 py-4 flex flex-col gap-3">
            <NavLink
              to="/"
              end
              className={navLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.home")}
            </NavLink>

            <NavLink
              to="/visits"
              className={navLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.visits")}
            </NavLink>

            <NavLink
              to="/questions"
              className={navLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.questions")}
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.about")}
            </NavLink>
          </nav>
        </aside>
      </div>
    </header>
  );
}

export default Navbar;
