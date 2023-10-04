document.addEventListener("DOMContentLoaded", function () {
    const amount = document.getElementById("amount");
    const from = document.getElementById("from");
    const currency = document.getElementById("currency");
    const convert = document.getElementById("convert");
    const result = document.getElementById("result");

    const apiKey = "";

    convert.addEventListener("click", () => {
        const apiUrl = `https://api.api-ninjas.com/v1/exchangerate?pair=${from.value}_`;

        const amountTotal = amount.value;
        const toCurrency = currency.value;
        const url = apiUrl + toCurrency;

        fetch(url, {
            headers: {
                "X-API-KEY": apiKey,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const rate = data.exchange_rate;
                const resultPrice = amountTotal * rate;
                result.innerHTML = `${amountTotal} ${
                    from.value
                } = ${resultPrice.toFixed(2)} ${toCurrency}`;
            })
            .catch((error) => {
                console.error("Request failed:", error);
                result.innerHTML =
                    "An error has occurred. Please try again later.";
            });
    });
});