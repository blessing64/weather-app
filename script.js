let weather, search, btn, loc, temp, country, text
weather = document.querySelector(".weather")
search = document.querySelector(".search")
btn = document.querySelector(".btn")
country = document.querySelector(".country")
loc = document.querySelector(".location")
temp = document.querySelector(".temp")
text = document.querySelector(".text")


btn.addEventListener("click", () => {
    let user_location = search.value.trim()
    if (!user_location) {
        return alert("please enter a city")
    }
    fetch(`http://api.weatherapi.com/v1/current.json?key=747345deb072451b900113052252407&q=${user_location}&aqi=no`)
        .then((response) => response.json())
        .then((data) => {
            //result.classList. remove("result")
            loc.textContent = data.location.name
            counrty.textcontent = data.location.name
            //icon.src = data.current .condition .icon
            text.textContent = data.current.condition.text
            temp.textContent = Math.trunc(Number(data.current.temp_c))
        })

})