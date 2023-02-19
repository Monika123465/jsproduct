let cartitem = JSON.parse(localStorage.getItem('cartdata')) || []

cartitem.forEach((el)=>{
  let cartpageslist=document.createElement('div')
  cartpageslist.classList.add('cartpageslist')
    let cartpage=document.createElement('div')
    cartpage.classList.add('cartpage')
    let image=document.createElement('img')
    image.src=el.thumbnail
    image.classList.add('cartimg')
     let textcontainer=document.createElement('div')
   let h3=document.createElement('p')
    h3.innerText=el.title
    let p=document.createElement('p')
    p.innerText=el.description
    textcontainer.append(h3,p)
    textcontainer.classList.add('textcontainer')
    cartpage.append(image,textcontainer)
    let cartarr=document.createElement('div')
    cartarr.classList.add('cartprice')
    let price=document.createElement('p')
    price.innerText= "₹ " + el.price
    cartarr.append(price)
    let quantityadd=document.createElement('div')
    quantityadd.classList.add('cartquantity')
   let inputvalue=document.createElement('input')
   inputvalue.addEventListener('change',(e)=>{
    let value=e.target.value
    let cartitem = JSON.parse(localStorage.getItem('cartdata')) || []
   
   for(let i=0;i<cartitem.length;i++){
    let total=cartitem[i]
    if(total.id===el.id){
       total.quantity=value ? +value:1
    }
   }
    
localStorage.setItem('cartdata', JSON.stringify(cartitem));
    calculateprice();


   })
    inputvalue.type="number"
    inputvalue.value=el.quantity
    inputvalue.classList.add('inputvalue')
    quantityadd.append(inputvalue)

    let removearr=document.createElement('button')
    removearr.innerHTML="Remove item"
    removearr.classList.add('btn')
   
    

  let cart=document.querySelector('.cart-div')
  cartpageslist.append(cartpage,cartarr,quantityadd,removearr)
  cart.append(cartpageslist)
})

function calculateprice(){
  let cartitem = JSON.parse(localStorage.getItem('cartdata')) || []
  
  const priceeleme = document.querySelector('.subtotalprice')
  let totalprice = 0;
  for(let i = 0; i< cartitem.length; i++) {
    totalprice = totalprice + (cartitem[i].price * cartitem[i].quantity)
  }

  priceeleme.innerHTML = " ₹" + totalprice
  
}
calculateprice()
function checkout(){
  window.location.href="checkout.html"
}
