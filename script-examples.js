document.addEventListener("DOMContentLoaded", function () {
  /** @type { HTMLCanvasElement } */
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // check width and height of the canvas
  console.log("dimensions", canvas.width, canvas.height);

  // verify canvas DOM node
  console.log(canvas instanceof HTMLCanvasElement);

  // verify rendering context interface
  console.log(ctx instanceof CanvasRenderingContext2D);

  // he colors of rectangles below will mix together
  //   ctx.beginPath();
  //   ctx.fillStyle = "#03A87C";
  //   ctx.strokeStyle = "rgba(3,168,124,0.5)";
  //   ctx.rect(100, 100, 200, 200);
  //   ctx.rect(400, 100, 200, 200);
  //   ctx.fill();
  //   ctx.stroke();

  //   /*--------------*/

  //   // draw a rectangle (fill/transparent)
  //   ctx.beginPath();
  //   ctx.rect(250, 250, 100, 100); // x:250, y:250, w:100, h:100
  //   ctx.fillStyle = "rgba(251,192,45,0.75)"; // fill color
  //   ctx.fill(); // fill previous shapes

  //   /*--------------*/

  //   // draw a rectangle (stroke/transparent)
  //   ctx.beginPath();
  //   ctx.rect(550, 250, 100, 100); // x:250, y:250, w:100, h:100
  //   ctx.strokeStyle = "rgb(216,67,21)"; // fill color
  //   ctx.stroke(); // stroke previous shapes

  //Example with removing part of the rectangle:
  //   /*--------------*/

  //   // draw two rectangles (fill)
  //   ctx.beginPath();
  //   ctx.fillStyle = "#03A87C"; // fill color
  //   ctx.rect(100, 100, 200, 200); // x:100, y:100, w:200, h:200
  //   ctx.rect(400, 100, 200, 200); // x:400, y:100, w:200, h:200
  //   ctx.fill(); // fill previous shapes

  //   /*--------------*/

  //   // draw a rectangle (fill/transparent)
  //   ctx.beginPath();
  //   ctx.clearRect(150, 150, 100, 100); // x:150, y:150, w:100, h:100

  //   /*--------------*/

  //   // draw a rectangle (stroke/transparent)
  //   ctx.fillStyle = "rgb(216,67,21)"; // fill color
  //   ctx.fillRect(450, 150, 100, 100); // x:450, y:150, w:100, h:100

  //Drawing custom paths:
  //   /*--------------*/

  //   // draw rectangle
  //   ctx.fillStyle = "green"; // fill color
  //   ctx.beginPath();
  //   ctx.moveTo(100, 100); // move pen to x:100, y:100
  //   ctx.lineTo(300, 100); // line to x:300, y:100
  //   ctx.lineTo(300, 300); // line to x:300, y:300
  //   ctx.lineTo(100, 300); // line to x:100, y:300
  //   ctx.lineTo(100, 100); // line to x:100, y:100
  //   ctx.fill(); // fill previous paths

  //   // draw triangle
  //   ctx.fillStyle = "red"; // fill color
  //   ctx.beginPath();
  //   ctx.moveTo(500, 100); // move pen to x:500, y:100
  //   ctx.lineTo(400, 200); // line to x:400, y:200
  //   ctx.lineTo(500, 300); // line to x:500, y:300
  //   ctx.closePath(); // line to x:500, y:100
  //   ctx.fill(); // fill previous paths

  //   // draw triangle
  //   ctx.fillStyle = "blue"; // fill color
  //   ctx.beginPath();
  //   ctx.moveTo(500, 100); // move pen to x:500, y:100
  //   ctx.lineTo(600, 200); // line to x:600, y:200
  //   ctx.lineTo(500, 300); // line to x:500, y:300
  //   ctx.fill(); // fill previous paths (closes path)

  //   // draw angle
  //   ctx.lineWidth = 10; // line width in pixels
  //   ctx.lineCap = "round"; // line width in pixels
  //   ctx.lineJoin = "bevel"; // line width in pixels
  //   ctx.beginPath();
  //   ctx.moveTo(50, 400); // move pen to x:50, y:400
  //   ctx.lineTo(50, 450); // line to x:50, y:450
  //   ctx.lineTo(100, 450); // line to x:100, y:450
  //   ctx.stroke(); // stroke previous paths

  //Drawing custom curved paths:
  //   /*--------------*/

  //   ctx.fillStyle = "green"; // fill color
  //   ctx.strokeStyle = "red"; // stroke color
  //   ctx.lineWidth = 3; // stroke width

  //   // circle (x:100, y:100, r:50, sa:0, ea:360, CW)
  //   ctx.beginPath();
  //   ctx.arc(100, 100, 50, 0, 2 * Math.PI);
  //   ctx.fill(); // close paths and fill

  //   // semi-circle (x:300, y:100, r:50, sa:0, ea:180, CW)
  //   ctx.beginPath();
  //   ctx.arc(300, 100, 50, 0, Math.PI);
  //   ctx.fill(); // close paths and fill
  //   ctx.beginPath();

  //   // semi-circle (x:500, y:100, r:50, sa:0, ea:180, ACW)
  //   ctx.beginPath();
  //   ctx.arc(500, 100, 50, 0, Math.PI, true);
  //   ctx.stroke(); // stroke only

  //   // sector (x:500, y:100, r:50, sa:0, ea:270, CW)
  //   ctx.beginPath();
  //   ctx.arc(700, 100, 50, 0, (6 / 4) * Math.PI);
  //   ctx.closePath(); // close path
  //   ctx.stroke(); // stroke only

  //Drawing custom curved paths - Bezier
  //   /*--------------*/

  //   ctx.fillStyle = "green"; // fill color
  //   ctx.strokeStyle = "red"; // stroke color
  //   ctx.lineWidth = 3; // stroke width

  //   // quadratic (cpx:200, cpy:100)
  //   ctx.beginPath();
  //   ctx.moveTo(100, 200);
  //   ctx.quadraticCurveTo(200, 100, 300, 200);
  //   ctx.stroke(); // stroke

  //   // quadratic (cpx:500, cpy:100)
  //   ctx.beginPath();
  //   ctx.moveTo(400, 200);
  //   ctx.quadraticCurveTo(500, 100, 600, 200);
  //   ctx.closePath(); // close path
  //   ctx.stroke(); // stroke

  //   // cubic (cp1x:200, cp1y:300, cp2x:300, cp2y:300)
  //   ctx.beginPath();
  //   ctx.moveTo(100, 400);
  //   ctx.bezierCurveTo(200, 300, 300, 300, 300, 400);
  //   ctx.fill(); // fill (and close)

  //   //Gradient:
  //   /*--------------*/

  //   // define a 45deg linear RGB gradient
  //   const gradient = ctx.createLinearGradient(100, 100, 300, 300);
  //   gradient.addColorStop(0, "red");
  //   gradient.addColorStop(0.5, "green");
  //   gradient.addColorStop(1, "blue");

  //   // set fill and stroke colors
  //   ctx.fillStyle = gradient; // fill color
  //   ctx.strokeStyle = gradient; // stroke color
  //   ctx.lineWidth = 20; // stroke width

  //   // diagonal rectanges
  //   ctx.fillRect(0, 0, 100, 100);
  //   ctx.fillRect(50, 50, 100, 100);
  //   ctx.fillRect(100, 100, 100, 100);
  //   ctx.fillRect(150, 150, 100, 100);
  //   ctx.fillRect(200, 200, 100, 100);
  //   ctx.fillRect(250, 250, 100, 100);
  //   ctx.fillRect(300, 300, 100, 100);
  //   ctx.fillRect(350, 350, 100, 100);
  //   ctx.fillRect(400, 400, 100, 100);

  //   // side rectangles
  //   ctx.strokeRect(300, 100, 100, 100);
  //   ctx.fillRect(100, 300, 100, 100);

  //   // right corner rectangles
  //   ctx.fillRect(650, 50, 100, 100);
  //   ctx.strokeRect(650, 350, 100, 100);

  //Draw image
  //   /*--------------*/

  //   // image url (w: 360px, h:360px)
  //   const url =
  //     "https://github.com/course-one/canvas-fabric-introduction/raw/main/assets/lenna.png";

  //   // create HTMLImageElement object
  //   const img = new Image();

  //   // listen to image load complete
  //   img.addEventListener("load", function () {
  //     // draw entire image (x:40, y:40)
  //     ctx.drawImage(
  //       this, // this === img
  //       40,
  //       40 // draw from this point on the canvas
  //     );

  //     // draw 1/2 scaled image (w:180, h:180)
  //     ctx.drawImage(
  //       this,
  //       360,
  //       40, // draw from this point on the canvas
  //       180,
  //       180 // width/height of the drawn image
  //     );

  //     // draw a portion of image (w:180, h:180)
  //     ctx.drawImage(
  //       this,
  //       60,
  //       100, // crop from this point on the image
  //       200,
  //       200, // width/height of the crop
  //       360,
  //       240, // draw from this point on the canvas
  //       100,
  //       100 // width/height of the drawn image
  //     );
  //   });

  //   // start image fetch
  //   img.src = url;

  //Text
  /*--------------*/

  //   // set font properties
  //   ctx.font = "italic 50px sans-serif";

  //   // set fill and stroke style
  //   ctx.fillStyle = "blue";
  //   ctx.strokeStyle = "red";

  //   // fill text at (50,50)
  //   ctx.fillText("Hello World!", 50, 50);

  //   // set max width to 150px (compress text)
  //   ctx.fillText("Hello World!", 50, 100, 150);

  //   // set max width to 500px (no effect)
  //   ctx.fillText("Hello World!", 50, 150, 500);
  //   ctx.font = "italic 50px serif";
  //   // stroke text (with 2px stroke width)
  //   ctx.lineWidth = 2;
  //   ctx.strokeText("Hello World!", 50, 200);

  //   // start text from right to left
  //   ctx.textAlign = "end";
  //   ctx.fillText("Hello World!", canvas.width, 250);

  //Animation
  // fill style
  ctx.fillStyle = "red";

  /*--------------*/

  // starting point
  let x = 0;
  const y = 200; // `y` (vertical) motion is disabled

  // create a draw function to draw each frame
  function draw() {
    // if `x` is greater than 500px, stop animation
    if (x > 700) {
      return; // return from the function
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // fill rectangle of size `100x100` pixels
    ctx.fillRect(x, y, 100, 100);

    // increase `x` value by `5px`
    x += 5;

    // register `draw()` call before next paint
    requestAnimationFrame(draw);
  }

  // register first `draw()` call
  requestAnimationFrame(draw);
});
