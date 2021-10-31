const searchBtn = document.getElementById("Searth-btn");
const mealContainer = document.getElementById('meals');




searchBtn.addEventListener('click', GetMeal)
function GetMeal(){
    const searchInput = document.getElementById("Search-Input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then(res => res.json())
    .then(data => shoMeal(data.meals))
    
}

function shoMeal(meals){
    let html = "";
    meals.forEach(meal => {
        html +=`<div class="meal-item">
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="">
                    </div>
                    <div class="name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="Recipe-btn" > Get Recipe</a>
                    </div>
                </div> `
       
    });
    mealContainer.innerHTML = html;
    document.getElementById('Search-Input').value = ""
}