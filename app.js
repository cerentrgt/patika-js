// Kullanıcıdan isim ve soyisim alma ve zamanı gösterme fonksiyonu
const firstName = prompt("Lütfen isminizi girin:");
const lastName = prompt("Lütfen soyisminizi girin:");

const resultElement = document.getElementById('result');

// İsim ve soyisim birleştir
if (firstName && lastName) {
    const fullName = `${firstName} ${lastName}`;
    resultElement.innerText = `Merhaba, ${fullName}! Mevcut Zaman ve Tarih:`;

    // Zamanı güncelleme fonksiyonu
    function updateTime() {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const dateTimeString = now.toLocaleString('tr-TR', options);
        resultElement.innerText = `Merhaba, ${fullName}!
         Mevcut Zaman ve Tarih: ${dateTimeString}`;
    }

    // İlk zaman güncellemesini yap ve her 1 saniyede bir güncelle
    updateTime();
    setInterval(updateTime, 1000); // 1000 ms = 1 saniye
} else {
    resultElement.innerText = "İsim ve soyisim bilgisi eksik.";
}
