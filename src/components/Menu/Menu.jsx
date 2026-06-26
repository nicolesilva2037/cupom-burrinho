import React from "react";
import menuItems from "../../data/menuItems.json";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-muted-foreground">
      {menuItems.map((item, index) => (
        <Link key={index} to={item.url} className={item.customClass}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
