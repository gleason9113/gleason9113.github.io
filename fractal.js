let canvas = document.createElement("canvas");
center_width = 5;
center_height = 5;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
let context = canvas.getContext("2d");

let gradient = context.createRadialGradient(canvas.width, canvas.height/2, canvas.height/4, canvas.height/2, canvas.height/2, canvas.height/2);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "#616161");

context.fillStyle = gradient;
context.fillRect(0, 0, canvas.width, canvas.height);
