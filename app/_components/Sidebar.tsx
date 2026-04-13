"use client";

import Link from "next/link";
import { useState } from "react";
import { sidebarLinks } from "../dev/data";
import { User } from "lucide-react";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Кнопка для мобилки */}
      <button
        className="md:hidden p-2 text-white bg-black fixed top-4 left-4 z-50 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Затемнение фона */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Сам сайдбар */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-black text-white z-50
          transform transition-transform duration-300
          h-screen flex flex-col
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
        `}
      >
        <div className="p-4 text-xl font-bold">
          Statme
        </div>

        <nav className="flex flex-col p-4 gap-4">
          {sidebarLinks.map((link) => (
            <Link href={link.path} className="p-2 rounded hover:bg-gray-700 transition" key={link.key}>
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <Link
            href={"/user/?id"}
            className="
      block w-full p-3 rounded-xl bg-gradient-to-br from-gray-900 to-neutral-800
      hover:from-gray-800 hover:to-neutral-700
      transition shadow-lg
    "
          >
            {/* Верх: аватар + имя + уровень */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <User className="w-10 h-10 rounded-full bg-white text-black p-1" />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-semibold">User1</span>
                <span className="text-xs text-gray-400">Level 12</span>
              </div>
            </div>

            {/* XP бар */}
            <div className="mt-3">
              <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-400 transition-all"
                  style={{ width: "65%" }} // прогресс
                />
              </div>

              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>650 XP</span>
                <span>1000 XP</span>
              </div>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
}