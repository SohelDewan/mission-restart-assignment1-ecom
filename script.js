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
                <div class="card-body ">
                <div class="flex gap-20">
                <p class='capitalize bg-[#EEF2FF] text-[#4F39F6] rounded-xl p-1 '>${product.category}</p>
                <p class="ml-4">Rating:${product.rating.rate} (${product.rating.count})</p>
                </div>            
                    <h2 class="card-title">${product.title}</h2>
                    <h2 class="text-3xl font-bold">$${product.price}</h2>
                    <div class="card-actions justify-between">                        
                        <button class="btn"><i class="fa-regular fa-eye"></i>Details</button>
                        <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>Add</button>
                    </div>
                </div>
            </div>
            `;
            productsContainer.append(cardDiv);
        }
}
loadProducts()