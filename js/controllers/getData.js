export default async function getData() {
    try {
        const resp = await fetch('http://localhost:3000/products');
        const data = await resp.json();

        data.map(el => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                    <td>${el.id}</td>
                    <td>${el.product}</td>
                    <td>${el.brand}</td>
                    <td>${el.price}</td>
                    <td>${el.amount}</td>
                    <td>
                        <button type="button" class="button green" id="edit" data-edit="${el.id}">Editar</button>
                        <button type="button" class="button red" id="delete" data-remove="${el.id}">Excluir</button>
                    </td>
                `;
            document.querySelector('#tableProducts>tbody').appendChild(newRow);
        });

    } catch (erro) {
        console.error(erro);
    };
};