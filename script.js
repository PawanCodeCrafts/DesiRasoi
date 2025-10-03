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

    // add message after form submission
    popup.innerHTML = `Thank you for contacting us,<span class="highlight-name"> ${myname}</span> ! We will get back to you shortly.`;

    // popup visible 
    popup.classList.add('popup');

    // fade-in 
    setTimeout(() => {
        popup.classList.add('show');
    }, 50);

    // fade-out after 5s
    setTimeout(() => {
        popup.classList.remove('show');
    }, 5000);



    // clear form after submit
    form.reset();
});