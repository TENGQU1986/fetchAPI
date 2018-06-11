document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('text.txt')
    .then(function(res) {
      console.log(res);
  });
}