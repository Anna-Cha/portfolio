    const scriptURL = 'https://script.google.com/macros/s/AKfycbxida7UPfWfZDt0rM74zPQ7ux-HTpZqUwtTskRlfV2R30_Y-hbFmzI4wc61faqVJF5p/exec'
    const form = document.forms['submit-to-google-sheet']
    const submit = document.getElementById("submit")
          
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            submit.innerHTML = "Your message was sent successfully! Thank you."
            setTimeout(function(){
                submit.innerHTML = ""
                }, 2000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
