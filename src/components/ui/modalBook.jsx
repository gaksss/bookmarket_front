import React from "react";
import Image from "next/image";

function ModalBook({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xl bg-opacity-10 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-[700px] h-[700px] shadow-lg rounded-md bg-[#5B8C90]">
        <div className="text-center">
          <h3 className="text-2xl font-bold  flex">{book.title}</h3>
          <div className="relative w-full h-60 my-4">
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="mt-2 px-7 py-3">
            <p className="text-lg ">Auteur : {book.author}</p>
            <p className="text-lg ">Prix : {book.price}€</p>
            <p className="text-lg text-left mt-4">{book.description}</p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium rounded-md bg-[#90624B] text-white border hover:bg-[#533e33] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#533e33]/50 cursor-pointer shadow-sm"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBook;
