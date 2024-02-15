const items = [
  {
    id: "001",
    image: "images/veg/1.jpeg",
    item_name: "veg momo",
    original_price: 200,
    current_price: 150,
    discount_percentage: 25,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "002",
    image: "images/veg/2.jpeg",
    item_name: "mashroom momo",
    original_price: 250,
    current_price: 150,
    discount_percentage: 35,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "003",
    image: "images/veg/4.jpeg",
    item_name: "yellow corn momo",
    original_price: 200,
    current_price: 150,
    discount_percentage: 25,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "004",
    image: "images/veg/4.jpeg",
    item_name: "green veg momo",
    original_price: 200,
    current_price: 150,
    discount_percentage: 25,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "005",
    image: "images/veg/5.jpeg",
    item_name: "fried momo",
    original_price: 200,
    current_price: 150,
    discount_percentage: 25,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "006",
    image: "images/veg/6.jpeg",
    item_name: "butter chilli momo",
    original_price: 200,
    current_price: 150,
    discount_percentage: 25,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "005",
    image: "images/veg/5.jpeg",
    item_name: "fried momo",
    original_price: 200,
    current_price: 150,
    discount_percentage: 25,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "006",
    image: "images/veg/6.jpeg",
    item_name: "butter chilli momo",
    original_price: 200,
    current_price: 150,
    discount_percentage: 25,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
];
const itemes = [
  {
    id: "01",
    image: "images/non-veg/a.jpeg",
    item_name: "non-veg plane momo",
    original_price: 200,
    current_price: 150,
    discount_percentage: 25,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "02",
    image: "images/non-veg/b.jpeg",
    item_name: "mashroom chicken momo",
    original_price: 250,
    current_price: 150,
    discount_percentage: 35,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "03",
    image: "images/non-veg/c.jpeg",
    item_name: "yellow corn meat momo",
    original_price: 200,
    current_price: 150,
    discount_percentage: 25,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "04",
    image: "images/non-veg/d.jpeg",
    item_name: "green kabab momo",
    original_price: 200,
    current_price: 150,
    discount_percentage: 25,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "05",
    image: "images/non-veg/e.jpeg",
    item_name: "fried chicken momo",
    original_price: 200,
    current_price: 150,
    discount_percentage: 25,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "06",
    image: "images/non-veg/f.jpeg",
    item_name: "butter chicken chilli momo",
    original_price: 200,
    current_price: 150,
    discount_percentage: 25,
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
];
let bagItems;
onLoad();
function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr): [];
  dispalyItemsOnHomePage();
dispalyBagIcon();

}


function addTobag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  dispalyBagIcon()
}
function dispalyBagIcon(){
    let bagItemCountElement =document.querySelector('.bag-item-count');
    if(bagItems.length>0){
      bagItemCountElement.style.visibility ='visible';
      bagItemCountElement.innerText =bagItems.length
    }else{
      bagItemCountElement.style.visibility ='hidden'
    }

    

}
function dispalyItemsOnHomePage() {
  let itemContainer = document.querySelector(".items_container");
if ( !itemContainer){
  return;
}
  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += ` <div class="item_container">
<img class="item_name" src="${item.image}" alt="item image">
<div class="rating">${item.rating.stars} ⭐|${item.rating.counting}
</div>


<div class="company_name">${item.item_name}</div>

<div class="price">
<span class="current_price">${item.current_price}</span>
<span class="original_price">${item.original_price}</span>
<span class="discount_percentage">${item.discount_percentage}%</span> 
</div>
<button class="add_btn" onClick="addTobag(${item.id})">Add to bag</button>
</div>`;
  });
  itemes.forEach((item) => {
    innerHtml += ` <div class="item_container">
<img class="item_name" src="${item.image}" alt="item image">
<div class="rating">${item.rating.stars} ⭐|${item.rating.counting}
</div>


<div class="company_name">${item.item_name}</div>

<div class="price">
<span class="current_price">${item.current_price}</span>
<span class="original_price">${item.original_price}</span>
<span class="discount_percentage">${item.discount_percentage}%</span> 
</div>
<button class="add_btn">Add to bag</button>
</div>`;
  });

  itemContainer.innerHTML = innerHtml;
};
