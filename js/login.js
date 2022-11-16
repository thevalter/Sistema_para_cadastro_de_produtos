document.getElementById('submit').addEventListener('click', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome');
    const senha = document.getElementById('senha');
    await fetch('http://localhost:3000/login').then(res => res.json()).then(result => result.map(el => {
        if (nome.value === el.name && senha.value === el.password) {
            document.querySelector('.container-main').style.display = 'flex';
            document.querySelector('.login').style.display = 'none';
        } else {
            alert('senha incorreta');
        }
    }));
    nome.value = '';
    senha.value = '';
});

document.querySelector('#close-session').addEventListener('click', () => {
    document.querySelector('.container-main').style.display = 'none';
    document.querySelector('.login').style.display = 'flex';
})