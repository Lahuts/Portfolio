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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear_right");
            }
        });
    });
    let elements = document.querySelectorAll('.grid_right');
    elements.forEach((element) => {
        observer.observe(element,'appear_right');
    }
    );
    let lefts = document.querySelectorAll('.grid_left');
    lefts.forEach((left) => {
        observer.observe(left,'appear_left');
    });
});