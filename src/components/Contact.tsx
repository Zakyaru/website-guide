import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <footer className="w-full pb-10 bg-primary">
      <div className="page-width mx-auto flex flex-col items-center gap-6 text-center">
        <h2 className="text-white">Contact</h2>

        <h3 className="text-white">
          Pour toute réservation ou question, contactez-moi directement via mes coordonnées.
        </h3>

        <div className="flex flex-col gap-2 text-lg text-white">
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
            className="p-1 text-4xl bg-white rounded-md text-pink-600 hover:text-white hover:bg-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/33666886552"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-1 text-4xl bg-white rounded-md text-green-600 hover:text-white hover:bg-green-500 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
