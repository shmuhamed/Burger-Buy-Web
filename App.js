let burgerslist = document.querySelector('.burgers');
let orders = document.querySelector('.orderdburgers');
let total = document.getElementById('total');
let subtotal = document.getElementById('subtotal');
let taxtotal = document.getElementById('tax');
let itemnumber = document.getElementById('itemnumber');
let burgers = [{
    name:"Chilli Burger",
    image:"https://www.seriouseats.com/thmb/5DpGTCqdFbgvpFIrqRqfww3eZy4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__06__20130611-burger-week-grilled-burger-variations-13-d5217d9167b54ef5be8f3e4a57442813.jpg",
    price: 15
},
{
    name:"Kubie Burger",
    image:"https://cdn.shopify.com/s/files/1/0372/4188/0621/products/KubbieCooked_1024x1024@2x.jpg?v=1598661751",
    price: 25
},
{
    name:"Nut Burger",
    image:"https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2010/03/Nutburger.jpg",
    price: 19
},
{
    name:"Poached Burger",
    image:"https://www.ovoteam.net/sites/default/files/styles/social_share/public/2019-09/Burger_0.jpg?itok=B3lu_g_O",
    price: 24
},
{
    name:"Steamed Chesse Burger",
    image:"https://www.framedcooks.com/wp-content/uploads/2021/07/steamed-cheeseburgers.jpg",
    price: 32
},
{
    name:"Theta Burger",
    image:"https://www.tworows.com/wp-content/uploads/2018/03/theta-burger-restaurants-allen-tx.jpg",
    price:21
},
{
    name:"Pimento Cheese Burger",
    image:"https://www.belbrandsfoodservice.com/wp-content/uploads/2018/05/recipe-desktop-merkts-pimento-cheese-burger-1100x570.jpg",
    price:30
},
{
    name:"Green Chile Burger",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_yU56ymCewHQ5y9AnTOKslPv8_EZLupshA&usqp=CAU",
    price: 28
}
]
burgers.forEach((element,index)=>{
    let newelement = ``;
    newelement = `
                <div class="burger">
                <div class="image">
                    <img src="${element.image}"
                        alt="">
                </div>
                <div class="title">${element.name}</div>
                <div class="bottom">
                    <div class="price">$${element.price}</div>
                    <div class="cart"><i class="fa-solid fa-cart-plus" id="${index}" onclick="ordernow(this.id)"></i></div>
                </div>
                </div>
    `
    burgerslist.innerHTML += newelement;
})
let orderedburger = [];
function ordernow(index){
 orderedburger.push(burgers[index]);
 orders.innerHTML = "";
 orderedburger.forEach((element,index)=> {
    let neworder = ``;
    neworder= `
    <div class="burger">
   
    <div class="icon"><img
            src="${orderedburger[index].image}"
            alt=""></div>
    <div class="title">
        <h1>${orderedburger[index].name}</h1>
        <p>$${orderedburger[index].price}</p>
    </div>
    <div class="delete"><i class="fa-regular fa-circle-xmark" id="${index}" onclick="removeitem(this.id)"></i></div>
   </div>
               `
   orders.innerHTML+=neworder;           
 })
 cashcalc();
}
function removeitem(index){
    orderedburger.splice(index,1);
    orders.innerHTML = "";
 orderedburger.forEach((element,index)=> {
    let neworder = ``;
    neworder= `
    <div class="burger">
   
    <div class="icon"><img
            src="${orderedburger[index].image}"
            alt=""></div>
    <div class="title">
        <h1>${orderedburger[index].name}</h1>
        <p>$${orderedburger[index].price}</p>
    </div>
    <div class="delete"><i class="fa-regular fa-circle-xmark" id="${index}" onclick="removeitem(this.id)"></i></div>
   </div>
               `
   orders.innerHTML+=neworder;           
 })
 cashcalc();
}
function cashcalc(){
    let totalcash =0;
    orderedburger.forEach(element=>{
        totalcash = totalcash + element.price;
    })
     subtotal.innerHTML = `$`+totalcash;
     taxtotal.innerHTML = `$`+(totalcash*10/100);
     total.innerHTML = `$`+(totalcash+(totalcash*10/100));
     itemnumber.innerHTML = orderedburger.length;
}

