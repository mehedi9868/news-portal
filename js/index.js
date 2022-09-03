console.log('pera nai chill!!');
const loadAllData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    return data;
}

const setCategory = async () => {
    const data = await loadAllData();
    const allCategories = data.data.news_category;
    const ul = document.getElementById('categories');
    for (const category of allCategories) {
        const categoryName = category.category_name;
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `<button id ="category-btn"class=" border px-3 py-2 my-5" onclick = "dynamicDetails('${category.category_id}')">${categoryName}</button>`;
        ul.appendChild(li);
    }
}

setCategory();

const dynamicDetails = async (category_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    const data = await res.json()
    console.log(data)
    // return data;
    const displayElement = document.getElementById('displayNews');
    displayElement.innerHTML = `
        ${data}
    `
}



// const displayNews = async (news) => {
//     // console.log(data)
//     const displayElement = document.getElementById('displayNews');
//     displayElement.innerHTML = `
//         <h2>${data}</h2>
//     `
// }
// displayNews();
