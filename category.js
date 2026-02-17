
const loadCategoryBtn = ()=>{
    const url ="https://fakestoreapi.com/products/categories";
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayBtn(data))
}

const displayBtn=(category)=>{
    // console.log(category)
    const btnContainer = document.getElementById("btn-container");
    btnContainer.innerHTML ="";
    for(let cat of category){
        console.log(cat)
        const btnDiv =document.createElement('div');
        btnDiv.innerHTML=`
        <div class="btn btn-primary">${cat}</div>
        `;
        btnContainer.append(btnDiv);
    }
}
loadCategoryBtn();