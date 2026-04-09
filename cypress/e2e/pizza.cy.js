Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // Hataların testi durdurmasını engeller
});

describe("Pizza Sipariş Uygulaması E2E Testleri", () => {
  beforeEach(() => {
    // Teste başlamadan önce formu ziyaret et
    // Port numaran 5173 değilse burayı güncelle!
    cy.visit("http://localhost:5173/pizza");
  });

  describe("Form Validasyon Kontrolleri", () => {
    it("İsim 3 karakterden az olduğunda buton disabled kalmalı", () => {
      cy.get('input[name="customerName"]').type("Ab");
      cy.get('button[type="submit"]').should("be.disabled");
    });

    it("En az 4 malzeme seçilmediğinde buton disabled kalmalı", () => {
      cy.get('input[name="customerName"]').type("Fırat");
      cy.get('select[name="hamur"]').select("İnce");
      cy.get('input[name="size"][value="M"]').check();
      // Sadece 2 malzeme seçelim
      cy.get('input[name="malzemeler"]').check(["Mısır", "Sosis"]);

      cy.get('button[type="submit"]').should("be.disabled");
    });
  });

  describe("Başarılı Sipariş Akışı", () => {
    it("Tüm alanlar doğru dolunca sipariş başarıyla gönderilmeli", () => {
      // 1. İsim gir
      cy.get('input[name="customerName"]').type("Fırat");

      // 2. Boyut seç (Radio Button)
      cy.get('input[name="size"][value="L"]').check();

      // 3. Hamur seç (Select)
      cy.get('select[name="hamur"]').select("Normal");

      // 4. En az 4 malzeme seç (Checkbox)
      cy.get('input[name="malzemeler"]').check([
        "Mısır",
        "Sosis",
        "Sucuk",
        "Biber",
      ]);

      // 5. Not ekle
      cy.get('textarea[name="not"]').type("Kapıyı çalmayın, bebek uyuyor.");

      // 6. Adet artır
      cy.get("button").contains("+").click(); // Adet 2 oldu

      // 7. Buton aktif mi kontrol et ve tıkla
      cy.get('button[type="submit"]').should("not.be.disabled").click();

      // 8. Başarı sayfasına yönlendirme kontrolü
      cy.url().should("include", "/success");
    });
  });

  describe("Kenar Durumlar (Edge Cases)", () => {
    it("10'dan fazla malzeme seçimine izin vermemeli", () => {
      const malzemeler = [
        "Mısır",
        "Sosis",
        "Sucuk",
        "Biber",
        "Soğan",
        "Kabak",
        "Domates",
        "Sarımsak",
        "Jalepeno",
        "Ananas",
        "Pepperoni",
      ];

      // İlk 10'unu seç
      malzemeler.slice(0, 10).forEach((m) => {
        cy.get(`input[value="${m}"]`).check();
      });

      // 11. olanın seçilemediğini (veya state'in izin vermediğini) doğrula
      // Bizim kodumuzda 10'dan sonrası eklenmiyor, check olsa bile state değişmez.
      cy.get(`input[value="${malzemeler[10]}"]`).check();
      cy.get('input[name="malzemeler"]:checked').should("have.length", 10);
    });
  });
});
