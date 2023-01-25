var fetchButton = document.getElementById('Plant');

function getApi() {
    var requestUrl = '';
    
    fetch(requestUrl)
     .then(function (response) {
        return response.json();
     })
     .then(function (data) {
        console.log(data)
     })


}


fetchButton.addEventListener('click', getApi);