const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];

const renderProduct = (product, img = 'https://img-9gag-fun.9cache.com/photo/a27ZnNO_700bwp.webp') => {
    return `<div class="product-item">
                <img class="img" src="${img}">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(product =>
        renderProduct(product)).join('');
};

renderPage(products);