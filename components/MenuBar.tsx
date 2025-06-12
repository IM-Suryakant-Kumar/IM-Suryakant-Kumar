"use client";

import { useState } from "react";
import { links } from "@/lib/data";
import Link from "next/link";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="md:hidden flex flex-col items-end gap-1 cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
        // aria-label={isOpen ? "Close menu" : "Open menu"}
        tabIndex={0}
        role="button"
        // onKeyPress={e => {
        //   if (e.key === 'Enter' || e.key === ' ') setIsOpen(!isOpen);
        // }}
      >
        <div
          className={`w-6 h-1 bg-logo rounded transition-transform duration-500 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-logo rounded transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-logo rounded transition-transform duration-500 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>

      <ul
        className={`md:hidden fixed top-16 left-0 w-full 
          p-6 pt-8 
          bg-secondary/90 backdrop-blur-md shadow-xl
          transition-all duration-500 
          flex flex-col gap-5 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ borderRadius: isOpen ? "0 0 1rem 1rem" : "0" }}
      >
        {links.map((link) => (
          <li key={link.hash} className="group">
            <Link
              className="block py-2 px-4 text-lg font-semibold rounded-md transition-all duration-300
              text-gray-800 hover:text-logo focus:text-logo
              bg-white/60 hover:bg-logo/10 focus:bg-logo/10 shadow-sm"
              href={link.hash}
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuBar;
