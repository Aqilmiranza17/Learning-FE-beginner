const sessionStorageKey = 'PRESS_FREQUENCY';

//pengecekan: apakah data session storage dengan key count tersedia apa belum
if(typeof Storage !== 'undefined'){
    if(sessionStorage.getItem(sessionStorageKey) === null){
    //jika item pada localstorage belum ada maka akan diberi nilai 0
    sessionStorage.setItem(sessionStorageKey, 0);
    }
    
    const incrementButton = document.querySelector('#incrementButton');
    const clearButton = document.querySelector('#clear');
    const countDisplay = document.querySelector('#count');

    //memberikan nilai item pada session storage
    countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);

    //update nilai dari item session jika tombol ditekan
    incrementButton.addEventListener('click', function(){
        let count = sessionStorage.getItem(sessionStorageKey);
        count++;
        sessionStorage.setItem(sessionStorageKey, count);
        countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);
    });

    //memberikan nilai 0 karena direset dan  menghapus item
    clearButton.addEventListener('click', function(){
        sessionStorage.removeItem(sessionStorageKey);
        countDisplay.innerText = 0;
    });
}else{
    alert('browser yang anda gunakan tidak mendukung web storage');
}