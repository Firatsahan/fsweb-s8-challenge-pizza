import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Teknolojik Yemekler
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <span>fırsatlı hacırma</span>
          <span>KOD AÇIKTIRIR</span>
          <span>PIZZA, DOYURUR</span>
          <Link
            to="/order/2"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm hover:bg-orange-600"
          >
            AÇIKTIM
          </Link>
        </div>
      </div>
    </header>
  );
}
