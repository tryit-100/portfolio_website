document.getElementById('email').addEventListener('click', function(){
    const modalSection = document.querySelector('modal-section');
    console.log(modalSection)
    const modalImg = document.getElementById('modal-img');
    modalImg.src = 'assets/icons/my-email-qr-code.svg';
})