const headers = document.querySelectorAll('[data-name="accordion-title"]');



headers.forEach(function (item) {
    
    item.addEventListener('click', function () {
        console.log(this); 
        this.nextElementSibling.classList.toggle('hidden');
    })
})