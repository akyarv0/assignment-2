const colorLetters = "0123456789ABCDEF";
const bgDiv = document.querySelector(".bgDiv");
const colorText = document.getElementById("colorText");

function generateRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorLetters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelector(".colorDiv").style.backgroundColor =
  "rgba(255, 255, 255, 0.5)";

document.querySelector(".btn-click").addEventListener("click", function () {
  const color = generateRandomColor();
  bgDiv.style.backgroundColor = color;
  colorText.textContent = color;
});

document.querySelector(".btn-over").addEventListener("mouseover", function () {
  const color = generateRandomColor();
  bgDiv.style.backgroundColor = color;
  colorText.textContent = color;
});

document.getElementById("copy").addEventListener("click", function () {
  const textToCopy = colorText.textContent;

  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  document.execCommand("copy");

  document.body.removeChild(tempTextArea);

  alert("Metin panoya kopyalandı: " + textToCopy);
});
