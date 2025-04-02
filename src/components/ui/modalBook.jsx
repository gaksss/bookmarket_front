import React from 'react'
import Image from "next/image";

function ModalBook({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">{book.title}</h3>
          <div className="relative w-full h-64 my-4">
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="mt-2 px-7 py-3">
            <p className="text-lg text-gray-700">Auteur : {book.author}</p>
            <p className="text-lg text-gray-700">Prix : ${book.price}</p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBook