//ako korisnik nije ulogovan, vratiti ga na index.html

let loggedIn = localStorage.loggedIn;

//ako smo dobili null od parsera -> onda ga postavi kao prazan array... 
// ako imamo || oni sluize da provere da li je podatak null, ako je prvi null, drugi je prazan niz. 
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = document.getElementById("tasksList")
console.log(tasks);
let deleteTask;
if (loggedIn === null) {
     window.location.href = "index.html";
     
} else {
   console.log("you are logged in");
}

if(tasks.length >= 1) {
    for (let task of tasks) {
        let singleTask = document.createElement("div")
        let taskName = document.createElement("p");
        let deleteTask = document.createElement("button");
      
    
        deleteTask.setAttribute("data-task-id", task.id) // stavljamo mu id - da bi kasnije kad birsemo task mogli tacno da prepoznamo koji je task u pitanju
        deleteTask.innerText = "Delete Task";
        taskName.innerText ="Task Name: " +  task.name;
          deleteTask.addEventListener("click", () => {
            if(deleteTask.getAttribute("data-task-id") == task.id) {
            console.log(deleteTask.getAttribute("data-task-id", "hvata id"))
            console.log(task.id);
            console.log(tasks);


            for(let nume = 0; nume < tasks.length; nume++) {
                if (tasks[nume].taskid = task.id) {
                    let index = nume
                    console.log(index);
                    console.log(tasks)
                    tasks.splice(index, 1)
                    console.log(tasks);
                }
                // if(Number(deleteTask.getAttribute("data-task-id")) === task.id) {
                //     console.log("they are matching")
            
                // }
                // ok dosta za danas, nisam siguran sta dalje, div treba skinuti i dugme
            }
            } 
        })
        singleTask.append(taskName, deleteTask);
        taskList.append(singleTask);
       
    }
}



// jako interesantno, ako ja odem u application -> local storage -> dodam key (koji mogu da vidim iz js-a) stavim value true ( u slucaju da je tako) i direktno sam prebacen na vec
// ulogovanu stranu -> jako lose za sigurnosti........... 


document.getElementById("createtasks").addEventListener("click", () => {
    const taskName = document.getElementById("taskName").value;
    const dateTime = new Date();
    const taskId = dateTime.getTime();


    tasks.push({
        id: taskId,
        name: taskName
    })

    const jsonTasks = JSON.stringify(tasks); //ovo pretvara objekat u string, ali ce u stringu izgledati isto kao objekat.. ovo kao string moze da se upise u localstorage... 
   

    localStorage.setItem("tasks", jsonTasks)
    console.log(localStorage.getItem("tasks"));
    console.log(tasks)
})

// jedinstven id bi bilo pametno da ima svoj jedinstveni broj da bi se kasnije lakse brisalo, trazilo, nalazilo
// localstorage radi samo sa jednostavnim podacima (integer, slova, brojevi)
// ako hocemo da napisemo kompleksnu strukutru kako sto je niz -> ne mozemo na jednostavan nacin
// zato imamo nesto sto se zove json -> sto je objekt u vidu stringa



//domaci:
// problem: ako upisemo task -> nije vidlji dok ne refreshujemo neku stranu
// prvo sto treba uraditi -> cim kliknem create task -> da odma bude vidljiv na stranici
// da svako dugme obrisi zadatak -> da obrise zadatak i da ga ukloni sa stranice. 
