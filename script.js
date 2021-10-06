let name = document.getElementById("name-character");
let specie = document.querySelector("select#specie-type");
const player = [];
const phrase = document.querySelector("blockquote.special-ability");

const getRandomName = () => {
    const names = ["Dark Paladin", "Brutos", "Galena", "Hércules", "Eragon", "Murtagh"];
    let index = Math.floor(Math.random() * 5);
    name.value = names[index];
};

const getRandomAtk = () => {
    const atk = [12, 9, 6, 15, 5, 7];
    let index = Math.floor(Math.random() * 5);
    player.push(atk[index]);
};

getRandomDefense = () => {
    const defense = [11, 8, 7, 14, 4, 10];
    let index = Math.floor(Math.random() * 5);
    player.push(defense[index]);
};

const getRandomMagic = () => {
    const magic = [6, 15, 9, 3, 7, 12];
    let index = Math.floor(Math.random() * 5);
    player.push(magic[index]);
};

const getRandomLife = () => {
    const life = [20, 22, 19, 16, 25, 18];
    let index = Math.floor(Math.random() * 5);
    player.push(life[index]);
};

const getRandomWeapon = () => {
    const weapon = ["Knife", "Bow and Arrows", "Sword", "Double Sword"];
    let index = Math.floor(Math.random() * 3);
    player.push(weapon[index]);
};

const getRandomForce = () => {
    const force = [10, 12, 8, 15, 9, 14];
    let index = Math.floor(Math.random() * 5);
    player.push(force[index]);
};

const complete = () => {
    document.getElementById("name").textContent = name.value;
    document.getElementById("specie").textContent = specie.value;
    document.getElementById("atk").textContent = player[0];
    document.getElementById("defense").textContent = player[1];
    document.getElementById("magic").textContent = player[2];
    document.getElementById("life").textContent = player[3];
    document.getElementById("weapon").textContent = player[4];
    document.getElementById("force").textContent = player[5];
    document.getElementsByClassName("disable").disabled = true;

    if (specie.value === "gnome") {
        phrase.innerText = "We might be short, but not weak. Are you are to die?"
    } else if (specie.value === "elf") {
        phrase.innerText = "Are you an elf? If not, sorry for you...";
    } else if (specie.value === "human") {
        phrase.innerText = "Elfs? Gnomes? Dwarfs? HAHAHAHAHAHAHA I´M THE SUPERIOR SPECIE";
    } else {
        phrase.innerText = "Did i hear money? I kill anyone to get a tip my Angel."
    };
};