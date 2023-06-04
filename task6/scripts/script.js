function getBitcoinPrice() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var bitcoinPrice = response.bitcoin.usd;
            var bitcoinPriceElement = document.getElementById('bitcoinPrice');
            bitcoinPriceElement.innerText = 'Курс биткоина: $' + bitcoinPrice;
        }
        else {
            console.log('Произошла ошибка:', xhr.status);
        }
    };
    xhr.onerror = function () {
        console.log('Произошла ошибка при выполнении запроса');
    };
    xhr.send();
}