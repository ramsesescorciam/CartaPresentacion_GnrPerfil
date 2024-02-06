const nombre = document.querySelector("input");
const form = document.querySelector("form")
const label = document.querySelector("h3")

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(!nombre.value.trim()){
        alert("Debe escribir algo");
        return;
    }
    label.innerHTML = nombre.value;
})