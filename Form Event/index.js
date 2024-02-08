document.addEventListener("DOMContentLoaded", function(){
    const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength;
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;

    document.getElementById('inputNama').addEventListener('input',function(){
        const jumlahKarakterDiketik = document.getElementById('inputNama').value.length;
        const jumlahKarakterMaks = document.getElementById('inputNama').maxLength;

        console.log("Jumlah Karakter diketik: ", jumlahKarakterDiketik);
        console.log("Jumlah Karakter Maksimal: ", jumlahKarakterMaks);
        const sisaKarakterUpdate = jumlahKarakterMaks - jumlahKarakterDiketik;
        document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();

        if(sisaKarakterUpdate === 0){
            document.getElementById('sisaKarakter').innerText = 'Batas Maksimal tercapai';
        }else if(sisaKarakterUpdate <= 5){ 
            document.getElementById('notifikasiSisaKarakter').style.color= 'red';
        }else{
            document.getElementById('notifikasiSisaKarakter').style.color= 'black';
        }
    })


    document.getElementById('inputNama').addEventListener('focus', function(){
        console.log('inputNama: focus');
        document.getElementById('notifikasiSisaKarakter').style.visibility= 'visible';
    });

    document.getElementById('inputNama').addEventListener('blur', function(){
        console.log('inputNama: blur');
        document.getElementById('notifikasiSisaKarakter').style.visibility= 'hidden';
    });

    document.getElementById('inputCaptcha').addEventListener('change', function(){
        console.log('inputCaptcha: change');

        const inputCaptcha = document.getElementById('inputCaptcha').value;
        const submitButtonStatus = document.getElementById('submitButton');

        if(inputCaptcha === 'PRNU'){
            submitButtonStatus.removeAttribute('disabled');
        }else{
            submitButtonStatus.setAttribute('disabled','');
        }
    });

    document.getElementById('formDataDiri').addEventListener('submit', function(e){
        const inputCaptcha = document.getElementById('inputCaptcha').value;
        
        if(inputCaptcha === 'PRNU'){
            alert('Selamat!captcha Anda Lolos :D');
        }else{
            alert('Maaf!captcha anda belum tepat:(');
            document.getElementById('submitButton').setAttribute('disabled', '');
        }
        e.preventDefault();
    });

    // menambahkan event oncopy
    document.getElementById('inputCopy').addEventListener('copy', function(){
        alert('Anda telah menCopy Sesuatu...');
    });

    // menambahkan event onpaste
    document.getElementById('inputPaste').addEventListener('paste', function(){
        alert('Anda telah mem Paste sebuah Text...');
    });
    
    console.log('hello world');
    
});

