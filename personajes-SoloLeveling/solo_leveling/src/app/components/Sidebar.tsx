import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen w-60 bg-gray-900 text-white flex flex-col p-6 fixed">
      <h2 className="text-2xl font-bold mb-8 text-purple-400">Menú</h2>
      <nav className="flex flex-col gap-4">
        <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
        <a href="#" className="hover:text-purple-400 transition-colors">Personajes</a>
        <a href="#" className="hover:text-purple-400 transition-colors">Información</a>
        <a href="#" className="hover:text-purple-400 transition-colors">Contacto</a>
      </nav>
    </div>
  );
};

export default Sidebar;