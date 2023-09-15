const arrNames = [
  "Стадион",
  "Новый вокзал",
  "Отель",
  "Гостиница",
  "Старый вокзал",
  "Мост",
  "Зал",
  "Дом",
  "Администрация",
  "Гостиница Lux",
];

document.addEventListener("click", (e) => {
  const target = e.target;
  if (target.innerHTML === "+") {
    target.innerHTML = arrNames[target.id];
    target.classList.remove("circle-button");
    target.classList.add("expanded-button");
  } else if (target.classList.contains("fullscreen")) {
    resetButtonStates();
  } else {
    target.innerHTML = "+";
    target.classList.remove("expanded-button");
    target.classList.add("circle-button");
  }
});

const resetButtonStates = () => {
  const buttons = document.getElementsByClassName("btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "+";
    buttons[i].classList.remove("expanded-button");
    buttons[i].classList.add("circle-button");
  }
};
