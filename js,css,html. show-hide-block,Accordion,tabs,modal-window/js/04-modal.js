
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');
const modalWindows = document.querySelectorAll('.modal-window');


modalButtons.forEach(function(item) {
    item.addEventListener('click', function () {
       const modalId = this.dataset.modalButton;
       const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');  
    });

});


modalCloseButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden'); 
    });
});


allModals.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.add('hidden');
    });
});


modalWindows.forEach(function (item) {
   item.addEventListener('click', function (event) {
    event.stopPropagation();
   })
})

