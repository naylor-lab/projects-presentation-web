const { NekosAPI } = require("nekosapi");
const nekos = new NekosAPI(); 


nekos.getRandomImage((categories = [""])).then((image) => {

 let = image.url; 

});
