"use client";

import menu from "@/data/menu.json";
import React, { useState } from "react";

export default function Menu() {
  const [active, setActive] = useState(0);

  return (
    <nav className="w-full h-20 relative flex items-end rotate-180 text-primary">
      <div
        className={`absolute top-4 w-12 h-12 rounded-full bg-tertiary border-primary border-4 duration-500 ${menu[active].translate}`}
      >
        <div className="absolute w-3 h-3 top-3 -left-4 rounded-tr-lg shadow-1"></div>
        <div className="absolute w-3 h-3 top-3 left-11 rounded-tl-lg shadow-2"></div>
      </div>

      <ul className="flex flex-row justify-center items-end h-12 w-full bg-secondary rounded-t-lg">
        {menu.map((item, index) => (
          <li
            key={item.key}
            className="mx-2 flex flex-col basis-16 items-center"
          >
            <div
              className={`cursor-pointer duration-300 ${
                active === index ? "-translate-y-2.5" : "translate-y-1"
              }`}
              onClick={() => setActive(index)}
            >
              {/*<ion-icon name={item.icon} />*/}
            </div>
            <div
              className={`text-xs ${
                active === index
                  ? "duration-700 translate-y-0 opacity-100"
                  : "duration-75 translate-y-7 opacity-0"
              }`}
            >
              {item.label}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
