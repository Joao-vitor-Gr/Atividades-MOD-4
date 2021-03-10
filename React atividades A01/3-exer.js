/* 3. Faça fetch dos dados através da API 
(https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) 
com os nomes dos primeiros 10 resultados.*/

const fetch = require('node-fetch')

async function fetchDez(url){
   let response = await fetch(url)
   let data = await response.json()

   let Nice = []

    for(let i=0; i<10; i++){
        Nice.push(data.meals[i].strMeal)
     
        console.log(i+1, ":", data.meals[i])
    
    }

    console.log(Nice)
}


fetchDez('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')