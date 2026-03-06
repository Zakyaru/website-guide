import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer id="contact" className="w-full pt-8 pb-12 bg-indigo-700">
      <div className="page-width mx-auto flex flex-col items-center gap-6 text-center text-white">
        <h4>{t("contact.title")}</h4>

        <h3>
          {t("contact.subtitle")}
        </h3>

        <div className="flex flex-col gap-2 text-base sm:text-lg">
          <div>+33 6 66 88 65 52</div>
          <div>maria.lescorail@gmail.com</div>
        </div>

        <div className="flex items-center gap-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/maria_v_doline/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 text-4xl bg-white rounded-full text-pink-600 hover:text-white hover:bg-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/33666886552"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 text-4xl bg-white rounded-full text-green-600 hover:text-white hover:bg-green-500 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
