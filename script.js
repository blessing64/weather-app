let weather, search, btn, loc, temp, country, text
weather = document.querySelector(".weather")
search = document.querySelector(".search")
btn = document.querySelector(".btn")
country = document.querySelector(".country")
loc = document.querySelector(".location")
temp = document.querySelector(".temp")
text = document.querySelector(".text")
img = document.querySelector("img")


btn.addEventListener("click", () => {
    let user_location = search.value.trim()
    if (!user_location) {
        return alert("please enter a city")
    }
    fetch(`https://api.weatherapi.com/v1/current.json?key=747345deb072451b900113052252407&q=${user_location}&aqi=no`)
        .then((response) => response.json())
        .then((data) => {
            //result.classList. remove("result")
            loc.textContent = data.location.name
            country.textContent = data.location.country
            //icon.src = data.current .condition .icon
            text.textContent = data.current.condition.text
            temp.textContent = Math.trunc(Number(data.current.temp_c))
            img.src="https:"+data.current.condition.icon

        })

})
let htmlbody = document.querySelector("body")
let changeModeBtn = document.querySelector(".mode")

changeModeBtn.addEventListener("click",() =>{
    htmlbody.classList.toggle("NightMode")
})