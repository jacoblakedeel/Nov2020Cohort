let form = document.querySelector('form');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            fetch('/forum', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: document.getElementById('name').value,
                    message: document.getElementById('message').value
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                let comments = document.getElementById('comments');
                comments.innerHTML += `<b>${data.name}</b> <br>${data.message}<br>`
            })
        })