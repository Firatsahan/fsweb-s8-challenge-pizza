export default function Footer() {
  const instaPics = [
    "li-0.png",
    "li-1.png",
    "li-2.png",
    "li-3.png",
    "li-4.png",
    "li-5.png",
  ];

  return (
    <footer className="bg-[#292929] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* İletişim */}
        <div className="space-y-6">
          <img
            src="/images/iteration-2-images/footer/logo-footer.svg"
            alt="Footer Logo"
            className="mb-8"
          />
          <div className="flex items-start gap-3">
            <img
              src="/images/iteration-2-images/footer/icons/icon-1.png"
              className="mt-1"
            />
            <p>
              341 Londonderry Road,
              <br />
              Istanbul Türkiye
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/images/iteration-2-images/footer/icons/icon-2.png" />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/images/iteration-2-images/footer/icons/icon-3.png" />
            <p>+90 216 123 45 67</p>
          </div>
        </div>

        {/* Menü */}
        <div>
          <h4 className="text-xl font-bold mb-8">Sıcak Menüler</h4>
          <ul className="space-y-4 text-gray-400">
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Burger</li>
            <li>Beyaz Console Frosty</li>
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h4 className="text-xl font-bold mb-8">Instagram</h4>
          <div className="grid grid-cols-3 gap-2">
            {instaPics.map((pic, i) => (
              <img
                key={i}
                src={`/images/iteration-2-images/footer/insta/${pic}`}
                className="w-full rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 border-t border-gray-800 mt-12 pt-8 flex justify-between items-center text-sm">
        <p>© 2023 Teknolojik Yemekler.</p>
        <img src="/workintech.svg" className="w-6 opacity-50" />
      </div>
    </footer>
  );
}
