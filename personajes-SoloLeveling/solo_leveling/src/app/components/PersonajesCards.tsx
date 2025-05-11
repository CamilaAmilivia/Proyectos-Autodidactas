import React from "react";
import Sidebar from "./Sidebar"; 

const cards = [
    {
        name: "SUNG JIN-WOO",
        description: "The sadow monarch",
        image: "/img/sung.jpg",
    },
    {
        name: "CHA HAE-IN",
        description: "Strong S-rank hunter",
        image: "/img/cha.jpg",
        
    }
]


const PersonajesCards = () => {
    return(
       <div className="flex">
      {/* Barra lateral fija a la izquierda */}
      <Sidebar />

      {/* Contenido principal desplazado a la derecha */}
      <div className="ml-60 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-6 w-full">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-purple-400">SOLO LEVELING</span>
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative w-[340px] h-[190px] rounded-xl overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.name}
                className="absolute inset-0 w-full h-full object-cover object-[0%_15%]"
              />
              <div className="relative z-10 p-4">
                <h2 className="text-xl font-bold">{card.name}</h2>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default PersonajesCards;