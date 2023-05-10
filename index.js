
// Dark Theme Mode Start

function ThemeHandleChange() {
  var setModes = document.body.classList.toggle("toggleMode");

  if (setModes) {
    document.querySelector(".modes").innerHTML = "<i class='fa fa-moon'></i> Light Mode";
    document.querySelector(".headerMain").style.backgroundColor = " hsl(209, 23%, 22%)";
    document.querySelector("input").classList.add("bg-input");
    document.querySelector("select").classList.add("bg-input");
    document.querySelector(".card").classList.add("bg-input");

  } else {
    document.querySelector(".modes").innerHTML = "<i class='fa fa-moon'></i> Dark Mode";
    document.querySelector(".headerMain").style.backgroundColor = "white";
    document.querySelector("input").classList.remove("bg-input");
    document.querySelector("select").classList.remove("bg-input");
    document.querySelector(".card").classList.remove("bg-input");
  }
}

// Dark Theme Mode End 




// Fetching Data from REST API for the First Time for all User


var values = fetch("https://restcountries.com/v3.1/all");
values.then((promise) => {
  var parsingOfData = promise.json();
  return parsingOfData;
}).then((promise2) => {
  console.log(promise2);
  promise2.forEach(element => {
    var imgLoc = element.flags.png;
    var imgAlt = element.flags.alt;
    const Markup = `<div class="card rounded-sm border my-8">
          <div class="img">
            <img
              class="h-40 w-full rounded-t-sm"
              src= ${imgLoc}
              alt=${imgAlt}
            />
          </div>
          <div class="about-Country p-4 pb-8">
            <div class="countryName my-6">
              <h1 class="text-2xl">${element.name.common}</h1>
            </div>
            <div class="details">
              <div class="population flex flex-col gap-2">
                <p class="">
                  Population :
                  <span class="font-thin text-sm">${element.population}</span>
                </p>
                <p>Region : <span>${element.region}</span></p>
                <p class="capital">Capital : <span>${element.capital} </span></p>
              </div>
            </div>
          </div>
        </div>`;
    document.querySelector(".Card-api").insertAdjacentHTML('beforeend', Markup)
  });
})



// Starting of OnChange for Search bar


function handleOnChangeInput(e) {

  var ValuesForCountry = e.target.value;
  console.log(ValuesForCountry)

  if (ValuesForCountry !== "") {
    var card2 = document.querySelector(".Card-api-2").innerHTML = "";
    document.querySelector(".Card-api").innerHTML = "";

  }

  var InputValues = fetch(`https://restcountries.com/v3.1/name/${ValuesForCountry}?fullText=true`);

  InputValues.then((promise) => {
    var DataParsing = promise.json();
    return DataParsing;
  }).then((promise2) => {
    console.log(promise2);
    promise2.forEach(element => {

      var imgLoc = element.flags.png;
      var imgAlt = element.flags.alt;
      const Markup = `<div class="card rounded-sm border my-8">
            <div class="img">
              <img
                class="h-40 w-full rounded-t-sm"
                src= ${imgLoc}
                alt=${imgAlt}
              />
            </div>
            <div class="about-Country p-4 pb-8">
              <div class="countryName my-6">
                <h1 class="text-2xl">${element.name.common}</h1>
              </div>
              <div class="details">
                <div class="population flex flex-col gap-2">
                  <p class="">
                    Population :
                    <span class="font-thin text-sm">${element.population}</span>
                  </p>
                  <p>Region : <span>${element.region}</span></p>
                  <p class="capital">Capital : <span>${element.capital} </span></p>
                </div>
              </div>
            </div>
          </div>`;
      document.querySelector(".Card-api-2").insertAdjacentHTML('beforeend', Markup)
    });
  })
}



// Starting of OnChange for Drop-Down


function handleOnChange() {

  var selectedItem = document.querySelector("select").value;

  document.querySelector(".Card-api-2").innerHTML = "";
  // Getting All the Data Again on ONCHANGE 

  if (selectedItem === undefined || selectedItem === "Filter by Region" || selectedItem === NaN) {

    document.querySelector(".Card-api").style.display = "block";


    var values = fetch("https://restcountries.com/v3.1/all");

    values.then((promise) => {
      var parsingOfData = promise.json();
      return parsingOfData;
    }).then((promise2) => {
      console.log(promise2);
      promise2.forEach(element => {
        var imgLoc = element.flags.png;
        var imgAlt = element.flags.alt;
        const Markup = `<div class="card rounded-sm border my-8">
              <div class="img">
                <img
                  class="h-40 w-full rounded-t-sm"
                  src= ${imgLoc}
                  alt=${imgAlt}
                />
              </div>
              <div class="about-Country p-4 pb-8">
                <div class="countryName my-6">
                  <h1 class="text-2xl">${element.name.common}</h1>
                </div>
                <div class="details">
                  <div class="population flex flex-col gap-2">
                    <p class="">
                      Population :
                      <span class="font-thin text-sm">${element.population}</span>
                    </p>
                    <p>Region : <span>${element.region}</span></p>
                    <p class="capital">Capital : <span>${element.capital} </span></p>
                  </div>
                </div>
              </div>
            </div>`;
        document.querySelector(".Card-api-2").insertAdjacentHTML('beforeend', Markup)
      });
    })

  } else if (selectedItem) {
    document.querySelector(".Card-api").style.display = "none";

    var values = fetch(`https://restcountries.com/v3.1/region/${selectedItem}`);
    values.then((promise) => {
      var parsingOfData = promise.json();
      return parsingOfData;
    }).then((promise2) => {
      // console.log(promise2);
      promise2.forEach(element => {
        var imgLoc = element.flags.png;
        var imgAlt = element.flags.alt;
        const Markup = `<div class="card rounded-sm border my-8">
              <div class="img">
                <img
                  class="h-40 w-full rounded-t-sm"
                  src= ${imgLoc}
                  alt=${imgAlt}
                />
              </div>
              <div class="about-Country p-4 pb-8">
                <div class="countryName my-6">
                  <h1 class="text-2xl">${element.name.common}</h1>
                </div>
                <div class="details">
                  <div class="population flex flex-col gap-2">
                    <p class="">
                      Population :
                      <span class="font-thin text-sm">${element.population}</span>
                    </p>
                    <p>Region : <span>${element.region}</span></p>
                    <p class="capital">Capital : <span>${element.capital} </span></p>
                  </div>
                </div>
              </div>
            </div>`;
        document.querySelector(".Card-api-2").insertAdjacentHTML('beforeend', Markup)
      });
    })
  }
}


// Click Is INCOMPLETE
function handleCardClick(event) {
  var values = fetch("https://restcountries.com/v3.1/all");

}





