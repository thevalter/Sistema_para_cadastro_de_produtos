export default async function postData() {
    try {
        const product = document.querySelector('#product').value;
        const brand = document.querySelector('#brand').value;
        const price = document.querySelector('#price').value;
        const amount = document.querySelector('#amount').value;
        await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product, brand, price, amount})
        });
    } catch (erro) {
        console.error(erro);
    }
};
