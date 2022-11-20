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
    






        
                    
    
          
          
          
          
        
    
    
    
    
    
    
    
    
    
        


            
            // cocktailInfo.innerHTML += "<h3>Ingredients</h3>"
                    // cocktail.ingredients.forEach(i => {
                    //     cocktailInfo.innerHTML += `<li>${i}</li>`
                   // })
                    // cocktailInfo.innerHTML += "<h3>Steps</h3>"

                    // cocktail.steps.forEach(i => {
                        //     cocktailInfo.innerHTML += `<li>${i}</li>`
                        // })
                        // cocktailInfo.innerHTML += `<img src= "${cocktail.image}">`
                    // cocktails.forEach(i => {
                    //         cocktailInfo.innerHTML += `<li>${i}</li>`
                    //     })
                        
                    //     cocktailInfo.innerHTML += "<h3>Steps</h3>"
                        
                    //     cocktails.steps.forEach(i => {
                    //         cocktailInfo.innerHTML += `<li>${i}</li>`
                    //     })
                        
                    //     cocktailInfo.innerHTML += `<img src= "${cocktail.image}">`
        
    // const displayCocktail = (event) => {
    // console.log(event)
    // mainCocktailsUl.innerHTML = ''
    // let cocktailItem = cocktails.find(cocktail => {
    //     // return cocktail === event.target.id
    //     if(cocktail.id === event.target.id){
    //         cocktailInfo.innerHTML += `<h2>${cocktail.name}</h2>`
    //         cocktailInfo.innerHTML += "<h3>Ingredients</h3>"
    //      }
    //     })
    
    // }

           


        
    
    
        // const getRecipeBtn = document.querySelector("#recipe-button").addEventListener('click', displayCocktail)
        
    //    fetchCocktails()
    
    






// if(cocktail.id == event.target.id){
                // cocktailInfo.innerHTML += `<h2>${cocktailItem.name}</h2>`
                // cocktailInfo.innerHTML += "<h3>Ingredients</h3>"
                // }
                // cocktailItem.forEach(i => {
                //     cocktailInfo.innerHTML += `<li>${i}</li>`
                // })
                
                // cocktailInfo.innerHTML += "<h3>Steps</h3>"
                
                // cocktailItem.steps.forEach(i => {
                //     cocktailInfo.innerHTML += `<li>${i}</li>`
                // })
                
                // cocktailInfo.innerHTML += `<img src= "${cocktailItem.image}">`
             
    
            
        
    
    // const items = [{label: "milk", price: 2}, {label: "banana", price: 10}, {label: "ice cubes", price: 1}]
    // const foundItem = items.find(item => {
    //   return item.label === "banana"
    // })
    // console.log(foundItem)
    
                
                
            

    
    



    

    // function getCocktails() {
       
    //     cocktailInfo.innerHTML = ''
    //     // mainCocktailsUl.innerHTML = ''


    //     cocktails.forEach(cocktail => {

    //         mainCocktailsUl.innerHTML += `
    //                 <li>${cocktail.name}
    //                 <button id= "${cocktail.id}">Get ${cocktail.name} Recipe</button></li>
    //                 `
    //     }
    //     )

    //     attachClicksToBtn();

    // }

    // const attachClicksToBtn = () => {
    //     const mainCocktailsUl = document.querySelectorAll("#cocktail-list li button")
       
        
    //     mainCocktailsUl.forEach((cocktail) => {
    //         console.log(cocktail)
    //         cocktail.addEventListener('click', displayCocktail)
    //         cocktail.addEventListener('mouseover', () => {
    //             cocktail.style.color = 'white'
    //         }
    //         )
    //         cocktail.addEventListener('mouseout', () => {
    //             cocktail.style.color = 'darkslategrey'

    //         })
    //     }
    //     )
    // }

    // const displayCocktailItem = (e) => {
    //     const mainCocktailsUl = document.querySelector("#cocktail-list");
    //     mainCocktailsUl.innerHTML = "";
    //     console.log(e.target.id);
    //     let cocktailItem = cocktails.find((cocktail) => {
    //         return cocktail.id === parseInt(e.target.id)
    //     })

    //     console.log(cocktailItem)
    //     mainCocktailsUl.innerHTML += `
    //         <h2>${cocktailItem.name}</h2>
    //         <h3>Ingredienets</h3>
    //         <img src= "${cocktailItem.image}" alt="${cocktailItem.name}">
    //     `

    // }



