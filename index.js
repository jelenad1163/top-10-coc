document.addEventListener('DOMContentLoaded', () => {
    let cocktails;
    const cocktailInfo = document.querySelector("#cocktail-info");
    const mainCocktailsUl = document.querySelector("#cocktail-list");
    const cocktailBtn = document.querySelector("#cocktails").addEventListener('click', renderCocktails)
    
    function fetchCocktails() {
        fetch("http://localhost:3000/cocktails")
        .then(res => res.json())
        .then(data => {
            cocktails = data
            
        })
    }
            
    function renderCocktails(){
        cocktails.forEach(cocktail =>{
            cocktailInfo.innerHTML = ''
            mainCocktailsUl.innerHTML += `
            <li>${cocktail.name}
            <button id="${cocktail.id}">Click for recipe</button></li>
            `
        }) 
    renderOneCocktail()
    }   
            
    function renderOneCocktail(){
    const cocktailButtons = document.querySelectorAll("#cocktail-list button")
    cocktailButtons.forEach((button) => {
        button.addEventListener('mouseover', () =>{
            button.style.color = 'white'
          })
        button.addEventListener('mouseout', () =>{
            button.style.color = 'darkslategrey'
          })
        button.addEventListener("click", function() {
            cocktails.find(cocktail => {
                if(cocktail.id == button.id) {
                    mainCocktailsUl.innerHTML = ''
                    cocktailInfo.innerHTML += `<h2>${cocktail.name}</h2>`
                    cocktailInfo.innerHTML += "<h3>Ingredients</h3>"
                    cocktail.ingredients.forEach(i => {
                    cocktailInfo.innerHTML += `<li>${i}</li>`
                    })
                    cocktailInfo.innerHTML += "<h3>Steps</h3>"
                    cocktail.steps.forEach(i => {
                    cocktailInfo.innerHTML += `<li>${i}</li>`
                    })
                    cocktailInfo.innerHTML += `<img src= "${cocktail.image}">`
                }
            })
        })
    })
    }
              
    function init() {
        fetchCocktails()
    }
    
    init();
})
    






        
                    
    
          
          
          
          
        
    
    
    
    
    
    
    
    
    
        


            
            