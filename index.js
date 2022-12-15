document.addEventListener('DOMContentLoaded', () => {
    let cocktails;
    const cocktailInfo = document.querySelector("#cocktail-info");
    const mainCocktailsUl = document.querySelector("#cocktail-list");
    const cocktailBtn = document.querySelector("#cocktails").addEventListener('click', renderCocktails)
    let likes = 0

    const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})
    
    function fetchCocktails() {
        fetch("http://localhost:3000/cocktails")
        .then(res => res.json())
        .then(data => {
            cocktails = data
            
            
        })
    }
   
    
            
    function renderCocktails(){
        
        mainCocktailsUl.innerHTML = ''
        cocktails.forEach(cocktail =>{
            
            cocktailInfo.innerHTML = ''
            mainCocktailsUl.innerHTML += `
            <li id="cocktails-list"> ${cocktail.name}
            <button id="${cocktail.id}" class="get-recipe">Click for recipe</button>
            <button id="like-button" class="like"><span class="like-glyph">&#x2661;</span></button>
            <span id="likes"> ${likes} </span>
            </li>
            `
        

            
                

                
            
           
            
            
         renderOneCocktail()
         increaseLikes()
         
         

            })
    }

    function increaseLikes(){
        let likeButton = document.querySelectorAll("#like-button.like")
        let likeResult = document.querySelectorAll("#likes")
        
        likeButton.forEach((i)=>{
            i.addEventListener('click',()=>{
                likeResult.innerHTML = `${likes}`
                i = likeResult++
                
                
                
                
            })
        })
        
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
    
    fetchCocktails()
    
    
    
    
})
