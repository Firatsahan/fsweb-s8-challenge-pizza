import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const materialsList = [
  "Pepperoni",
  "Tavuk Izgara",
  "Mısır",
  "Sosis",
  "Soğan",
  "Sucuk",
  "Biber",
  "Kabak",
  "Kanada Jambonu",
  "Ananas",
  "Jalepeno",
  "Domates",
  "Sarımsak",
];
const logoPath = "/images/iteration-1-images/logo.svg";
export default function OrderForm({ setOrderResponse }) {
  const [form, setForm] = useState({
    customerName: "",
    size: "",
    hamur: "",
    malzemeler: [],
    not: "",
    adet: 1,
  });

  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const basePrice = 85.5;
  const extraPrice = 5.0;
  const totalExtras = form.malzemeler.length * extraPrice;
  const totalPrice = (basePrice + totalExtras) * form.adet;

  useEffect(() => {
    const isNameValid = form.customerName.trim().length >= 3;
    const isMaterialsValid =
      form.malzemeler.length >= 4 && form.malzemeler.length <= 10;
    const isReady = isNameValid && isMaterialsValid && form.size && form.hamur;
    setIsValid(isReady);
  }, [form]);

  const handleMaterialChange = (material) => {
    const updated = form.malzemeler.includes(material)
      ? form.malzemeler.filter((m) => m !== material)
      : [...form.malzemeler, material];

    if (updated.length <= 10) setForm({ ...form, malzemeler: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    axios
      .post("https://reqres.in/api/pizza", form)
      .then((res) => {
        console.log("Sipariş Başarılı:", res.data);
        setOrderResponse(res.data);
        navigate("/success");
      })
      .catch((err) => {
        console.error("Sipariş hatası (API):", err);
        setOrderResponse(form);
        navigate("/success");
      });
  };

  return (
    <div className="bg-white font-barlow min-h-screen">
      {}
      <div className="bg-[#CE2829] py-10 flex flex-col justify-center items-center w-full">
        {}
        <img src={logoPath} alt="Teknolojik Yemekler Logo" className="mb-2" />

        {}
      </div>

      {}
      <div className="bg-[#FAF7F2] flex flex-col items-center py-8">
        <div className="max-w-xl w-full px-4">
          <img
            src="/images/iteration-2-images/pictures/form-banner.png"
            className="w-full rounded-lg mb-4"
            alt="Banner"
          />
          <nav className="text-sm text-pizza-gray mb-2">
            Anasayfa - Seçenekler -{" "}
            <span className="text-pizza-red font-bold">Sipariş Oluştur</span>
          </nav>
          <h2 className="text-2xl font-bold text-black">
            Position Absolute Acı Pizza
          </h2>
          <div className="flex justify-between items-center mt-4">
            <span className="text-2xl font-bold">85.50₺</span>
            <div className="text-pizza-gray flex gap-8">
              <span>4.9</span>
              <span>(200)</span>
            </div>
          </div>
          <p className="text-pizza-gray mt-4 leading-relaxed">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre...
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-4 py-8">
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="flex justify-between mb-8 gap-4">
          <div className="space-y-4 flex-1">
            <h3 className="font-bold text-black">
              Boyut Seç <span className="text-pizza-red">*</span>
            </h3>
            {["S", "M", "L"].map((size) => (
              <label
                key={size}
                className="flex items-center gap-2 cursor-pointer text-gray-700 font-semibold"
              >
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={form.size === size}
                  onChange={(e) => setForm({ ...form, size: e.target.value })}
                  className="accent-pizza-yellow w-5 h-5"
                />{" "}
                {size}
              </label>
            ))}
          </div>

          <div className="space-y-4 flex-1">
            <h3 className="font-bold text-black">
              Hamur Seç <span className="text-pizza-red">*</span>
            </h3>
            <select
              name="hamur"
              value={form.hamur}
              onChange={(e) => setForm({ ...form, hamur: e.target.value })}
              className="bg-pizza-beige p-3 rounded w-full border border-gray-200"
            >
              <option value="" disabled>
                -Hamur Kalınlığı Seç-
              </option>
              <option value="İnce">İnce</option>
              <option value="Normal">Normal</option>
              <option value="Kalın">Süpper Kalın</option>
            </select>
          </div>
        </div>

        <h3 className="font-bold mt-8 text-black">Ek Malzemeler</h3>
        <p className="text-sm text-pizza-gray mb-4">
          En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
          {materialsList.map((m) => (
            <label
              key={m}
              className="flex items-center gap-2 text-sm font-bold text-gray-600 cursor-pointer"
            >
              <input
                type="checkbox"
                name="malzemeler"
                value={m}
                checked={form.malzemeler.includes(m)}
                onChange={() => handleMaterialChange(m)}
                className="w-5 h-5 accent-pizza-yellow"
              />{" "}
              {m}
            </label>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="font-bold text-black">
            İsim <span className="text-pizza-red">*</span>
          </h3>
          <input
            type="text"
            name="customerName" // Cypress'in bulması için burası kritik
            placeholder="Adınız (en az 3 karakter)"
            value={form.customerName}
            className="w-full p-3 bg-pizza-beige border border-gray-200 rounded focus:outline-pizza-yellow"
            onChange={(e) => setForm({ ...form, customerName: e.target.value })}
          />

          <h3 className="font-bold text-black">Sipariş Notu</h3>
          <textarea
            name="not"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={form.not}
            className="w-full p-3 bg-pizza-beige border border-gray-200 rounded h-24"
            onChange={(e) => setForm({ ...form, not: e.target.value })}
          />
        </div>

        <hr className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex h-12 shadow-sm">
            <button
              type="button"
              onClick={() =>
                setForm({ ...form, adet: Math.max(1, form.adet - 1) })
              }
              className="bg-pizza-yellow px-5 rounded-l font-bold text-xl hover:bg-yellow-500 transition-colors"
            >
              {" "}
              -{" "}
            </button>
            <div className="border-y px-8 flex items-center font-bold bg-white">
              {form.adet}
            </div>
            <button
              type="button"
              onClick={() => setForm({ ...form, adet: form.adet + 1 })}
              className="bg-pizza-yellow px-5 rounded-r font-bold text-xl hover:bg-yellow-500 transition-colors"
            >
              {" "}
              +{" "}
            </button>
          </div>

          <div className="border rounded-md p-6 w-full md:w-80 space-y-4 bg-white shadow-sm">
            <h4 className="font-bold text-lg">Sipariş Toplamı</h4>
            <div className="flex justify-between text-pizza-gray font-semibold">
              <span>Seçimler</span>{" "}
              <span>{(totalExtras * form.adet).toFixed(2)}₺</span>
            </div>
            <div className="flex justify-between text-pizza-red font-bold text-lg">
              <span>Toplam</span> <span>{totalPrice.toFixed(2)}₺</span>
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-4 rounded-md font-bold text-sm transition-all ${
                isValid
                  ? "bg-pizza-yellow hover:scale-[1.02] active:scale-95 shadow-md"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
