
async function getCharData(name) {
    var response = await fetch(`https://api.genshin.dev/characters/${name}`);
    var coderData = await response.json();

    imageChange(name);
    visionChange(coderData.vision);
    backgroundChange(coderData.vision);

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
    charAffiliation.innerText = 'Affiliation: ' + coderData.affiliation;
    var constellation = document.querySelector("#constellation");
    constellation.innerText = 'Constellation: ' + coderData.constellation;
    var normalAttackInfo = document.querySelector("#normalAttackInfo");
    normalAttackInfo.innerText = coderData.skillTalents[0].description;
    var elementalAttackInfo = document.querySelector("#elementalAttackInfo");
    elementalAttackInfo.innerText = coderData.skillTalents[1].description;
    var elementalBurstInfo = document.querySelector("#elementalBurstInfo");
    elementalBurstInfo.innerText = coderData.skillTalents[2].description;


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
        document.getElementById("backGrab"+ i).classList.remove('Geo', 'Hydro', 'Anemo', 'Dendro', 'Electro', 'Cryo', 'Pyro');
        document.getElementById("backGrab"+ i).classList.remove('standard');
        document.getElementById("backGrab"+ i).classList.add(vision);
    }
}