

//username mora biti admin
//password more biti 123456
// ako je ovo tacno, u locakl storage treba da bise "loggedIn" true
    let username = document.getElementById("username")
    let password = document.getElementById("password")
    let form = document.getElementById("form");
    let logoutbtn = document.getElementById("logout")
    let loggedIn = localStorage.getItem("loggedIn");


    logoutbtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        window.location.reload();
    })

  console.log(loggedIn);

  if (loggedIn === null) {
    form.style.display = "block"
  } else {
  
    form.style.display = "none"
    logoutbtn.style.display = "block";
  }

loginbtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim().toLowerCase();
if (username === "admin" && password === "123456") {
 localStorage.setItem("loggedIn", "true");
 console.log("you've successfully logged in, redirecting to dashboard!")
 window.location.reload();
} else {
    console.log("Login Failed, email or password is incorrect!");
}



})


//    if (loggedIn === "null") {
//         form.style.display = "block"
//     } else {
//         form.style.display = "none"
//         logoutbtn.style.display = "block";
//     }