const signin=document.getElementById('signin').addEventListener('click',function(e){
    window.location.href='signin.html'
})

async function getproduct() {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    console.log(data)
    appendData(data)

}
getproduct()
let product = document.getElementById('hero-section')
const appendData = (data) => {
    data.products.forEach(function (el) {
        let store = document.createElement('div')
        store.classList = 'products'
        let image = document.createElement('img')
        image.src = el.thumbnail
        image.classList='product-img'
        let title = document.createElement('h1')
        title.innerText = el.title
        let descr = document.createElement('p')
        descr.innerText = el.description
        let price = document.createElement('p')
        price.innerText = el.price
        let category = document.createElement('p')
        category.innerText = el.category
        let addtocart = document.createElement('button')
        addtocart.innerHTML = "Add to cart"
        store.append(image, title, descr, price, category, addtocart)
        product.append(store)

    })

}