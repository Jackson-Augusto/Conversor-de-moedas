const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-to")
const currencySelectFrom = document.querySelector(".currency-select-from")

function ConvertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyToConvert = document.querySelector(".currency-value-to-convert") //valores originais//
    const currencyValueConverted = document.querySelector(".currency-value") // Valores convertidos //

    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 180
    const libraToday = 0.17
    const realToday = 1
    
    const currencyconverted = inputCurrencyValue / dolarToday 
   
    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
       }).format(inputCurrencyValue)
    

       if (currencySelect.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
   }).format(inputCurrencyValue / dolarToday)
}

if(currencySelect.value == "real"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue / realToday)
    
    }

if(currencySelect.value == "euro"){
currencyValueConverted.innerHTML = new Intl.NumberFormat("ue-UE", {
    style: "currency",
    currency: "EUR"
}).format(inputCurrencyValue / euroToday)

}


if(currencySelect.value == "libra"){
currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
    style: "currency",
    currency: "GBP"
}).format(inputCurrencyValue / libraToday)

}

if (currencySelect.value == "bitcoin"){
currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
style: "currency",
currency: "BTC"
}).format(inputCurrencyValue / bitcoinToday)

}


}


function changeCurrency(){
    const currencyNameFrom = document.getElementById("currency-name-fist")
    const currencyImageFrom = document.querySelector(".currency-img-to-convert")

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img-to-converted")

    
    if( currencySelectFrom.value == "real"){
    currencyNameFrom.innerHTML = "Real Brasileiro"
    currencyImageFrom.src = "./Assets/brasil 2.png"

    }
    
    if( currencySelectFrom.value == "dolar"){
        currencyNameFrom.innerHTML = "Dolar Americao"
        currencyImageFrom.src = "./Assets/estados-unidos (1) 1.png"
        
            }    


    if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar Americano" 
    currencyImage.src = "./Assets/estados-unidos (1) 1.png"

    }

if(currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro" 
    currencyImage.src = "./Assets/euro.png"


}

if (currencySelect.value == "real"){

    currencyName.innerHTML = "Real Brasileiro"
    currencyImage.src = "./Assets/brasil 2.png"

}


if(currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "BitCoin" 
    currencyImage.src = "./Assets/bitcoin 1.png"


}

if(currencySelect.value == "libra"){
    currencyName.innerHTML = "Libras" 
    currencyImage.src = "./Assets/libra 1.png"

}





ConvertValues()

}






convertButton.addEventListener("click", ConvertValues)
currencySelect.addEventListener("change", changeCurrency)

