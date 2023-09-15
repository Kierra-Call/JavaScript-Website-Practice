// let options = {
//     method: 'GET',
//     headers: { 'X-Api-Key': 'aNN7ZuQKDB0q/VUF5zMPcw==TzxvLlXZeqZw6ol5' }
//   }
  
//   let url = 'https://api.api-ninjas.com/v1/dogs?name='
  
  
//   fetch(url,options)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//           console.log(data)
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         }); 

async function getData(name) {
    var response = await fetch(`https://api.genshin.dev/weapons/${name}`);
    var coderData = await response.json();
    console.log(coderData);
    // console.log(coderData.name)
    var test = document.querySelector("#test");
    test.innerText = coderData.name;
    imageChange(name);
}
    
// getData('wolf-s-gravestone');

function imageChange(name) {
    var photo = document.querySelector("#dynamicPhoto");
    photo.src = `./assets/${name}.png`
}