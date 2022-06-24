export default function initBitcoin(){
fetch("https://blockchain.info/ticker")
    .then(response=> response.json())
    .then((json) => {
        const inserir=document.querySelector('.btc-preco')
        inserir.innerHTML=(1000/json.BRL.sell).toFixed(4)
}).catch(erro => console.log(Error(erro)));
}






