const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".seccion-con-ajax .ciudades");

const apiKey = "828a09bf28f7eb949ac7d6adcfb6c8eb";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;
  
    const listaDeItems = list.querySelectorAll(".seccion-con-ajax .ciudad");
    const listaDeItemsArray = Array.from(listaDeItems);
  
    if (listaDeItemsArray.length > 0) {
      const arrayFiltrado = listaDeItemsArray.filter(elem => {
        let content = "";

        if (inputVal.includes(",")) {

          if (inputVal.split(",")[1].length > 2) {
            inputVal = inputVal.split(",")[0];
            content = elem.querySelector(".nombre-ciudad span").textContent.toLowerCase();
          } else {
            content = elem.querySelector(".nombre-ciudad").dataset.name.toLowerCase();
          }
        } else {
          content = elem.querySelector(".nombre-ciudad span").textContent.toLowerCase();
        }
        return content == inputVal.toLowerCase();
      });
  
      if (arrayFiltrado.length > 0) {
        msg.textContent = `El tiempo para ${
          arrayFiltrado[0].querySelector(".nombre-ciudad span").textContent
        } ...si no, sea más específico indicando también el código de país 😉`;
        form.reset();
        input.focus();
        return;
      }
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("li");
      li.classList.add("ciudad");
      const markup = `
        <h2 class="nombre-ciudad" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="temp-ciudad">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="icono-ciudad" src="${icon}" alt="${
        weather[0]["description"]
      }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = "Buscá mejor, choco 😩";
    });

});