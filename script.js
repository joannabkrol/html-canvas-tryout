const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//helper functions:
const createCircle = (width, height, color, radius) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(width, height, radius, 0, 2 * Math.PI);
  ctx.fill();
};

const createText = (fontStyle, color, text, x, y) => {
  ctx.font = fontStyle;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

//solution from: https://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/
const createWrappedText = (
  text,
  x,
  y,
  maxWidth,
  lineHeight,
  textStyle,
  color
) => {
  const words = text.split(" ");
  let line = "";
  ctx.font = textStyle;
  ctx.fillStyle = color;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
};

//solution from: https://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-on-html-canvas
const roundedRect = (x, y, w, h, r, color) => {
  ctx.fillStyle = color;
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fill();
};

//constants:
const pink = "#FF77B2";
const blue = "#0E0054";
const white = "#fff";

//drawing on canvas left side:
ctx.fillStyle = blue;
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(334, 0);
ctx.lineTo(153, 500);
ctx.lineTo(0, 500);
ctx.closePath();
ctx.fill();

createCircle(214, 50, pink, 14);
createCircle(250, 90, pink, 21);

//sequence of small circles
let height = 375;
let heightTwo = 404;
for (let i = 0; i < 4; i++) {
  createCircle(42, height, pink, 3);
  createCircle(59, height, pink, 3);
  createCircle(75, heightTwo, pink, 3);
  createCircle(92, heightTwo, pink, 3);
  height += 20;
  heightTwo += 20;
}

//text
document.fonts.ready.then(function () {
  createText("36px OpenSans", white, "WE KNOW", 36, 135);
  createText("36px OpenSans", white, "THE WAY OF", 36, 175);
  createText("36px OpenSans", pink, "SUCCESS", 36, 215);

  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  createWrappedText(content, 36, 247, 150, 12, "9px Raleway", white);
  roundedRect(36, 315, 90, 25, 5, pink);
  createText("9px Raleway", blue, "LEARN MORE", 50, 331);
});

//drawing on canvas right side - image and all on top of image:
const imgPath = "image.jpeg";
const imgObj = new Image();
imgObj.src = imgPath;
imgObj.onload = function () {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(334, 0);
  ctx.lineTo(500, 0);
  ctx.lineTo(500, 500);
  ctx.lineTo(153, 500);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(imgObj, 0, 0, 500, 950, 153, 0, 347, 500);
  ctx.restore();

  ctx.fillStyle = pink;
  ctx.beginPath();
  ctx.moveTo(285, 0);
  ctx.lineTo(500, 0);
  ctx.lineTo(500, 112);
  ctx.closePath();
  ctx.fill();

  createCircle(440, 384, blue, 21);
  createCircle(380, 438, blue, 34);
};
