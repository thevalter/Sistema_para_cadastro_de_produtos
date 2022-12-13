import getData from "./controllers/getData.js";
import postData from "./controllers/postData.js";
import deleteData from "./controllers/deleteData.js";
import putData from "./controllers/putData.js";
import getDataById from "./controllers/getDataById.js";

let index = document.getElementById('product').dataset.index;

getData();

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach(field => field.value = "");
};

const openModal = () => document.getElementById('modal')
    .classList.add('active');

const closeModalAndRefresh = () => {
    clearFields();
    document.getElementById('modal').classList.remove('active');
    document.querySelector('#tableProducts>tbody').innerHTML = '';
    getData();
};

document.getElementById('createProduct')
    .addEventListener('click', () => {
        openModal();
        index = 'new';
    });

document.getElementById('modalClose')
    .addEventListener('click', closeModalAndRefresh);

document.getElementById('cancel')
    .addEventListener('click', closeModalAndRefresh);

document.querySelector('#save')
    .addEventListener('click', async () => {
        
        if (index == 'new') {
            await postData();
            closeModalAndRefresh();
        } else {
            await putData(index);
            closeModalAndRefresh();
        }
    });

document.querySelector('#tableProducts>tbody')
    .addEventListener('click', async (event) => {
        event.preventDefault();

        const targetEdit = event.target.getAttribute('data-edit');
        const targetRemove = event.target.getAttribute('data-remove');

        if (targetEdit) {
            index = targetEdit
            getDataById(targetEdit);
            openModal();
        }

        if (targetRemove) {
            await deleteData(targetRemove);
            closeModalAndRefresh();
        }
    });

