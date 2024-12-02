var mealArray = [];
var currentMeal = [];

window.addEventListener("load", () => {
  switchTheme();
  buttonLoadModalFunctionalities();
});

function switchTheme() {
  let icon = document.querySelector("#icon-brand");
  let iconTheme = document.querySelector("#icon-theme")
  document.getElementById("btnSwitchTheme").addEventListener("click", () => {
    if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
      document.documentElement.setAttribute("data-bs-theme", "light");
      icon.classList.replace("bi-emoji-smile-fill", "bi-emoji-frown-fill");
      iconTheme.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      icon.classList.replace("bi-emoji-frown-fill", "bi-emoji-smile-fill");
      iconTheme.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
    }
  });
}

function buttonLoadModalFunctionalities() {

  let button = document.getElementById("buttonLoadModal");
  var modal = new bootstrap.Modal(document.getElementById("loadModal"));  
  
  button.addEventListener("click", () => {

    setTimeout(() => {
      modal.hide();
      createMealElement();
    }, 1000)
    
  });

}

async function getMealsFromAPI() {
  try {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`);
    return await response.json();
  } catch (error) {
    console.error(`Error al obtener frutas: ${error}`);
    return [];
  }
}

async function createMealElement() {
  mealArray = await getMealsFromAPI();

  let mealsContainer = document.getElementById("mealsContainer");

  mealsContainer.innerHTML = "";

  mealArray.meals.forEach(meal => {
    
    let col = document.createElement("div");
    col.classList.add("col");

    let primaryDiv = document.createElement("div");
    primaryDiv.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("card-img")
    img.src = meal.strMealThumb;

    let secondaryDiv = document.createElement("div");
    secondaryDiv.classList.add("card-img-overlay");

    let pName = document.createElement("p");
    pName.classList.add("card-text", "bg-dark", "bg-gradient", "rounded", "text-truncate", "px-1");
    pName.innerText = meal.strMeal;

    let pId = document.createElement("p");
    pId.classList.add("card-text", "bg-dark", "bg-gradient", "rounded", "px-1");

    let small = document.createElement("small");
    small.innerText = meal.idMeal;

    let button = document.createElement("button");
    button.type = "button";
    button.innerText = "Información"
    button.classList.add("btn", "btn-primary");

    button.addEventListener("click", () => { showMealInformation(meal.idMeal); })

    mealsContainer.appendChild(col);
    col.appendChild(primaryDiv);
    primaryDiv.appendChild(img);
    primaryDiv.appendChild(secondaryDiv);
    secondaryDiv.appendChild(pName);
    secondaryDiv.appendChild(pId);
    pId.appendChild(small)
    secondaryDiv.appendChild(button)


    
  });

}

async function showMealInformation(id) {

  currentMeal = await getIndividualMealInformationFromAPI(id);

  let currentMealContainer = document.getElementById("currentMealContainer");

  currentMealContainer.innerHTML = "";

  currentMeal.meals.forEach(meal => {

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("col-12", "text-center")
    titleDiv.innerText = meal.strMeal;

    let descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("col-12", "col-xl-8");
    descriptionDiv.innerText = `Instrucciones: ${meal.strInstructions}`;

    let ingredientsDiv = document.createElement("div");
    ingredientsDiv.classList.add("col-12", "col-xl-4");
    
    let ingredientsTitle = document.createElement("div");
    ingredientsTitle.classList.add("row");
    ingredientsTitle.innerText = 'Ingredientes';

    let ingredientsElementsDiv = document.createElement("div");
    ingredientsElementsDiv.classList.add("row");
    ingredientsElementsDiv.innerText = `${meal.strInstructions}`;

    currentMealContainer.appendChild(titleDiv);
    currentMealContainer.appendChild(descriptionDiv);
    currentMealContainer.appendChild(ingredientsDiv);
    ingredientsDiv.appendChild(ingredientsTitle);
    ingredientsDiv.appendChild(ingredientsElementsDiv);
  });
  
}

async function getIndividualMealInformationFromAPI(id) {  
  try {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    return await response.json();
  } catch (error) {
    console.error(`Error al obtener frutas: ${error}`);
    return [];
  }
}