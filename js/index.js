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
        li.innerHTML = `<button class="bg-body border px-3 py-2 my-5" onclick = "">${categoryName}</button>`;
        ul.appendChild(li);
    }
}

setCategory();