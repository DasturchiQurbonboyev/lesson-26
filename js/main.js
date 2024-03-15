const API = "https://fakestoreapi.com/products/"
const wrapper = document.querySelector(".wrapper");

const loading = document.querySelector(".loading")


async function fetchData(api) {

    let data = await fetch(api)

    data
        .json()
        .then(res => cerateCard(res))
        .catch(err => console.log(err))
        .finally(() => {
            console.log("Loading");
        })
}


fetchData(API)

function cerateCard(data) {

    data.forEach(({ image, title, category, price, id, rating }) => {

        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <label class="label-category" for="">${category}</label>
                    <h5 class="card-title">${title}</h5>
                    <img class="yulduzcha-img" src="../images/yulduzcha.png" alt="">
                    <label class="yulduzcha-rating" for="">(${rating.rate})</label>
                    <p class="card-text">By <span>Stouffer</span></p>

                    <div class="label-btn">
                        <label class="price" for="">$ ${price}</label>
                        <a href="#" class="btn btn-primary">
                            <img src="../images/Vector.png" alt="">
                            Add
                        </a>
                    </div>
                </div>
            `
        wrapper.appendChild(card)

        card.children[0].addEventListener("click", () => singleRoute(id))
    });
}

function singleRoute(id) {
    window.open(`./products.html?id=${id}`, "_self")
}