const div_items = document.querySelector("#items")


let items = [
    {
        "name" : "Mørke egetræ",
        "price" : 1000,
        "image" : "../images/productimg/morkegetrea.png",
        "save" : "../images/productimg/nofill.png",
        "putinbag": "../images/productimg/bag.png",
    },
    {
        "name" : "masiv lys egetræ",
        "image": "../images/productimg/massive1.png",
        "price" : 1800,
        "putinbag": "../images/productimg/bag.png",
        "save" : "../images/productimg/nofill.png",
    },
    {
        "name" : "Massiv mørk egetræ",
        "price" : 1500,
        "image" : "../images/productimg/massive2.png",
        "save" : "../images/productimg/nofill.png",
        "putinbag" : "../images/productimg/bag.png",
    },
    {
        "name" : "lys tynd egetræ",
        "price" : 2500,
        "image" : "../images/productimg/lightlightchair.png",
        "save": "../images/productimg/nofill.png",
        "putinbag": "../images/productimg/bag.png",
    },
    {
    "name": "Idunstol",
    "price": 2500,
    "image": "../images/productimg/idunstol.png",
    "save": "../images/productimg/nofill.png",
    "putinbag": "../images/productimg/bag.png",
},
{
    "name" : "redoakchair",
    "image" : "../images/productimg/redoakchair.png",
    "price" : 2500,
    "save" : "../images/productimg/nofill.png",
    "putinbag": "../images/productimg/bag.png",
},



]

items.forEach(item => {
    const div_item = `
    <div class="itemroshni">
      <img src="${item.image}" alt="${item.name}">
      <section>
        <div class="product-info-roshni">
          <p class="titelroshni">${item.name}</p>
          <p class="prisroshni">${item.price} kr;</p>
        </div>
        <div>
          <img class="nofillroshni" src="${item.save}" alt="save">
          <img id="bagroshni" src="${item.putinbag}" alt="bag">
        </div>
      </section>
    </div>
  `

    div_items.insertAdjacentHTML("afterbegin", div_item);
})

const div_itemstwo =document.querySelector("#itemstwo")
let itemstwo = [
    {
        "name": "bord",
        "price": 2500,
        "image": "../images/productimg/browntable.png",
        "save": "../images/productimg/nofill.png",
        "putinbag": "../images/productimg/bag.png",
    },
    {
        "name" : "redoakchair",
        "image" : "../images/productimg/idunstol.png",
        "price" : 2500,
        "save" : "../images/productimg/nofill.png",
        "putinbag": "../images/productimg/bag.png",
    },
  
]
itemstwo.forEach(itemtwo =>{
    const div_itemtwo = `
   <div class="itemroshni">
      <img src="${itemtwo.image}" alt="${itemtwo.name}">
      <section>
        <div class="product-info-roshni">
          <p class="titelroshni">${itemtwo.name}</p>
          <p class="prisroshni">${itemtwo.price} kr;</p>
        </div>
        <div>
          <img class="nofillroshni" src="${itemtwo.save}" alt="save">
          <img id="bagroshni" src="${itemtwo.putinbag}" alt="bag">
        </div>
      </section>
    </div> ` 
    div_itemstwo.insertAdjacentHTML("afterbegin", div_itemtwo);
})
const inspBtn = document.getElementById('whiteBox');
const inspCard = document.getElementById('white-chair-card');
inspBtn.addEventListener('click', () => {
    if (inspCard.style.display === 'block') {
      inspCard.style.display = 'none';
    } else {
      inspCard.style.display = 'block';
    }
  });
  