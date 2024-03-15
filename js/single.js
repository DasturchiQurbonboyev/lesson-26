const API = "https://fakestoreapi.com/products/"

const products = document.querySelector(".product")

const notFound = document.querySelector(".not-found")

async function fetchSingleUser(api) {
    let params = new URLSearchParams(window.location.search)
    let id = params.get("id")


    let data = await fetch(`${api}/${id}`)

    data
        .json()
        .then(res => {
            if (res.message) {
                return notFound.style.display = "flex"
            }
            singleUser(res)
        })
        .catch(err => console.log("error>>>>>", err))
}

fetchSingleUser(API)


function singleUser(product) {

    products.innerHTML = `
               <div class="product__left">
               <div class="pro-img">
                    <img class="products-image" src="${product.image}" alt="">
               
               </div>
                    <div class="images-card">
                        <img class="products-image imageses1" src="${product.image}" alt="">
                        <img class="products-image imageses2" src="${product.image}" alt="">
                        <img class="products-image imageses3" src="${product.image}" alt="">
                        <img class="products-image imageses4" src="${product.image}" alt="">
                    </div>
                </div>
                <div class="product__rigth">
                    <h2 class="product-title">${product.title}</h2>
                    <p class="product-description">${product.description}</p>
                    <hr>
                    <img src="../images/yulduzcha.png" alt="">
                    <span>( 75 Review)</span>
                    <div class="product__right__bottom">
                        <div class="product__right__bottom__left">
                            <div>
                                <span>Brand</span>
                                <span>:</span>
                            </div>
                            <div>
                                <span>Flavour</span>
                                <span>:</span>
                            </div>
                            <div>
                                <span>Diet Type</span>
                                <span>:</span>
                            </div>
                            <div>
                                <span>Weight</span>
                                <span>:</span>
                            </div>
                            <div>
                                <span>Speciality</span>
                                <span>:</span>
                            </div>
                            <div>
                                <span>Info</span>
                                <span>:</span>
                            </div>
                            <div>
                                <span>Items</span>
                                <span>:</span>
                            </div>
                        </div>
                        <div class="product__right__bottom__right">
                            <p>ESTA BETTERU CO</p>
                            <p>Super Saver Pack</p>
                            <p>Vegetarian</p>
                            <p>${product.rating.count} Grams</p>
                            <p>Gluten Free, Sugar Free</p>
                            <p>Egg Free, Allergen-Free</p>
                            <p>1</p>
                        </div>
                    </div>
                    <div class="price">
                        <h1>$ ${product.price}</h1>
                        <div>
                            <span>
                                Size/Weight :
                            </span>
                            <button>50kg</button>
                            <button>80kg</button>
                            <button>120kg</button>
                            <button>200kg</button>
                        </div>
                    </div>
                    <div class="add__to__card">
                        <button class="btn--padding">1</button>
                        <div style="display: inline-block;">
                            <button id="qoshuvchi__btn" style="display: block;">+</button>
                            <button id="qoshuvchi__btn" style="display: block;">-</button>
                        </div>
                        <button class="qizil__btn">Add to cart</button>
                        <button class="btn--padding"><img src="../images/likecha.png" alt=""></button>
                        <button class="btn--padding"><img src="../images/koz.png" alt=""></button>
                    </div>
                </div>
            `
    products.appendChild(card)
}