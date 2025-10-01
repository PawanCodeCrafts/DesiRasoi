// access form
const form = document.getElementById('form');
const popup = document.getElementById('popup');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // access form fields with value
    const myname = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const msg = document.getElementById('msg').value.trim();

    // apply basic validation
    if (!myname || !email || !phone || !msg) {
        alert("Please fill all the fields");
        return;
    }

    //  message after form submission
    popup.innerHTML = `Thank you for contacting us,<span class="highlight-name"> ${myname}</span> ! We will get back to you shortly.`;

    // add popup + fade in
    popup.classList.add('popup');
    setTimeout(() => {
        popup.classList.add('show')
    }, 5);

    // clear form after submit
    form.reset();
});