document.addEventListener('DOMContentLoaded',(e) => {
    let btnDocs = document.querySelector('.btn-doc');
    btnDocs.addEventListener('click', (e) => {
        let mdl = document.querySelector('.modal-document');
        mdl.classList.remove('disabled');
    });
    let close = document.querySelector('.close');
    close.addEventListener('click', (e) => {
        let mdl = document.querySelector('.modal-document');
        mdl.classList.add('disabled');
    });
});