let categoriesSection = document.querySelector('.foodi-categorie .categories')
categoriesSection.innerHTML ="";
function GetMeals(search){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(response => response.json())
    .then(data =>{
        let html="";
                html +=`
                <div class="box">
                    <div class="pic text-center">
                        <img src="${data.meals[0].strMealThumb}" class="img-200 border-r-10" alt="Foodi food">
                    </div>
                    <div class="details title pt-15">
                        <h2>${data.meals[0].strMeal}</h2>
                        <p>100 Items</p>
                    </div>
                </div>
                `;
            categoriesSection.innerHTML += html;
    })
}
GetMeals("Tuna and Egg Briks");
GetMeals("Laksa King Prawn Noodles");
GetMeals("Madeira Cake");
GetMeals("Pancakes");

let menu = document.querySelector('nav ul');
let btnmenu = document.querySelector('nav button');
let icons = document.querySelector('nav .icons');
menu.onclick = function(e){
    e.stopPropagation();
}
btnmenu.addEventListener('click',function(e){
    e.stopPropagation();
    btnmenu.style.right = '-215px';
    icons.style.right = '-80px'
    menu.style.right = '0';
})
function hidemenu(e){
    btnmenu.style.right = '0px';
    menu.style.right = '-215px';
    icons.style.right = "-500px";
}