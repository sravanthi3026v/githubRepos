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
users.forEach(async(user)=>{
    //console.log(user);
    const fork = await fetch(user.repos_url);
    var data = await fork.json();
    console.log(data);
   githubRepos.innerHTML += `
   <div className="user-container">   
   <img class="user-avatar_url" src="${user.avatar_url}" alt="avatar">
   <div>
   <h4>${user.repos_url}</h4>
   <h4>Fork count=${data[0].forks_count}</h4>
   <h4>Star count=${data[0].stargazers_count}</h4>
   `;
});
}
displayUsers();
