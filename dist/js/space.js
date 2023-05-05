var output = document.getElementById('output');
output.innerHTML = "new content";


fetch('./data.json')
.then(res => res.json())
.then(data => {
  console.log (data);
})



  fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    document.querySelector("#title").innerHTML = data.student

  })


document.getElementById("year").innerHTML = new Date().getFullYear();
