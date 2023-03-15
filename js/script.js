

const list = [
    'pasta',
    'pesto',
    'pane',
    'senape',
    'acqua',
    'carne',
    'torta al cioccolato',
    'insalata'
];

const shop = document.querySelector('.box');

let shopItems = '';
let index = 0;

while(index < list.length){
    shopItems += 
    `
        <li>${list[index]}</li>
    `;
    index ++;
};
shop.innerHTML = shopItems;