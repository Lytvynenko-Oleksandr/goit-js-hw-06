const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInputEl = formEl.elements.email;
    const passwordInputEl = formEl.elements.password;

    console.log(emailInputEl, passwordInputEl);

    if (emailInputEl.value === "" || passwordInputEl.value === "") { 
        alert('Заполнены не все обязательные поля');
        return;
    };

    const formData = {
    email: emailInputEl.value,
    password: passwordInputEl.value,
    };
    
    console.log(formData);

    formEl.reset();
});
