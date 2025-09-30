const form = document.getElementById('form');
const popup = document.getElementById('popup');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const myname = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const msg = document.getElementById('msg').value.trim();

    if (!myname || !email || !phone || !msg) {
        alert("Please fill all the fields");
        return;
    }

    popup.innerHTML = `Thank you for contacting us, ${myname}! We will get back to you shortly.
`;
    form.reset();
});