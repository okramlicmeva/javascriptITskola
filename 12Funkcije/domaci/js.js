function login(username, password){
    if (username === "admin" && password === "admin"){
        return true;

    }

    return false;
}


let ulogovaoSe = login("admin", "admin");
console.log(ulogovaoSe);