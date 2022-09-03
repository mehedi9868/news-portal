// console.log('pera nai chill!!');
// const loadAllData = async () => {
//     const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
//     const data = await response.json();
//     console.log(data)
//     return data;
// }

// loadAllData();//
// console.log(data)
// const setCategory = async () => {
//     const data = await loadAllData();
//     const allCategories = data.data.news_category;
//     const ul = document.getElementById('categories');
//     for (const category of allCategories) {
//         const categoryName = category.category_name;
//         console.log(categoryName)
//         const li = document.createElement('li');
//         li.classList.add('nav-item');
//         // li.innerHTML = `<button id ="category-btn"class=" border px-3 py-2 my-5" onclick = "dynamicDetails('${category.category_id}')">${categoryName}</button>`;
//         li.innerHTML = `<button id ="category-btn"class=" border px-3 py-2 my-5">'${category.category_name}'</button>`;
//         ul.appendChild(li);
//         console.log(li) //
//         return categoryName; //
//     }
//     return categoryName; //
// }

// setCategory();

// const dynamicDetails = async (category_id) => {
//     const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
//     const data = await res.json()
//     console.log(data)
//     // return data;
//     const displayElement = document.getElementById('displayNews');
//     displayElement.innerHTML = `
//         ${data}

//     `
// }
// dynamicDetails();//


// const displayNews = async (news) => {
//     // console.log(data)
//     const displayElement = document.getElementById('displayNews');
//     displayElement.innerHTML = `
//         <h2>${data}</h2>
//     `
// }
// displayNews();


const loadNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => displayCard(data.data));
}

const displayCard = news => {

    const container = document.getElementById('displayNews');
    container.innerHTML = ``;
    news.forEach(element => {
        console.log(element)
        const div = document.createElement('div');
        div.classList.add("card,m-0");
        div.innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${element.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <div class = "mb-5">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.details}</p>
                </div>

                <div class = "d-flex justify-content-between align-items-baseline">
                    <div>
                        <img src="${element.author.img}" class="img-fluid rounded-circle " alt="..." width = "50px">
                        <span>${element.author.name}</span>
                    </div>
                    <p class="card-text">${element.total_view}</p>
                    <button>SEE MORE</button>
                </div>
            </div>
        </div>
    </div> <br>
    `
        container.appendChild(div);
    });

}

// displayCard();

// const loadNews = () => {
//     fetch('https://openapi.programming-hero.com/api/news/category/01')
//         .then(res => res.json())
//         .then(json => console.log(json.data.title))
// }
loadNews();