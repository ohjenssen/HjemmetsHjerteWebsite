const div_items = document.querySelector("#items")


let items = [
    {
        "name" : "Henrik Jespersen| Rund stol",
        "image" : "../images/productimg/henrikjespersenstol.png",
        "price" : 11500,
        "save" : "../images/productimg/nofill.png",
        "putinbag": "../images/productimg/bag.png",
        "year":2023,
        "color":"dark"

    }, {
        "name" : "HjemmetsHerte|Giv navn",
        "price" : 800,
        "image" : "../images/productimg/morkegetrea.png",
        "save" : "../images/productimg/nofill.png",
        "putinbag": "../images/productimg/bag.png",
        "year":2023,
       "color":"dark"
    },
    {
        "name" : "Hjemmets Hjerte|Massiv stol|",
        "image": "../images/productimg/massive1.png",
        "price" : 4800,
        "putinbag": "../images/productimg/bag.png",
        "save" : "../images/productimg/nofill.png",
        "year":2020,
        "color":"light"
    },
    {
        "name" : "Hjemmets Hjerte|Massiv mørk egetræ",
        "price" : 1500,
        "image" : "../images/productimg/massive2.png",
        "save" : "../images/productimg/nofill.png",
        "putinbag" : "../images/productimg/bag.png",
        "year":2020,
        "color":"light"
    },
    {
        "name" : "Hjemmets Hjerte|lys tynd egetræ",
        "price" : 2500,
        "image" : "../images/productimg/lightlightchair.png",
        "save": "../images/productimg/nofill.png",
        "putinbag": "../images/productimg/bag.png",
        "year":2008,
        "color":"light"

    },
    {
    "name": "Hjemmets Hjerte|Idunstol",
    "price": 2900,
    "image": "../images/productimg/idunstol.png",
    "save": "../images/productimg/nofill.png",
    "putinbag": "../images/productimg/bag.png",
    "year":2008,
    "color":"light"

},
{
    "name" : "Hjemmets Hjerte|Red-Oak-Chair",
    "image" : "../images/productimg/redoakchair.png",
    "price" : 6500,
    "save" : "../images/productimg/nofill.png",
    "putinbag": "../images/productimg/bag.png",
    "year":2008,
    "color":"dark"

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
          <p class="year">${item.year} udgivelsesår</p>

       
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
        "price" : 1500,
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
const closeBtn = document.getElementById('closeBtn');
inspBtn.addEventListener('click', () => {
    if (inspCard.style.display === 'block') {
      inspCard.style.display = 'none';
    } else {
      inspCard.style.display = 'block';
    }
  });

  closeBtn.addEventListener('click', ( )=>{
inspCard.style.display ='none';

  })
  

  const exspensiveBtn = document.querySelector("#exspensive");

  exspensiveBtn.addEventListener('click', () => {
      // Sort items by price
      items.sort((a, b) => a.price - b.price);
  
      // Clear the container first
      div_items.innerHTML = '';
  
      // Display the sorted items
      items.forEach(item => {
          const itemDiv = `
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
          </div>`;
          div_items.insertAdjacentHTML("beforeend", itemDiv);
      });
  });

//**Js for the cheapest first */
  const cheapestBtn = document.querySelector("#cheapest");
  cheapestBtn.addEventListener('click', () => {
      // Sort items by price
      items.sort((a, b) => b.price - a.price);
  
      // Clear the container first
      div_items.innerHTML = '';
  
      // Display the sorted items
      items.forEach(item => {
          const itemDiv = `
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
          </div>`;
          div_items.insertAdjacentHTML("beforeend", itemDiv);
      });
  });



  
//**Js for the udgivelses¨r first */
const newBtn = document.querySelector("#newest");
newBtn.addEventListener('click', () => {
    // Sort items by price
    items.sort(function(a, b){return b.year - a.year});

    // Clear the container first
    div_items.innerHTML = '';

    // Display the sorted items
    items.forEach(item => {
        const itemDiv = `
        <div class="itemroshni">
          <img src="${item.image}" alt="${item.name}">
          <section>
            <div class="product-info-roshni">
              <p class="titelroshni">${item.name}</p>
              <p class="prisroshni">${item.price} kr;</p>
                        <p class="year ">${item.year} udgivelsesår</p>

            </div>
            <div>
              <img class="nofillroshni" src="${item.save}" alt="save">
              <img id="bagroshni" src="${item.putinbag}" alt="bag">
            </div>
          </section>
        </div>`;
        div_items.insertAdjacentHTML("beforeend", itemDiv);
    });
});

//**from old to  */
const oldBtn = document.querySelector("#oldest");
oldBtn.addEventListener('click', () => {
    // Sort items by price
    items.sort(function(a, b){return a.year - b.year});

    // Clear the container first
    div_items.innerHTML = '';

    // Display the sorted items
   
    items.forEach(item => {
       
    
        const itemDiv = `
        <div class="itemroshni">
          <img src="${item.image}" alt="${item.name}">
          <section>
            <div class="product-info-roshni">
              <p class="titelroshni">${item.name}</p>
              <p class="prisroshni">${item.price} kr;</p>
             <p class="year">${item.year}(nyeste)udgivelsesår</p>

            </div>
            <div>
              <img class="nofillroshni" src="${item.save}" alt="save">
              <img id="bagroshni" src="${item.putinbag}" alt="bag">
            </div>
          </section>
        </div>`;
        div_items.insertAdjacentHTML("beforeend", itemDiv);
        
    });

  
    
});


    
//**srotering af henrikknap */
const HenrikBtn = document.querySelector("#Henrik");

HenrikBtn.addEventListener('click', () => {
    // Clear existing items displayed in the DOM
    div_items.innerHTML = '';

    // Loop through each item in the items array
    items.forEach(item => {
        // Check if the current item's name is "Henrik Jespersen| Rund stol"
        if (item.name === "Henrik Jespersen| Rund stol") {
            // If the condition is true, create HTML elements for the item and append them to div_items
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
            <div class="itemroshni">
            <img src="${item.image}" alt="${item.name}">
            <section>
              <div class="product-info-roshni">
                <p class="titelroshni">${item.name}</p>
                <p class="prisroshni">${item.price} kr;</p>
               <p class="year">${item.year}(nyeste)udgivelsesår</p>
  
              </div>
              <div>
                <img class="nofillroshni" src="${item.save}" alt="save">
                <img id="bagroshni" src="${item.putinbag}" alt="bag">
              </div>
            </section>
          </div>
            `;
            div_items.appendChild(itemDiv);
            div_items.style.width = "60%"; 
        } else {
            
            itemDiv.style.display = "none";
            div_items.style.width = "30%"; 
            div_item.style.marginTop = "600px"; 



        }
        div_items.insertAdjacentHTML("beforeend", itemDiv);
      // You can specify the width value in pixels, percentage, etc.
    });
});


const HHBtn = document.querySelector("#HJerte");

HHBtn.addEventListener('click', () => {
    
    div_items.innerHTML = '';

    items.forEach(item => {
        if (item.name === "Henrik Jespersen| Rund stol") {
         
        } else {
/**laver en div og knytter den som et child og */     
       const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <div class="itemroshni">
                    <img src="${item.image}" alt="${item.name}">
                    <section>
                        <div class="product-info-roshni">
                            <p class="titelroshni">${item.name}</p>
                            <p class="prisroshni">${item.price} kr;</p>
                            <p class="year">${item.year}(nyeste)udgivelsesår</p>
                        </div>
                        <div>
                            <img class="nofillroshni" src="${item.save}" alt="save">
                            <img id="bagroshni" src="${item.putinbag}" alt="bag">
                        </div>
                    </section>
                </div>
            `;
            div_items.appendChild(itemDiv);
           
         
        }
    });
});

const lightBtn = document.querySelector("#lightOak");

lightBtn.addEventListener('click', () => {
    // Clear existing items displayed in the DOM
    div_items.innerHTML = '';

    // Loop through each item in the items array
    items.forEach(item => {
        // Check if the current item's color is "light"
        if (item.color === "light") {
            // If the condition is true, create HTML elements for the item and append them to div_items
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <div class="itemroshni">
                    <img src="${item.image}" alt="${item.name}">
                    <section>
                        <div class="product-info-roshni">
                            <p class="titelroshni">${item.name}</p>
                            <p class="prisroshni">${item.price} kr;</p>
                            <p class="year">${item.year}(nyeste)udgivelsesår</p>
                        </div>
                        <div>
                            <img class="nofillroshni" src="${item.save}" alt="save">
                            <img id="bagroshni" src="${item.putinbag}" alt="bag">
                        </div>
                    </section>
                </div>
            `;
            div_items.appendChild(itemDiv);
        }
    });
});



const darkOakBtn = document.querySelector("#darkOak");

darkOakBtn.addEventListener('click', () => {
    // Clear existing items displayed in the DOM
    div_items.innerHTML = '';

    // Loop through each item in the items array
    items.forEach(item => {
        // Check if the current item's color is "light"
        if (item.color === "dark") {
            // If the condition is true, create HTML elements for the item and append them to div_items
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <div class="itemroshni">
                    <img src="${item.image}" alt="${item.name}">
                    <section>
                        <div class="product-info-roshni">
                            <p class="titelroshni">${item.name}</p>
                            <p class="prisroshni">${item.price} kr;</p>
                            <p class="year">${item.year}(nyeste)udgivelsesår</p>
                        </div>
                        <div>
                            <img class="nofillroshni" src="${item.save}" alt="save">
                            <img id="bagroshni" src="${item.putinbag}" alt="bag">
                        </div>
                    </section>
                </div>
            `;
            div_items.appendChild(itemDiv);
        }
    });
});


