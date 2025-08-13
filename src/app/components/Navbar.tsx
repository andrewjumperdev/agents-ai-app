import React from "react";
import { Lang } from "../types/types";
import Image from "next/image";

type NavbarProps = {
  links: { label: string; href: string }[];
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
};

const Navbar: React.FC<NavbarProps> = ({ links, lang, setLang }) => {
  return (
    <nav className="w-full px-4 py-3 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={50}
          height={50}
          className="w-10 h-10 md:w-12 md:h-12"
        />
        <h1 className="hidden sm:block text-lg md:text-2xl font-extrabold">
          Tu Asistente IA
        </h1>
      </div>
      <div className="flex items-center gap-2">
        {(["es", "en", "fr"] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`text-sm px-3 py-1 rounded-full transition-colors ${
              lang === l
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
