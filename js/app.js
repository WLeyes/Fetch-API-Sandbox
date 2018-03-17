console.log('Connected to app.js');

// Listen for text button click
document.getElementById('btn-getText').addEventListener
('click', getText);

// Listen for JSON button click
document.getElementById('btn-getJSON').addEventListener
('click', getJSON);

// Listen for JSON button click
document.getElementById('btn-getAPI').addEventListener
('click', getExternalAPI);


// GET local text file
function getText() {
  fetch('js/posts.txt')
  .then(response =>  response.text())
  .then(data => {
    console.log(data)
    document.getElementById('output').innerHTML = data
  })
  .catch(error => console.log(error));
}


// GET local JSON file
function getJSON() {
  fetch('js/posts.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let output = ''
    data.forEach(post => output += `<li>${post.title}</li>`);
    document.getElementById('output').innerHTML = output;
  })
  .catch(error => console.log(error));
}



// GET external API file
function getExternalAPI() {
  fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let output = `<h3>GitHub Users</h3>`;
    data.forEach(user => output += `<li>${user.login} <img class="profileImage" src="${user.avatar_url}"></li>`);
    document.getElementById('output').innerHTML = output;
  })
  .catch(error => console.log(error));
}
