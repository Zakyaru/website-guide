function Navbar() {
    return (
        <nav>
            <div className="flex justify-between items-center">
               <div className="flex flex-row gap-8">
                    <span>Accueil</span>
                    <span>Visites</span>
                    <span>Qui suis-je ?</span>
                    <span>FAQ</span>
                    <span>Contacts</span>
                </div>
                <div className="flex flex-row">
                    <div className="w-4 h-8 bg-blue-500"></div>
                    <div className="w-4 h-8 bg-white"></div>
                    <div className="w-4 h-8 bg-red-500"></div>
                </div> 
            </div>
            
        </nav>
    );
}

export default Navbar;