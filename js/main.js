
/* Hamburger Menu on Click function */
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


/* Back to top button - https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Go to tshirt
function goToShirt(){
    document.body.scrollTop = 7000; //For Safari
    document.documentElement.scrollTop = 7000; //Chrome, Firefox etc
}
//Go to jumper
function goToJumpers(){
    document.body.scrollTop = 15000; //For Safari
    document.documentElement.scrollTop = 15000; //Chrome, Firefox etc
}

/* Product values */
let hoodies = [


    ['UCLan Hoodie','Purple','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (1).jpg'],
        ['UCLan Hoodie','Light Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (2).jpg'],
        ['UCLan Hoodie','Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (3).jpg'],
        ['UCLan Hoodie','Dark Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (4).jpg'],
        ['UCLan Hoodie','Black','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (5).jpg'],
        ['UCLan Hoodie','Salmon','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (6).jpg'],
        ['UCLan Hoodie','Burgundy','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (7).jpg'],
        ['UCLan Hoodie','Light Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (8).jpg'],
        ['UCLan Hoodie','Slate Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (9).jpg'],
        ['UCLan Hoodie','Orange','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (10).jpg'],
        ['UCLan Hoodie','Teal','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (11).jpg'],
        ['UCLan Hoodie','Navy','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (12).jpg'],
        ['UCLan Hoodie','Orange','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (13).jpg'],
        ['UCLan Hoodie','Creame','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (14).jpg'],
        ['UCLan Hoodie','Lime','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (15).jpg'],
        ['UCLan Hoodie','Off Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (16).jpg'],
        ['UCLan Hoodie','Red','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (17).jpg'],
        ['UCLan Hoodie','Charcoal','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (18).jpg'],
        ['UCLan Hoodie','Navy Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (19).jpg'],
        ['UCLan Hoodie','Lighter Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (20).jpg'],
        ['UCLan Hoodie','New Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (21).jpg'],
        ['UCLan Hoodie','Forest Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (22).jpg'],
        ['UCLan Hoodie','Ocean Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (23).jpg'],
        ['UCLan Hoodie','Pink','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (24).jpg'],
        ['UCLan Hoodie','Orange New','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (25).jpg'],
        ['UCLan Hoodie','Black','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (26).jpg'],
        ['UCLan Hoodie','Light Off Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (27).jpg'],
        ['UCLan Hoodie','Rusty Red','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (28).jpg'],
        ['UCLan Hoodie','Slate Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (29).jpg'],
        ['UCLan Hoodie','Bright Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (30).jpg'],
        ['UCLan Hoodie','Bright Pink','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (31).jpg'],
        ['UCLan Hoodie','Burgundy New','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (32).jpg'],
        ['UCLan Hoodie','Navy New','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (33).jpg'],
        ['UCLan Hoodie','Bright Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (34).jpg']
]

let tshirts = [
    ['UCLan Logo Tshirt','Navy Blue New','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (1).jpg'],
        ['UCLan Logo Tshirt','Rusty Red New','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (2).jpg'],
        ['UCLan Logo Tshirt','Burgundy','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (3).jpg'],
        ['UCLan Logo Tshirt','Pink','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (4).jpg'],
        ['UCLan Logo Tshirt','Teal','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (5).jpg'],
        ['UCLan Logo Tshirt','Black','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (6).jpg'],
        ['UCLan Logo Tshirt','Old Red','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (7).jpg'],
        ['UCLan Logo Tshirt','Grey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (8).jpg'],
        ['UCLan Logo Tshirt','Red','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (9).jpg'],
        ['UCLan Logo Tshirt','Brown','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (10).jpg'],
        ['UCLan Logo Tshirt','Pdark Purple','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (11).jpg'],
        ['UCLan Logo Tshirt','Yellow','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (12).jpg'],
        ['UCLan Logo Tshirt','Mustard Yellow','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (13).jpg'],
        ['UCLan Logo Tshirt','Dark Grey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (14).jpg'],
        ['UCLan Logo Tshirt','Dark Green','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (15).jpg'],
        ['UCLan Logo Tshirt','Bright Green','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (16).jpg'],
        ['UCLan Logo Tshirt','Olive Green','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (17).jpg'],
        ['UCLan Logo Tshirt','Dark Grey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (18).jpg'],
        ['UCLan Logo Tshirt','Orange','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (19).jpg'],
        ['UCLan Logo Tshirt','Purple','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (20).jpg'],
        ['UCLan Logo Tshirt','Slate Blue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (21).jpg'],
        ['UCLan Logo Tshirt','Bright Pink','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (22).jpg'],
        ['UCLan Logo Tshirt','Brightly Green','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (23).jpg'],
        ['UCLan Logo Tshirt','Lime Green','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (24).jpg'],
        ['UCLan Logo Tshirt','Ocean Blue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (25).jpg'],
        ['UCLan Logo Tshirt','Dark Red','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (26).jpg'],
        ['UCLan Logo Tshirt','Another Green','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (27).jpg'],
        ['UCLan Logo Tshirt','Slate Grey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (28).jpg'],
        ['UCLan Logo Tshirt','Bright Orange','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (29).jpg'],
        ['UCLan Logo Tshirt','Another Purple','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (30).jpg'],
        ['UCLan Logo Tshirt','Real Red','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (31).jpg'],
        ['UCLan Logo Tshirt','Brilliant Blue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (32).jpg'],
        ['UCLan Logo Tshirt','Creame','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (33).jpg'],
        ['UCLan Logo Tshirt','Teal Blue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (34).jpg'],
        ['UCLan Logo Tshirt','White','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',' Only £19.99','images/items/tshirts/tshirt (35).jpg']
]

