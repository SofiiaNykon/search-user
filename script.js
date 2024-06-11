async function userFetch(){
    const result  = await fetch('https://jsonplaceholder.typicode.com/users');
      return result.json();
}
async function renderList(){
    const users = await userFetch();
    const ul = document.querySelector(".user-list");
    for(const user of users){
        const li = document.createElement("li");
        li.classList.add("list-items");
        li.innerHTML = user.name;
        ul.appendChild(li);
    }
}
function filterUser(e){
    const userListItems = document.getElementByClassName("list-items");
    for(const user of userListItems){
        if(!user.innerHTML.startsWith(e.target.value)){
            user.classList.add("hidden");
        }else{
        user.classList.remove("hidden");
    }
    }
}
renderList();
document.querySelector(".input").addEventListener("keyup", filterUser);
