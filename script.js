function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💗";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

document.getElementById("yes-button").addEventListener("click", function () {
  document.getElementById("centered-gif").src = "giphy.gif";
  var yesButton = document.getElementById("yes-button");
  yesButton.style.height = "5vh";
  yesButton.style.width = "auto";
  yesButton.innerText = 'Обичам те 💞';
});

// Get the "No" button
var noButton = document.getElementById("noButton");

// Array of texts
var texts = [
  "Айде де",
  "Моля тее",
  "Бебка :(",
  "Ама аз те обичам",
  "Нямаш сърце",
  "Защо ме марзиш",
  "Виж как се постарах",
  "😭😭😭",
  "Сърдя ти се",
  "Мина ми ама айде приеми дееее",
  "Оф",
  "Моля ама с такива очички: 🥹",
  "Моля ама с такова емоджи: 😠",
  "МА НЯМА ДА ТИ СЕ МОЛЯ ВЕ",
  "Ма искам да си ми валентинка 😢",
  "💐?",
  "💵?",
  "🚗??",
  "🏠???",
  "Е ТИ ВЕЧЕ СИ НАГЛА",
  "КАКВО ОЩЕ ИСКАШ",
  "Имаш сърце то ми",
  "Имаш дупето ми",
  "АААААААААААААААААААААААА",
  "АУТОКРЕКТА БЕШЕ!!!!!!",
  "Имаш и красиви очи 😏",
  "👀",
  "Ядосвам се 😡",
  "Ще те напляскам",
  "Ще те правя кокошка 🐔 <-- това иде-то го преложи",
  "3",
  "2",
  "1",
  "🙂",
];

// Counter
var counter = 0;

document.getElementById("no-button").addEventListener("click", function () {
  document.getElementById("centered-gif").src = "tujno.gif";

  var yesButton = document.getElementById("yes-button");
  var noButton = document.getElementById("no-button");

  var currentHeight = window.getComputedStyle(yesButton).height;
  var currentWidth = window.getComputedStyle(yesButton).height;

  var newHeight = parseInt(currentHeight) + 8;
  var newWidth = parseInt(currentWidth) + 8;

  yesButton.style.height = newHeight + "px";
  yesButton.style.width = newWidth + "px";

  // Update the button's text
  noButton.innerText = texts[counter % texts.length];
  yesButton.innerText = 'Yes 🥰';

  if (counter == 33) {
    document.getElementById("centered-gif").src = "broken.gif";
    return;
  }
  // Increment the counter
  counter++;
});
