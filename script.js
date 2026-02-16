const loadProducts = () => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
        .then(res => res.json())
        .then((products) => displayProducts(products))
}
const displayProducts = (products) => {
    // console.log(products)
    const productsContainer = document.getElementById("products-container")
    productsContainer.innerHTML = "";
    const firstFour = products.slice(0,4)
    for(let product of firstFour){
        console.log(product);
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML=`
           <div class="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img src="${product.image}" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${product.title}</h2>
                    <p>${product.description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            `;
            productsContainer.append(cardDiv);
        }
}
loadProducts()