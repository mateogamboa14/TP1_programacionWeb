const mobs = [
    {
      name: "Creeper",
      shadowImg: "https://i.pinimg.com/736x/7b/d4/a9/7bd4a9e3de4557aa3f525c2313f47b81.jpg",
      normalImg: "https://upload.wikimedia.org/wikipedia/en/4/49/Creeper_%28Minecraft%29.png",
      options: ["Zombie", "Creeper", "Enderman", "Araña"]
    },
    {
      name: "Enderman",
      shadowImg: "https://i.pinimg.com/736x/dc/c0/da/dcc0dafddf394676d63b4bfb4778c877.jpg",
      normalImg: "https://images.wikidexcdn.net/mwuploads/esssbwiki/e/e7/latest/20210714005932/Enderman_en_Minecraft_Pocket.png",
      options: ["Enderman", "Esqueleto", "Golem de Hierro", "Slime"]
    },
    {
      name: "Araña",
      shadowImg: "https://i.pinimg.com/736x/4a/d4/39/4ad4397004eabac033bbbbfbb3110207.jpg",
      normalImg: "https://minecraft.wiki/images/thumb/Spider_JE5_BE4.png/1200px-Spider_JE5_BE4.png?b090e",
      options: ["Araña", "Zombie", "Vaca", "Ghast"]
    },
      {
        name: "Zombie",
        shadowImg: "https://i.pinimg.com/736x/e8/81/0a/e8810a01e1a1eec86c97f1ef171d7aa9.jpg",
        normalImg: "https://freedesignfile.com/image/preview/4087/minecraft-zombie-clipart.png",
        options: ["Esqueleto", "Zombie", "Creeper", "Aldeano"]
      },
    {
        name: "Césped",
        shadowImg: "https://i.pinimg.com/736x/69/70/74/697074df9521df5c92395e09031f8256.jpg",
        normalImg: "https://minecraft.wiki/images/Grass_Block_JE7_BE6.png?424c1",
        options: ["Slime", "Magma Cube", "Cabeza de Esqueleto", "Césped"]
    },
  ];
  
  let currentMob = 0;
  let score = 0;
  let hasAnswered = false;
  
  function loadMob() {
    const mob = mobs[currentMob];
    const img = document.getElementById("mob-img");
    const optionsContainer = document.getElementById("options-container");
    const result = document.getElementById("result");
    const nextBtn = document.getElementById("next-button");
  
    img.src = mob.shadowImg;
    result.textContent = "";
    optionsContainer.innerHTML = "";
    nextBtn.disabled = true;
    hasAnswered = false;
  
    mob.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option, btn);
      optionsContainer.appendChild(btn);
    });
  
    updateScore();
  }
  
  function checkAnswer(selected, clickedBtn) {
    if (hasAnswered) return;
    hasAnswered = true;
  
    const mob = mobs[currentMob];
    const result = document.getElementById("result");
    const img = document.getElementById("mob-img");
    const nextBtn = document.getElementById("next-button");
  
    if (selected === mob.name) {
      result.textContent = "¡Correcto!";
      result.style.color = "lime";
      img.src = mob.normalImg;
      score++;
      nextBtn.disabled = false;
    } else {
      result.innerHTML = `<span style="font-size: 40px; color: red;">✖</span> Incorrecto. Se reinicia.`;
      img.src = "https://cdn-icons-png.flaticon.com/512/1810/1810747.png";
      score = 0;
      setTimeout(() => {
        currentMob = 0;
        loadMob();
      }, 2000);
    }
    document.querySelectorAll("#options-container button").forEach(btn => {
      btn.disabled = true;
    });
    updateScore();
  }
  
  function nextMob() {
    currentMob = (currentMob + 1) % mobs.length;
    loadMob();
  }
  function updateScore() {
    document.getElementById("score").textContent = `Puntaje: ${score}`;
  }
  window.onload = loadMob;