let jumpers = [
    ['UCLan Logo Jumper','Purple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (1).jpg'],
    ['UCLan Logo Jumper','Rusty Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (2).jpg'],
    ['UCLan Logo Jumper','Water Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (3).jpg'],
    ['UCLan Logo Jumper','White','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (4).jpg'],
    ['UCLan Logo Jumper','Pink','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (5).jpg'],
    ['UCLan Logo Jumper','Black','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (6).jpg'],
    ['UCLan Logo Jumper','Old Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (7).jpg'],
    ['UCLan Logo Jumper','Dark Grey ','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (8).jpg'],
    ['UCLan Logo Jumper','Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (9).jpg'],
    ['UCLan Logo Jumper','Brown','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (10).jpg'],
    ['UCLan Logo Jumper','Green','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (11).jpg'],
    ['UCLan Logo Jumper','Dark Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (12).jpg'],
    ['UCLan Logo Jumper','Yellow','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (13).jpg'],
    ['UCLan Logo Jumper','Light Grey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (14).jpg'],
    ['UCLan Logo Jumper','Light Green','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (15).jpg'],
    ['UCLan Logo Jumper','Old Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (16).jpg'],
    ['UCLan Logo Jumper','Light Purple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (17).jpg'],
    ['UCLan Logo Jumper','Slate Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (18).jpg'],
    ['UCLan Logo Jumper','Real Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (19).jpg'],
    ['UCLan Logo Jumper','Old Pink','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (20).jpg'],
    ['UCLan Logo Jumper','Slate Grey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (21).jpg'],
    ['UCLan Logo Jumper','Bright Green','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (22).jpg'],
    ['UCLan Logo Jumper','Teal','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (23).jpg'],
    ['UCLan Logo Jumper','Sky Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (24).jpg'],
    ['UCLan Logo Jumper','Sunshine Pink','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (25).jpg'],
    ['UCLan Logo Jumper','Bronze','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (26).jpg'],
    ['UCLan Logo Jumper','Olive Green','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (27).jpg'],
    ['UCLan Logo Jumper','Bright White Green','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (28).jpg'],
    ['UCLan Logo Jumper','Navy Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (29).jpg'],
    ['UCLan Logo Jumper','Rusty Orange','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (30).jpg'],
    ['UCLan Logo Jumper','Bright Orange','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (31).jpg'],
    ['UCLan Logo Jumper','Sky Purple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (32).jpg'],
    ['UCLan Logo Jumper','Really Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (33).jpg'],
    ['UCLan Logo Jumper','Plum Purple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (34).jpg'],
    ['UCLan Logo Jumper','Dark Purple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (35).jpg'],
    ['UCLan Logo Jumper','Vibrant Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (36).jpg'],
    ['UCLan Logo Jumper','Ocean Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (37).jpg'],
    ['UCLan Logo Jumper','Creame','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (38).jpg'],
    ['UCLan Logo Jumper','Lighter Blue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (39).jpg'],
    ['UCLan Logo Jumper','Light Grey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',' Only £29.99','images/items/jumpers/jumper (40).jpg']
]

hoodies.forEach((element, index) => {
    let objHoodie = {}
    objHoodie.type = element[0]
    objHoodie.color = element[1]
    objHoodie.description = element[2]
    objHoodie.price = element[3]
    objHoodie.image = element[4]
    hoodies[index] = objHoodie
})

tshirts.forEach((element, index) => {
    let objTshirt = {}
    objTshirt.type = element[0]
    objTshirt.color = element[1]
    objTshirt.description = element[2]
    objTshirt.price = element[3]
    objTshirt.image = element[4]
    tshirts[index] = objTshirt
})

jumpers.forEach((element, index) => {
    let objJumpers = {}
    objJumpers.type = element[0]
    objJumpers.color = element[1]
    objJumpers.description = element[2]
    objJumpers.price = element[3]
    objJumpers.image = element[4]
    jumpers[index] = objJumpers
})

//Evaluate each hoodie and display its details
hoodies.forEach(function (hoodie) {
    let card = `
        <div class="card">
            <img class="product-image" src="${hoodie.image}">
            <h1 class="product-type">${hoodie.type}</h1>
            <p>Color: ${hoodie.color}</p>
            <p>${hoodie.description}</p>
            <p class="price">${hoodie.price}</p>
            <p><button>Buy</button></p>
        </div>
    `;

    // Add the card to the page
    document.getElementById('product-container').innerHTML += card;
});

//Evaluate each tshirt and display its details
tshirts.forEach(function (tshirt) {
    let card = `
        <div class="card">
            <img class="product-image" src="${tshirt.image}">
            <h1 class="product-type">${tshirt.type}</h1>
            <p>Color: ${tshirt.color}</p>
            <p>${tshirt.description}</p>
            <p class="price">${tshirt.price}</p>
            <p><button>Buy</button></p>
        </div>
    `;

    // Add the card to the page
    document.getElementById('product-container').innerHTML += card;
});

//Evaluate each jumper and display its details
jumpers.forEach(function (jumper) {
    let card = `
        <div class="card">
            <img class="product-image" src="${jumper.image}">
            <h1 class="product-type">${jumper.type}</h1>
            <p>Color: ${jumper.color}</p>
            <p>${jumper.description}</p>
            <p class="price">${jumper.price}</p>
            <p><button>Buy</button></p>
        </div>
    `;

    // Add the card to the page
    document.getElementById('product-container').innerHTML += card;
});





