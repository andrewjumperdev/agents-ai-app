import React, { useState } from "react";
import { Lang } from "../types/types";
import Image from "next/image";
import Link from "next/link";
import { translations } from "../libs/translations";

type NavbarProps = {
  links?: { label: string; href: string }[];
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
};

const flagMap: Record<Lang, string> = {
  es: "/flags/es.png",
  en: "/flags/en.png",
  fr: "/flags/fr.png",
};

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const t = translations[lang] || translations["en"];

  return (
    <nav className="w-full px-4 py-3 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md">
      {/* Logo y título */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={50}
          height={50}
          className="w-10 h-10 md:w-12 md:h-12"
        />
        <h1 className="hidden sm:block text-lg md:text-2xl font-extrabold">
          {t.slogan}
        </h1>
      </div>

      {/* Idiomas + botón Blog */}
      <div className="flex items-center gap-2 relative">
        {/* Dropdown de idiomas */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <Image
              src={flagMap[lang]}
              alt={lang}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="hidden sm:block">{lang.toUpperCase()}</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50">
              {(["es", "en", "fr"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    setDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-3 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
                >
                  <Image
                    src={flagMap[l]}
                    alt={l}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span>{l.toUpperCase()}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Botón Blog */}
        <Link href={`/blog/${lang}`}>
          <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 hover:scale-105 transform transition-all duration-300" style={{ cursor: "pointer" }} >
            Blog
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
