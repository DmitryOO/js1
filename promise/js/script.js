
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let promise = new Promise(function(resolve,reject){
        let request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        request.onreadystatechange = function() {
            if (request.status === 200) {
                let data = JSON.parse(request.response);

                resolve(data);
            } else {
                // inputUsd.value = "Что-то пошло не так!";
                reject();
            }
        };
    });
    promise .then((result)=>{
                    inputUsd.value = (inputRub.value / result.usd).toFixed(2);
                })
            .catch(()=>console.log( "Что-то пошло не так!"));
});