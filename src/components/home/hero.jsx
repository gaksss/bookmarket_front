import Link from "next/link";
import React from "react";
import heroImg from "../../../public/assets/img/heroImg.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-between p-6 md:p-24 overflow-none">
      <div className="max-w-5xl w-full space-y-8 text-center text-white z-2">
        <h1>Bienvenue sur BookMarket</h1>
        <p className="text-xl text-muted-foreground">
          Votre bibliothèque en ligne pour découvrir, acheter et gérer vos
          livres préférés d'occasion
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/books"
            className="px-6 py-3 text-lg font-medium rounded-md bg-[#5B8C90] text-primary-foreground hover:bg-[#466b6e]"
          >
            Parcourir les livres
          </Link>
          <Link
            href="/register"
            className="px-6 py-3 text-lg font-medium rounded-md bg-secondary border-[#5B8C90] border-2 text-secondary-foreground hover:bg-[#5B8C90] "
          >
            Créer un compte
          </Link>
        </div>
      </div>
      <Image
        src={heroImg}
        alt="image de fond"
        className="absolute top-0 h-[100vh]"
      />
    </div>
  );
};

export default Hero;
