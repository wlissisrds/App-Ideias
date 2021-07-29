const pratos = document.querySelector("#recipes");

const nameRecipe = document.querySelector("#recipe-name");
const imageRecipe = document.querySelector("#recipe-img");
const descriptionRecipe = document.querySelector("#description-recipe");




const url = `https://www.themealdb.com/api/json/v1/1/categories.php`

async function getContent() {
    try {
        const response = await fetch(url)
        // console.log(response)
        const data = await response.json();
        console.log(data.categories)
        recipeList(data.categories)
    } catch (error) {
        console.log("Erro na requisição" + error)
    }
}

getContent()

function recipeList(recipes) {

    recipes.forEach(element => {
        createElement(element)
    });

}


function createElement(element) {
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    h2.innerHTML = element.strCategory

    li.appendChild(h2);
    pratos.appendChild(li);

    li.addEventListener("click", () => { showRecipe(element) })

}

function showRecipe(recipe) {
    nameRecipe.innerHTML = recipe.strCategory;
    imageRecipe.src = recipe.strCategoryThumb;
    descriptionRecipe.innerHTML = `<strong>Description </strong> ${recipe.strCategoryDescription}`;
}
