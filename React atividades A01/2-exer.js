//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.


const fetch = require('node-fetch')

fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then( (response) => {
    if(response.ok) return response.json()
})
.then((data)=>{
    //Formato:
    console.log("")
    console.log(`Formato: ${data.meals[0].strCategory}`)
    console.log("")
    //Nome: [nome]
    console.log(`Nome: ${data.meals[0].strMeal}`)
    console.log("")
    //ID: [id]
    console.log(`ID: ${data.meals[0].idMeal}`)
    console.log("")
    //Região: [area]
    console.log(`Região: ${data.meals[0].strArea}`)
    console.log("")
    //Ingredientes: [ingredientes (string única)]
    console.log(`Ingredientes: ${data.meals[0].strIngredient1}, ${data.meals[0].strIngredient2}, ${data.meals[0].strIngredient3}, ${data.meals[0].strIngredient4}, ${data.meals[0].strIngredient5}, ${data.meals[0].strIngredient6}, ${data.meals[0].strIngredient7}, ${data.meals[0].strIngredient8}, ${data.meals[0].strIngredient9}`)
    console.log("")
    //Instruções: [instruções]
    console.log(`Instruções: ${data.meals[0].strInstructions}`)
})