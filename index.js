document.addEventListener('DOMContentLoaded', () =>{
    const cocktailBtn = document.querySelector("#cocktails").addEventListener('click', getCocktails)
    getCocktails()
   })

const displayCocktail = (event) => {
const cocktailInfo = document.querySelector("#cocktail-info")
const mainCocktailsUl= document.querySelector("#cocktail-list")
mainCocktailsUl.innerHTML = ''
    fetch("http://localhost:3000/cocktails")
        .then(res => res.json())
        .then(data => {
            data.forEach(cocktail => {
                if(cocktail.id == event.target.id){
                cocktailInfo.innerHTML += "<h2>"+cocktail.name +"</h2>"
                cocktailInfo.innerHTML += "<h3>Ingredients</h3>"
                cocktailInfo.innerHTML += "<ul>"
                cocktail.ingredients.forEach(i => {
                    cocktailInfo.innerHTML += "<li>" + i + "</li>"
                })
                cocktailInfo.innerHTML += "</ul>"
                cocktailInfo.innerHTML += "<h3>Steps</h3>"
                cocktailInfo.innerHTML += "<ol>"
                cocktail.steps.forEach(i => {
                    cocktailInfo.innerHTML += "<li>" + i + "</li>"
                })
                cocktailInfo.innerHTML += "</ol>"
                cocktailInfo.innerHTML += "<img src='" + cocktail.image+"'>"
                }
            }
            )
        }
        )
}

function getCocktails(){
    const mainCocktailsUl= document.querySelector("#cocktail-list")
    const cocktailInfo = document.querySelector("#cocktail-info")
    cocktailInfo.innerHTML = ''
    mainCocktailsUl.innerHTML = ''
    fetch("http://localhost:3000/cocktails")
    .then(res => res.json())
    .then(data => {
        data.forEach(cocktail => {
            mainCocktailsUl.innerHTML += `
                <li>${cocktail.name}
                <button id= "${cocktail.id}">Get ${cocktail.name} Recipe</button></li>
                `
                attachClicksToBtn()
            }
        )}
    )}
                
const attachClicksToBtn = () =>{
    const cocktails = document.querySelectorAll('button')
    cocktails.forEach((cocktail) => {
        cocktail.addEventListener('click', displayCocktail)
        cocktail.addEventListener('mouseover', () =>{
            cocktail.style.color= 'white'
        }
        )
        cocktail.addEventListener('mouseout', () =>{
            cocktail.style.color= 'darkslategrey'
        })
    }  
    )}
    