import React from "react";

interface CardProps {
  nama: string;
  description: string;
}

const CardTesti: React.FC<CardProps> = ({ nama, description}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold text-center">{nama}</h2>
        <p className="mt-2 text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default CardTesti;
