describe('Teknolojik Yemekler - Pizza Sipariş Akışı', () => {
  beforeEach(() => {
    // Testler başlamadan önce sipariş formuna git
    cy.visit('http://localhost:5173/pizza'); 
  });

  it('İsim inputuna metin girilebiliyor ve validation hatası kalkıyor', () => {
    // Başlangıçta buton disabled olmalı (İsim boş)
    cy.get('button').contains('SİPARİŞ VER').should('be.disabled');
    
    // İsim girildiğinde değeri kontrol et
    cy.get('input[placeholder*="Adınız"]').type('Ahmet Yılmaz');
    cy.get('input[placeholder*="Adınız"]').should('have.value', 'Ahmet Yılmaz');
  });

  it('Birden fazla malzeme seçilebiliyor (En az 4, en fazla 10)', () => {
    // 4 adet malzeme seç
    const malzemeler = ['Pepperoni', 'Mısır', 'Sosis', 'Soğan'];
    malzemeler.forEach(malzeme => {
      cy.contains(malzeme).click();
      cy.contains(malzeme).find('input').should('be.checked');
    });

    // Malzeme sayısı 4 olduğunda ve diğer alanlar dolduğunda butonu kontrol etmek için:
    cy.get('input[name="boyut"]').first().check(); // Boyut seç
    cy.get('select').select('İnce'); // Hamur seç
    cy.get('input[placeholder*="Adınız"]').type('Ahmet Yılmaz');

    // Butonun artık aktif olması gerekir
    cy.get('button').contains('SİPARİŞ VER').should('not.be.disabled');
  });

  it('Formu başarıyla gönderiyor ve onay sayfasına yönlendiriyor', () => {
    // 1. İsim doldur
    cy.get('input[placeholder*="Adınız"]').type('Emre Can');

    // 2. Boyut ve Hamur seç
    cy.get('input[value="Orta"]').check();
    cy.get('select').select('Normal');

    // 3. 5 adet malzeme seç (4-10 arası kuralı)
    const malzemeler = ['Pepperoni', 'Mısır', 'Sosis', 'Soğan', 'Domates'];
    malzemeler.forEach(m => cy.contains(m).click());

    // 4. Adet artır (Opsiyonel)
    cy.get('button').contains('+').click();

    // 5. Sipariş ver
    cy.get('button').contains('SİPARİŞ VER').