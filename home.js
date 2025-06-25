const mobs = [
  {
    name: "Creeper",
    img: "",
    options: ["Zombie", "Creeper", "Enderman", "Araña"]
  },
  {
    name: "Enderman",
    img: "img/enderman.png",
    options: ["Enderman", "Esqueleto", "Golem", "Slime"]
  },
  {
    name: "Araña",
    img: "img/spider.png",
    options: ["Araña", "Zombie", "Vaca", "Ghast"]
  },
  {
    name: "Zombie",
    img: "img/zombie.png",
    options: ["Esqueleto", "Zombie", "Creeper", "Aldeano"]
  }
];

let currentMob = 0;

function loadMob() {
  const mob = mobs[currentMob];
  document.getElementById("mob-img").src = mob.img;
  
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";
  
  mob.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("result").textContent = "";
}

function checkAnswer(selected) {
  const mob = mobs[currentMob];
  const result = document.getElementById("result");

  if (selected === mob.name) {
    result.textContent = "¡Correcto!";
    result.style.color = "lime";
  } else {
    result.textContent = `Incorrecto.`;
    result.style.color = "red";
  }
}

function nextMob() {
  currentMob = (currentMob + 1) % mobs.length;
  loadMob();
}

loadMob();