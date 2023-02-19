const signin = document.getElementById('signin').addEventListener('click', function (e) {
    window.location.href = 'signin.html'
})
async function getproduct(search) {
   const res = await fetch('https://dummyjson.com/products?search=${}')
        const data = await res.json()
    if (search) {
         data.products = data.products.filter(el => {
            return el.title.toLowerCase().includes(search.toLowerCase())
        })
    }
    
    appendData(data)

}
getproduct()
const inputfiled = document.getElementById('search')

inputfiled.addEventListener('input', (e) => {
    console.log(e.target.value)
    getproduct(e.target.value);
})
let product = document.getElementById('hero-section')
const appendData = (data) => {
    product.innerHTML = null;
    data.products.forEach(function (el) {
        let store = document.createElement('div')
        store.classList = 'products'
        let image = document.createElement('img')
        image.src = el.thumbnail
        image.classList = 'product-img'
        let title = document.createElement('h1')
        title.innerText = el.title
        let descr = document.createElement('p')
        descr.innerText = el.description
        let price = document.createElement('p')
        price.innerText ="₹ "+el.price
        let category = document.createElement('p')
        category.innerText = el.category
        let addtocart = document.createElement('button')
        addtocart.innerHTML = "Add to cart"
        addtocart.classList.add('button')
        addtocart.addEventListener('click', function () {
            let cartitem = JSON.parse(localStorage.getItem('cartdata')) || []
           let flag=false
           for(let i=0;i<cartitem.length;i++){
            let  elem=cartitem[i]
            if(elem.id===el.id){
                elem.quantity=elem.quantity+1
                elem=elem
                flag=true
                break
            }
           }
           if(flag==false){
            el.quantity=1
            cartitem.push(el)
           }
            
            localStorage.setItem("cartdata", JSON.stringify(cartitem))
             window.location.href = "cart.html"
        })
        store.append(image, title, descr, price, category, addtocart)
        product.append(store)


    })

}