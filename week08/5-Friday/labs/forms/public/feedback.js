//form submit
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(document.querySelector('#fName').value);
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fName: document.querySelector('#fName').value,
            lName: document.querySelector('#lName').value
        })
    })
    .then(response => response.json())
    .then((data) => {
        console.log(`response from post ${data}`);
        let info = document.querySelector('#info');
        info.innerHTML += `${data}<br>`
    })
})