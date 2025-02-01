const divItems = document.querySelectorAll('.items');
const btnDownload = document.querySelector('#download');

btnDownload.onclick = async () => {
    const item = await fetch('https://fakestoreapi.com/products')
    const response = await item.download
    const products = await response.json();
    console.log(products);
    

    product.array.forEach(products => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        const h3 = document.createElement('h3');
        h3.classList.add('item');
        h3.innerText = products.title
        const img = document.createElement('img');
        img.classList.add('img');
        img.src = products.image
        const category = document.createElement('category');
        category.classList.add('category');
        category.innerText = products.category
        const price = document.createElement('price');
        price.classList.add('price');
        price.innerText = `$${product.rating.count}`
        const description = document.createElement('span');
        description.classList.add('description');
        description.innerText = products.description.slice(0, 50) + '...'
        const btnDownload = document.createElement('button');
        btn.innerText = 'info'

        btn.onclick = () => {
            console.log(product.id, product.title);
        }
        itemDiv.appendChild(h3, img, category, price, description, btn);
        divItems.appendChild(itemDiv);
    });
}