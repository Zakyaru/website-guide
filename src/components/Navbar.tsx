function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Menus à gauche */}
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:underline">
            Accueil
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            Visites
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            FAQ
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            Qui suis-je ?
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            Contact
          </a>
        </nav>

        {/* Emplacement à droite (future langue) */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-24 rounded-md border flex items-center justify-center text-sm text-gray-500">
            Lang
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
