const mainCard = document.getElementById("user");
const userCard = document.getElementById("usercardv2");


async function getUsers() {
  let response = await fetch("/users?results=5");
  let users = await response.json();
  console.log(users);
  const userContainer = document.querySelector(".container");
  mainCard.innerHTML = `
        <img src="${users[0].picture.large}" id="userImage">
        <div class="user-info">
            <h1>Brukerinfo</h1>
            <h2>First name: ${users[0].name.first}</h2>
            <h3>Last name: ${users[0].name.last}</h3>
            <h4>Gender: ${users[0].gender}</h4>
            <p>Email: ${users[0].email}</p>
            <p>Username: ${users[0].login.username}</p>
            <p>Password: ${users[0].login.password}</p>
        </div> `;

  for (let user of users) {
    userContainer.innerHTML += `
            <div class="user-cardv2" id="usercardv2">
            <p>Name: ${user.name.first}</p>  
            <p>Last name: ${user.name.last}</p>  
            <p>Username: ${user.login.username}</p>  
            <p>User email: ${user.email}</p>  
            <p>User cellphone: ${user.cell}</p>  
            </div>
            `;
    }
}

getUsers();
