import React, { useState } from "react";
import Image from "next/image";
import gatsby from "../../../public/assets/img/books/gatsby.jpg";
import mockingbird from "../../../public/assets/img/books/mockingbird.jpg";
import pride from "../../../public/assets/img/books/pride.jpg";
import catcher from "../../../public/assets/img/books/catcher.jpg";
import orwell from "../../../public/assets/img/books/1984.jpg";
import { Toaster } from "@/components/ui/sonner";
import bgWhite from "../../../public/assets/img/background/bgWhite.jpg";
import bgBook from "../../../public/assets/img/background/bgBook.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BoxIcon from "@/components/scripts/BoxIcon";
import { toast } from "sonner";
import ModalBook from "../ui/modalBook";

const BestSeller = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [likedBooks, setLikedBooks] = useState(new Set());

  const handleLikeClick = (bookId) => {
    setLikedBooks((prev) => {
      const newLiked = new Set(prev);
      if (newLiked.has(bookId)) {
        newLiked.delete(bookId);
      } else {
        newLiked.add(bookId);
      }
      return newLiked;
    });
  };

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: "19.99",
      image: gatsby,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: "14.99",
      image: mockingbird,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: "17.50",
      image: orwell,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: "12.99",
      image: pride,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: "15.00",
      image: catcher,
    },
    // Ajoutez d'autres livres ici
  ];

  return (
    <>
      <section className="flex justify-center items-center mt-8 flex-col w-full z-50 relative">
        <h2 className="text-black font-semibold text-3xl mb-8">Best Seller</h2>

        <Carousel opts={{ loop: true }} className="w-full max-w-5xl px-4">
          <CarouselContent className="-ml-2 md:-ml-4">
            {books.map((book) => (
              <CarouselItem
                key={book.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-gray-500 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-[3/4] w-full">
                    <div onClick={() => handleOpenModal(book)} style={{ cursor: 'pointer' }}>
                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 truncate">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                    <p className="text-primary-dark font-bold">${book.price}</p>
                    <div
                      className="absolute right-5 bottom-5 cursor-pointer"
                      onClick={() => {
                        handleLikeClick(book.id);
                        if (!likedBooks.has(book.id)) {
                          toast("Livre ajouté aux favoris", {
                            description:
                              "Vous avez ajouté un livre a vos favoris",
                            action: {
                              label: "X",
                              onClick: () => console.log("X"),
                            },
                          });
                        } else {
                          toast("Livre retiré des favoris", {
                            description:
                              "Vous avez ajouté un livre a vos favoris",
                            action: {
                              label: "X",
                              onClick: () => console.log("X"),
                            },
                          });
                        }
                      }}
                    >
                      <BoxIcon
                        name="heart"
                        type={likedBooks.has(book.id) ? "solid" : "regular"}
                        color={likedBooks.has(book.id) ? "#C7333E" : "#000000"}
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" md:flex -left-12 hover:bg-primary-dark  text-black cursor-pointer transition-all duration-200 hover:opacity-70 hover:scale-110" />
          <CarouselNext className=" md:flex -right-12 hover:bg-primary-dark text-black cursor-pointer transition-all duration-200 hover:opacity-70 hover:scale-110" />
        </Carousel>
        {showModal && <ModalBook book={selectedBook} onClose={() => setShowModal(false)} />}
      </section>
      <div className="text-black">
        <Toaster />
      </div>
    </>
  );
};

export default BestSeller;
