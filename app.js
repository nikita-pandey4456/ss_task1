document.addEventListener('DOMContentLoaded', function () {
    fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
        .then(response => response.json())
        .then(data => {
            const products = data.products;

            const sortedProducts = Object.keys(products)
                .map(key => ({ id: key, ...products[key] }))
                .sort((a, b) => b.popularity - a.popularity);

            displayProducts(sortedProducts);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayProducts(products) {
    const tableBody = document.getElementById('productBody');

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.popularity}</td>
        `;
        tableBody.appendChild(row);
    });
}
