const userContainer = document.querySelector(".container");
const mainCard = document.getElementById("user");
const previewDiv = document.getElementById("preview");

async function getUsers() {
  let response = await fetch("/users?results=5");
  let users = await response.json();

  console.log(users);

  const mainCard = document.getElementById("user"); // Define mainCard here

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
    </div>`;

  for (let user of users) {
    const userCard = document.createElement("div");
    userCard.className = "user-cardv2";
    userCard.innerHTML = `
      <p>Name: ${user.name.first}</p>  
      <p>Last name: ${user.name.last}</p>  
      <p>Username: ${user.login.username}</p>  
      <p>User email: ${user.email}</p>  
      <p>User cellphone: ${user.cell}</p>`;

    userCard.addEventListener("click", () => {
      openPreview(user);
    });

    userContainer.appendChild(userCard);
  }
}

function openPreview(user) {
  const modalContent = document.getElementById("user-modal-content");
  modalContent.innerHTML = `
    <img src="${user.picture.large}" id="userImage">
    <p><Strong>Name: </Strong>${user.name.first} ${user.name.last}</p>
    <p><Strong>Email: </Strong>${user.email}</p>
    <p><Strong>Phone: </Strong>${user.cell}</p>
    <!-- Add more user details as needed -->
  `;

  const modal = document.getElementById("user-modal");
  modal.style.display = "flex"; // Use "flex" for centering

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closePreview();
    }
  });
}

function closePreview() {
  const modal = document.getElementById("user-modal");
  modal.style.display = "none";
}

getUsers();
