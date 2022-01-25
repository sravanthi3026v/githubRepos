// Logic to get the data 
async function getUsers(){
let users;   
try{
    const data = await fetch(
        "https://api.github.com/users",
        {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    }
    );
    users = await data.json();
    //console.log(users);
} catch(err) {
    console.log(err);
}
return users;
}
getUsers();

// logic to display tha data of users
async function displayUsers(){
let users= await getUsers();
const githubRepos = document.querySelector(".Github-Repos");
githubRepos.innerHTML = "";
users.forEach((user)=>{
    //console.log(user.login);
   githubRepos.innerHTML += `
   <div className="user-container">
   <h4>${user.login}</h4>
   <img class="user-avatar_url" src="${user.avatar}" alt="avatar">
   <div>
   <h4>${user.repos_url}</h4>
   </div>   
   </div>
   `;
});
}
displayUsers();

function mySearch() {
    const url = "https://api.github.com/users";
    fetch(url)
    .then(function (response) {return response.json();
    })
    .then(function (user) {
        getUsers(user);
    })
    .catch(function (error) {
        console.log(error);
    });
}
mySearch();
