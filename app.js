const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

async function getUsers(request, response) {
  if (!request.query.results) {
    request.query.results = 10;
  }

  if (!request.query.nat) {
    request.query.nat = "no";
    }
    
  const baseURL = "https://randomuser.me/api/?";
  const url = baseURL + new URLSearchParams(request.query);
  console.log(url);

  const fetch_response = await fetch(url);
  const json = await fetch_response.json();
  console.log(json.results);

  response.send(json.results);
}

app.get("/users", getUsers);