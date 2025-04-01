
// http://thenewcode.com/81/Make-A-Starfield-Background-with-HTML5-Canvas

// function getRandom(min, max) {
//             return Math.floor(Math.random() * (max - min + 1)) + min;
//         }
//     var canvas = document.getElementById("starfield"),
//     context = canvas.getContext("2d"),
//     stars = 2000,
//     colorrange = [0,60,240];
//     for (var i = 0; i < stars; i++) {
//         var x = Math.random() * canvas.offsetWidth;
//         y = Math.random() * canvas.offsetHeight,
//         radius = Math.random() * 1.7,
//         hue = colorrange[getRandom(0,colorrange.length - 1)],
//         sat = getRandom(50,100);
//         context.beginPath();
//         context.arc(x, y, radius, 0, 360);
//         context.fillStyle = "hsl(" + hue + ", " + sat + "%, 95%)";
//         context.fill();//

//     }


// date
document.getElementById("year").innerHTML = new Date().getFullYear();


// lightbox
console.log(window.location.href);
const host = "http://127.0.0.1:5500/";
// JAVASCRIPT FOR INDEX PAGE
if (window.location.href == host + 'index.html') {
    console.log("this is index page");

    fsLightboxInstances["first-lightbox"].props.onOpen = function () {
      console.log("The first lightbox has opened.");
    }
    fsLightboxInstances["second-lightbox"].props.onOpen = function () {
      console.log("The second lightbox has opened.");
    }

    fsLightboxInstances["third-lightbox"].props.onOpen = function () {
      console.log("The third lightbox has opened.");
    }
    fsLightboxInstances["fourth-lightbox"].props.onOpen = function () {
      console.log("The fourth lightbox has opened.");
    }

}


var hash = location.hash.replace(/^#/, ""); // ^ means starting, meaning only match the first hash
if (hash) {
  var someTabTriggerEl = document.querySelector("#" + hash + "");
  var tab = new bootstrap.Tab(someTabTriggerEl);

  tab.show();
}
