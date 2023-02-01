let loginuser=JSON.parse(localStorage.getItem("user")) || []
console.log(loginuser)

let form=document.getElementById('form')
form.addEventListener("submit",function(e){
    e.preventDefault()
    let email=form.email.value
    let password=form.password.value

    let value=false
    for(let i=0;i<loginuser.length;i++){
        let el=loginuser[i]
        if(el.email===email&&el.password===password){
            value=true
        }
    }
    if(value==false){
        alert('wrong credentials')
        window.location.href="signup.html"
    }else{
        let users={
            email:email,
            password:password
        }
        localStorage.setItem("login",JSON.stringify(users))
        window.location.href='index.html'
    }
    
    
})

