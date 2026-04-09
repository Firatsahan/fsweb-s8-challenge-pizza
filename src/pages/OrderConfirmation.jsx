import React from "react";

export default function OrderConfirmation({ orderData }) {
  if (!orderData)
    return (
      <div className="bg-pizza-red min-h-screen text-white flex justify-center pt-20">
        Yükleniyor...
      </div>
    );

  const extrasTotal = orderData.malzemeler.length * 5 * orderData.adet;
  const grandTotal = (85.5 + orderData.malzemeler.length * 5) * orderData.adet;

  return (
    <div className="bg-pizza-red min-h-screen flex flex-col items-center text-white font-barlow py-20 px-4">
      <img
        src="/images/iteration-1-images/logo.svg"
        alt="Logo"
        className="mb-16"
      />
      <p className="font-satisfy text-pizza-yellow text-2xl">lezzetin yolda</p>
      <h1 className="text-6xl font-thin tracking-widest mt-2 border-b border-white/30 pb-12 w-full max-w-lg text-center">
        SİPARİŞ ALINDI
      </h1>

      <div className="mt-12 text-center space-y-4">
        <h2 className="text-xl font-bold">Position Absolute Acı Pizza</h2>
        <div className="space-y-1 text-sm opacity-90">
          <p>
            Boyut: <span className="font-bold">{orderData.boyut}</span>
          </p>
          <p>
            Hamur: <span className="font-bold">{orderData.hamur}</span>
          </p>
          <p>
            Ek Malzemeler:{" "}
            <span className="font-bold">{orderData.malzemeler.join(", ")}</span>
          </p>
        </div>
      </div>

      <div className="mt-12 border border-white/50 p-10 rounded-sm w-full max-w-sm">
        <h3 className="text-xl font-bold mb-6 text-center">Sipariş Toplamı</h3>
        <div className="flex justify-between mb-2">
          <span>Seçimler</span> <span>{extrasTotal.toFixed(2)}₺</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Toplam</span> <span>{grandTotal.toFixed(2)}₺</span>
        </div>
      </div>
    </div>
  );
}
