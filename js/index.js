const loadAllData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    return data;
}

// loadAllData();

let categoryId = 0;
const setCategory = async () => {
    const data = await loadAllData();
    const allCategories = data.data.news_category;
    const ul = document.getElementById('categories');
    for (const category of allCategories) {
        const categoryName = category.category_name;
        categoryId = category.category_id;
        // console.log(categoryName);
        // console.log(categoryId);
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `
            <button id = "category-btn" onclick = "loadNews('${category.category_id}')">${categoryName}</button>
        `
        ul.appendChild(li);
    }

}
setCategory();


const loadNews = (id = '03') => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
        .then(res => res.json())
        .then(data => displayCard(data.data));
}


const displayCard = news => {

    const container = document.getElementById('displayNews');
    container.innerHTML = ``;
    news.forEach(element => {
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
                    <button onclick = "${displayModal()}" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        SEE MORE
                    </button>
                </div>
            </div>
        </div>
    </div> <br>
    `
        container.appendChild(div);
    });

}
loadNews();


// for modal

const displayModal = modals => {
    const modal = document.getElementById('modal');
        modal.innerHTML = `
            <div class="modal-body">
                <img src="">
                <p></p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>`
};
