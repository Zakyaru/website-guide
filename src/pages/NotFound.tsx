import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center gap-6 text-center px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>

      <h2 className="text-2xl font-semibold">
        Oups… cette page n’existe pas
      </h2>

      <p className="max-w-md text-gray-600">
        La page que vous cherchez a peut-être été déplacée, renommée ou n’existe
        tout simplement pas.
      </p>

      <Link
        to="/"
        className="mt-4 inline-block rounded-lg bg-primary px-6 py-3 text-white font-semibold transition hover:bg-primary/90"
      >
        Retour à l’accueil
      </Link>
    </section>
  );
}
