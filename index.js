const input = document.getElementById("input")

const maincontainerlower = document.getElementById("maincontainerlower")
async function search() {
    maincontainerlower.innerHTML = ""
    console.log(input.value);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input.value}`)
    const data = await response.json()
    console.log(data);
    if (data.meals) {
        data.meals.map((ele) => {

            maincontainerlower.innerHTML += `
        <div class="card" id=${ele.idMeal}>
                    <div class="cardupper">
                        <img src=${ele.strMealThumb} alt="" style="width: 100%; height: 100%;">
                    </div>
                    <div class="cardlower">
                        <h1>${ele.strMeal}</h1>
                        <button onclick="create(${ele.idMeal})" class="button"><h2>Get Receipe</h2></button>
                    </div>
                </div>
        `
        })
    }
    else {
        maincontainerlower.innerHTML = `<div class="notfound"><h1> Sorry, we didn't find any meal!</h1> </div>`
    }

}

async function create(params) {

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params}`)
    const data = await response.json()
    console.log(data);

    var temp=document.getElementById("temp")
    temp.innerHTML=""

    var maincontainer = document.getElementById("maincontainer")
    console.log(params);
    const div = document.createElement("div")
    div.classList.add("recipecard")


    const cross = document.createElement("div")
    div.appendChild(cross)
    cross.classList.add("cross")
    const crossbutton = document.createElement("button")

    var icon = document.createElement("i")
    // console.log(icon);
    icon.classList.add("fa")
    icon.classList.add("fa-times")
    icon.classList.add("fa-2x")
    crossbutton.appendChild(icon)

    crossbutton.onclick = function () {
        temp.innerHTML=""
    };


    cross.appendChild(crossbutton)

    const recipecardname = document.createElement("div")
    div.appendChild(recipecardname)
    recipecardname.classList.add("recipecardname")
    const recipecardnameh1 = document.createElement("h1")
    var recipecardnamemeal = document.createTextNode(data.meals[0].strMeal)
    recipecardnameh1.appendChild(recipecardnamemeal)
    recipecardname.appendChild(recipecardnameh1)


    // strCategory

    const recipecardinput = document.createElement("div")
    div.appendChild(recipecardinput)
    recipecardinput.classList.add("recipecardinput")
    const recipecardinputh1 = document.createElement("h3")
    var recipecardinputmeal = document.createTextNode(data.meals[0].strCategory)
    recipecardinputh1.appendChild(recipecardinputmeal)
    recipecardinput.appendChild(recipecardinputh1)


    const recipecardinstruction = document.createElement("div")
    div.appendChild(recipecardinstruction)
    recipecardinstruction.classList.add("recipecardinstruction")
    const recipecardinstructionh2 = document.createElement("h2")
    var recipecardinstructioninstruction = document.createTextNode("Instructions:")
    recipecardinstructionh2.appendChild(recipecardinstructioninstruction)
    recipecardinstruction.appendChild(recipecardinstructionh2)

    // strInstructions

    const recipecardpara = document.createElement("div")
    div.appendChild(recipecardpara)
    recipecardpara.classList.add("recipecardpara")
    const recipecardparapara = document.createElement("p")
    var recipecardparasteps = document.createTextNode(data.meals[0].strInstructions)
    recipecardparapara.appendChild(recipecardparasteps)
    recipecardpara.appendChild(recipecardparapara)


    // strMealThumb


    const recipecardimg = document.createElement("div")
    div.appendChild(recipecardimg)
    recipecardimg.classList.add("recipecardimg")
    var img = document.createElement('img');
    img.style.width = "100px"
    img.style.height = "100px"
    img.src = data.meals[0].strMealThumb;
    recipecardimg.appendChild(img);

    // strYoutube

    const recipecardvideo = document.createElement("div")
    div.appendChild(recipecardvideo)
    recipecardvideo.classList.add("recipecardvideo")
    const recipecardvideoa = document.createElement("a")
    var recipecardwatchvideo = document.createTextNode("Watch Video")
    recipecardvideoa.appendChild(recipecardwatchvideo)
    recipecardvideoa.href = data.meals[0].strYoutube;
    recipecardvideo.appendChild(recipecardvideoa)


    temp.appendChild(div) 
    maincontainer.appendChild(temp) 
    document.body.appendChild(maincontainer)
}
