function rectangle()
{
  var canvas1 = document.getElementById("canvas1");
  var ctx1 = canvas1.getContext("2d");
  ctx1.beginPath();
  ctx1.rect(100,100,200,60);
  ctx1.strokeStyle="blue";
  ctx1.lineWidth="2";
  ctx1.fillStyle="green";
  ctx1.fill();

  ctx1.beginPath();
  ctx1.rect(150,60,100,40);
  ctx1.strokeStyle="blue";
  ctx1.lineWidth="2";
  ctx1.fillStyle="green";
  ctx1.fill();

  ctx1.beginPath();
  ctx1.lineWidth="2";
  ctx1.arc(280, 190, 30, 0, 2 * Math.PI);
  ctx1.fillStyle= "rgb(205, 205, 205)";
  ctx1.strokeStyle="black";
  ctx1.stroke();
  ctx1.fill();


  ctx1.beginPath();
  ctx1.lineWidth="2";
  ctx1.arc(120, 190, 30, 0, 2 * Math.PI);
  ctx1.fillStyle= "rgb(205, 205, 205)";
  ctx1.strokeStyle="black";
  ctx1.stroke();
  ctx1.fill();

}

window.onload=rectangle;
