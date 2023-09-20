async function getCharData(name) {
  var response = await fetch(`https://api.genshin.dev/characters/${name}`);
  var coderData = await response.json();

  starChange(coderData.rarity);
  imageChange(name);
  visionChange(coderData.vision);
  backgroundChange(coderData.vision);
  imageChangeFull(name);

  var charName = document.querySelector("#charName");
  charName.innerText = coderData.name;
  var charVision = document.querySelector("#vision");
  charVision.innerText = coderData.vision;
  var charTitle = document.querySelector("#charTitle");
  charTitle.innerText = coderData.title;
  var charDescription = document.querySelector("#charDescription");
  charDescription.innerText = coderData.description;
  var charWeaponType = document.querySelector("#charWeaponType");
  charWeaponType.innerText = coderData.weapon;
  var charRarity = document.querySelector("#charRarity");
  charRarity.innerText = coderData.rarity + " stars";
  var charAffiliation = document.querySelector("#charAffiliation");
  charAffiliation.innerText = "Affiliation: " + coderData.affiliation;
  var constellation = document.querySelector("#constellation");
  constellation.innerText = "Constellation: " + coderData.constellation;
  var normalAttackInfo = document.querySelector("#normalAttackInfo");
  normalAttackInfo.innerText = coderData.skillTalents[0].description;
  var elementalAttackInfo = document.querySelector("#elementalAttackInfo");
  elementalAttackInfo.innerText = coderData.skillTalents[1].description;
  var elementalBurstInfo = document.querySelector("#elementalBurstInfo");
  elementalBurstInfo.innerText = coderData.skillTalents[2].description;
}
function imageChangeFull(name) {
  var photo = document.querySelector("#characterImageFull");
  photo.src = `./assets/characters/${name}full.png`;
  photo.alt = name + " full";
}

function imageChange(name) {
  var photo = document.querySelector("#dynamicCharPhoto");
  photo.src = `./assets/characters/${name}.png`;
  photo.alt = name;
}
function visionChange(vision) {
  var photo = document.querySelector("#dynamicVisionPhoto");
  photo.src = `./assets/vision/${vision}.png`;
  photo.alt = vision;
}
function backgroundChange(vision) {
  for (var i = 0; i < 4; i++) {
    document
      .getElementById("backGrab" + i)
      .classList.remove(
        "Geo",
        "Hydro",
        "Anemo",
        "Dendro",
        "Electro",
        "Cryo",
        "Pyro"
      );
    document.getElementById("backGrab" + i).classList.remove("standard");
    document.getElementById("backGrab" + i).classList.add(vision);
  }
}
function starChange(rarity) {
  let photo = document.querySelector("#stars");
  photo.src = `./assets/otherImages/${rarity}star.png`;
  photo.alt = `${rarity} stars`
}

// weapons 

async function getWeaponData(name) {
  var response = await fetch(`https://api.genshin.dev/weapons/${name}`);
  var weaponData = await response.json();

  var weaponName = document.querySelector("#weaponName");
  weaponName.innerText = weaponData.name;
  var weaponType = document.querySelector("#weaponType");
  weaponType.innerText = weaponData.type;
  var weaponRarity = document.querySelector("#weaponRarity");
  weaponRarity.innerText = weaponData.rarity + " stars";
  var weaponBaseAttk = document.querySelector("#weaponBaseAttk");
  weaponBaseAttk.innerText = "Base Attack: " + weaponData.baseAttack;
  var weaponSubStat = document.querySelector("#weaponSubStat");
  weaponSubStat.innerText = weaponData.subStat;
  var weaponPassName = document.querySelector("#weaponPassName");
  weaponPassName.innerText = weaponData.passiveName;
  var weaponPassDesc = document.querySelector("#weaponPassDesc");
  weaponPassDesc.innerText = weaponData.passiveDesc;
  var weaponAscMat = document.querySelector("#weaponAscMat");
  weaponAscMat.innerText = "Weapon Ascension Material: " + weaponData.ascensionMaterial;

  starChange2(weaponData.rarity);
  imageChange2(name);
  backgroundChange2(weaponData.rarity);
}

function starChange2(rarity) {
  let photo = document.querySelector("#dynamicStar");
  photo.src = `./assets/otherImages/${rarity}star.png`;
  photo.alt = `${rarity} stars`
  }

  function imageChange2(name) {
    var photo = document.querySelector("#dynamicWeapon");
    photo.src = `./assets/weapons/${name}.png`;
    photo.alt = name;
  }

  function backgroundChange2(rarity) {
    var myElement = document.getElementById("dynamicStarBackdrop")
    console.log(myElement);
    myElement.classList.remove("star3","star1","star4","star5","star2");
    myElement.classList.remove("standard");
    myElement.classList.add("star" + rarity);
  }