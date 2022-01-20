const btn = document.getElementById('btnGetMeal');
const pintar = document.getElementById('info');
const video = document.getElementById('video');
const containerVideo = document.getElementById('container_video');
btn.addEventListener('click', getData);

function getData() {

    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(resp => resp.json())
        .then(data => {
            //categoria - area - tags
            let options = '';
            let tags = '';
            const { strMeal, strInstructions, strMealThumb, strCategory, strArea, strTags, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strYoutube } = data.meals[0];

            if (strTags === null) {
                tags = 'nothing';
            }

            pintar.innerHTML = `
            <h4>${strMeal}</h4>
            <div class="col-md-4 col-sm-5">
                <img src="${strMealThumb}" class="img-fluid" />
                <p>Category: ${strCategory} </p>
                <p>Area: ${strArea} </p>
                <p>Tags: ${tags} </p>

                <div>
                    <h5>Ingredientes</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${strIngredient1}</li>
                        <li class="list-group-item">${strIngredient2}</li>
                        <li class="list-group-item">${strIngredient3}</li>
                        <li class="list-group-item">${strIngredient4}</li>
                        <li class="list-group-item">${strIngredient5}</li>
                    </ul>
                </div>
                
            </div>
            <div class="col-md-8 col-sm-7">
                <p>${strInstructions}</p>
            </div>

            
            `;
            containerVideo.classList.remove('hide')
            containerVideo.classList.add('show');

            video.src = `https://www.youtube.com/embed/${strYoutube.slice(-11)}`;

            console.log(data);
        });
}