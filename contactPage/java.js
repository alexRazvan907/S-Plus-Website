const name = document.getElementById('name')
const email = document.getElementById('email')



form.addEventListener('submit' , (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    // get the values from the inputs
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();


    if(nameValue === ''){
        // show error
        // add error  
        setErrorFor(name, 'Name cannot be blank');
    }else{
        // add success class
        setSuccessFor(name);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }else{
        setSuccessFor(email);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-contact error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-contact success';
}

function isEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
}
