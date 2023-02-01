
let form = document.getElementById("form")
form.addEventListener("submit", function (e) {
    e.preventDefault()
    let name = form.name.value
    let email = form.email.value
    let password = form.password.value

    let data = new user(name, email, password)
    let signupuser = JSON.parse(localStorage.getItem("user")) || []
    signupuser.push(data)
    localStorage.setItem("user", JSON.stringify(signupuser))
   
    
    if(!name || !email || !password) {
        alert('all field are required')
        return
    }else{
        window.location.href="signin.html"
    }

})
function user(n, e, p) {
    this.name = n,
        this.email = e,
        this.password = p

}

