import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "YENİ! Kore", img: "1.svg" },
  { name: "Pizza", img: "2.svg" },
  { name: "Burger", img: "3.svg" },
  { name: "Kızartmalar", img: "4.svg" },
  { name: "Fast food", img: "5.svg" },
  { name: "Gazlı İçecek", img: "6.svg" },
];

const products = [
  {
    id: 1,
    name: "Terminal Pizza",
    rating: 4.9,
    reviews: 200,
    price: 60,
    img: "/images/iteration-2-images/pictures/food-1.png",
  },
  {
    id: 2,
    name: "Position Absolute Acı Pizza",
    rating: 4.9,
    reviews: 928,
    price: 85,
    img: "/images/iteration-2-images/pictures/food-2.png",
  },
  {
    id: 3,
    name: "useEffect Tavuklu Burger",
    rating: 4.9,
    reviews: 462,
    price: 75,
    img: "/images/iteration-2-images/pictures/food-3.png",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="font-barlow bg-pizza-beige min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-pizza-red h-[80vh] flex flex-col items-center justify-center text-center bg-cover bg-center px-4"
        style={{
          backgroundImage: "url('/images/iteration-1-images/home-banner.png')",
        }}
      >
        <img
          src="/images/iteration-1-images/logo.svg"
          alt="Logo"
          className="mb-12 max-w-[300px]"
        />
        <p className="font-satisfy text-pizza-yellow text-2xl mb-2">
          fırsatı kaçırma
        </p>
        <h1 className="text-white text-5xl md:text-6xl font-light mb-8 leading-tight">
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h1>
        <button
          onClick={() => navigate("/pizza")}
          className="bg-pizza-yellow px-14 py-3 rounded-full font-bold hover:scale-105 transition-transform text-sm tracking-wide"
        >
          ACIKTIM
        </button>
      </section>

      {/* Kategori Navigasyonu */}
      <nav className="flex justify-center gap-10 py-10 bg-white overflow-x-auto shadow-sm">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex items-center gap-3 cursor-pointer hover:text-pizza-red whitespace-nowrap group"
          >
            <img
              src={`/images/iteration-2-images/icons/${cat.img}`}
              alt={cat.name}
              className="w-8 group-hover:scale-110 transition-transform"
            />
            <span className="font-semibold text-gray-700 group-hover:text-pizza-red">
              {cat.name}
            </span>
          </div>
        ))}
      </nav>

      {/* CTA Kartları */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative rounded-2xl overflow-hidden h-[450px] shadow-lg">
            <img
              src="/images/iteration-2-images/cta/kart-1.png"
              className="w-full h-full object-cover"
              alt="Özel Lezzetus"
            />
            <div className="absolute top-10 left-10 text-white max-w-[250px]">
              <h2 className="text-5xl font-quattro font-bold mb-3 leading-none">
                Özel
                <br />
                Lezzetus
              </h2>
              <p className="mb-6 font-medium text-lg">
                Position:Absolute Acı Burger
              </p>
              <button
                onClick={() => navigate("/pizza")}
                className="bg-white text-pizza-red px-6 py-2 rounded-full text-xs font-bold hover:bg-pizza-beige transition-colors"
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/iteration-2-images/cta/kart-2.png"
                className="w-full h-full object-cover"
                alt="Hackathlon Menü"
              />
              <div className="absolute top-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Hackathlon
                  <br />
                  Burger Menü
                </h3>
                <button
                  onClick={() => navigate("/pizza")}
                  className="bg-white text-pizza-red px-5 py-2 rounded-full text-xs font-bold"
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/iteration-2-images/cta/kart-3.png"
                className="w-full h-full object-cover"
                alt="Hızlı Kurye"
              />
              <div className="absolute top-8 left-8 text-black">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-pizza-red font-black">Çoooook</span>{" "}
                  hızlı
                  <br />
                  npm gibi kurye
                </h3>
                <button
                  onClick={() => navigate("/pizza")}
                  className="bg-white text-pizza-red px-5 py-2 rounded-full text-xs font-bold"
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ürün Kartları Bölümü (Görselde eksik olan kısım) */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-satisfy text-pizza-red text-2xl mb-2">
              en çok paketlenen menüler
            </p>
            <h2 className="text-4xl font-bold">
              Acıktıran Kodlara Doyuran Lezzetler
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-50 flex flex-col cursor-pointer group"
                onClick={() => navigate("/pizza")}
              >
                <div className="mb-6 overflow-hidden flex justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-xl mb-6 flex-grow">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center text-gray-500 font-semibold">
                  <div className="flex items-center gap-6">
                    <span>{item.rating}</span>
                    <span>({item.reviews})</span>
                  </div>
                  <span className="text-black text-xl font-bold">
                    {item.price}₺
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
