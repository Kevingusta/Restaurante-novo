document.getElementById('product-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obter os valores do formulário
    const categoria = document.getElementById('product-category').value;
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const description = document.getElementById('product-description').value;

    // Adicionar produto à tabela
    addProductToTable(categoria, name, price, description);

});

function addProductToTable( categoria, name, price, description) {
    const tableBody = document.getElementById('product-table').querySelector('tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${categoria}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${description}</td>
        <td>
            <button class="action-btn delete">Remover</button>
        </td>
    `;

    tableBody.appendChild(row);
}

function deleteProduct(button) {
    // Remover o produto da tabela
    button.parentElement.parentElement.remove();
}

document.getElementById('product-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Capturar o valor selecionado
    const category = document.getElementById('product-category').value;

    console.log('Categoria selecionada:', category);

    // Continue com o processo de adição do produto...
});
