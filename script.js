
(() => {

  const CRYPTO_API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
  
  
  async function getJson(url){
      const response = await fetch(url);
      return response.json();
  }
  
  showAll()
   async function showAll(){
      try {
          Currencies = await getJson(CRYPTO_API);
          displayCurrencies(Currencies);
      } catch (err) {
          console.log(err.message);
      }}
  
      
      function displayCurrencies(currencies = []) {
          const currenciesGallery = document.getElementById("currenciesGallery");
          let html = ""
          for (const currency of currencies){
            html += `<div id="cardCoin" class="card" style="width: 14rem;">
            <div class="form-check form-switch">
            <img src="${currency.image}" class="imgSize" class="card-img-top" alt="..." />
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>
            <div class="card-body">
              <h5 class="card-title">${currency.name}</h5>
              <p class="card-text">${currency.symbol}</p>
              <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Button with data-bs-target
            </button>
            <div class="collapse" id="collapseExample">
            <div class="card card-body">
              
            </div>
          </div>
            </div>
          </div>`
          currenciesGallery.innerHTML = html
          }
        
        }
  
  })();
  

















// function getPopulationAvg(countries) {
//   let sum = 0;
//   countries.forEach(country => (sum += country.population));
//   return sum / countries.length;
// }