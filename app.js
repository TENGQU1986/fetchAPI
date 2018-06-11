document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);


// Get local text file
function getText() {
  fetch('text.txt')
    .then(function(res) {
      return res.text();
  })
  .then((data) => {
    // console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch((err) => console.log(err))
}

// Get local JOSN file

function getJson() {
  fetch('posts.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = [];
      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
        document.getElementById('output').innerHTML = output;
        console.log(output);
      });
      
    })
}

// GET API Data

function getExternal() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = [];
      data.forEach((post) => {
        output += `<li>${post.id}</li>`;
        document.getElementById('output').innerHTML = output;
        console.log(output);
    });
})
}
