const redInput = document.querySelector("#red");
const greenInput = document.querySelector("#green");
const blueInput = document.querySelector("#blue");
const hexColor = document.querySelector("#hexCode");
const button = document.querySelector("#randomBtn");
const colorApi = "https://dummy-apis.netlify.app/api/color";

function inputValueToHex(v) {
  v = Number.parseInt(v);
  return ("0" + v.toString(16)).substr(-2);
}
function renderColor() {
  fetch(colorApi)
    .then((response) => {
      return response.json();
    })
    .then((colorData) => {
      redInput.value = colorData.rgb.r;
      greenInput.value = colorData.rgb.g;
      blueInput.value = colorData.rgb.b;
      setColor();
    });
}
function setColor() {
  const red = inputValueToHex(redInput.value);
  const green = inputValueToHex(greenInput.value);
  const blue = inputValueToHex(blueInput.value);
  const hexColorValue = "#" + red + green + blue;
  document.body.style.backgroundColor = hexColorValue;
  hexColor.innerText = hexColorValue;
}

document.body.addEventListener("input", setColor);
button.addEventListener("click", renderColor);
