let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Ana Frank',
        imagens: 'O Diário De Anne Frank.webp',
        descricao: 'ana foi incrivel e DEUS a salvou',
        price: 120000
    },
    {
        id: 2,
        name: 'É Assim Que Acaba',
        imagens: 'WhatsApp Image 2023-08-16 at 22.42.34 (2).jpeg',
        descricao: 'Sinopse: É Assim Que Acaba É O Romance Mais Pessoal Da Carreira De Colleen Hoover.',
        price: 20
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: '',
        image: '',
        descricao: '',
        price: 140
    },
    {
        id:4 ,
        name: '',
        image: '',
        descricao: '',
        price: 140
    },
    {
        id: 5,
        name: '',
        image: '',
        descricao: '',
        price: 140
    },
    {
        id:6,
        name: '',
        image: '',
        descricao: '',
        price: 140
    },
    {
        id:7 ,
        name: '',
        image: '',
        descricao: '',
        price: 140
    },
    {
        id: 8,
        name: '',
        image: '',
        descricao: '',
        price: 140
    },
    {
        id: 9,
        name: '',
        image: '',
        descricao: '',
        price: 140
    },
    
    
];


let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="imagens/${value.imagens}">
            <div class="title">${value.name}</div>
            <div class="descricao">${value.descricao}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Comprar</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="imagens/${value.imagens}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}