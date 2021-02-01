/* $(document).ready(function() {
    $("#register-form").hide();
});

$("#signinbtn").click(function() {
    $("#email").tooltip('show');
});
//site page
$("#submit").click(function() {
    var datastring = "email=" + $("#email").val() + "";
//    console.log(datastring);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#email").val())) {
        $("#email").tooltip('destroy');
        $.ajax({
            type: 'POST',
            url: 'php/email.php',
            data: datastring,
            success: function(result) {
                console.log(result);//     does nothing
                if (result == 200) {
                    $('#myModal').modal('show');
                }
                else
                    alert('Something went wrong');
                ;
            }
        });
    }
    else {
        $("#email").tooltip('show');
    }
});
$("#submit-form").click(function() {
//    var datastring = "mail=" + $("#mail").val() + "||" + $("#name").val() + "||" + $("#message").val() + "";
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#mail").val())) {
        $("#email").tooltip('destroy');
        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: {
                name: $("#name").val(),
                email: $("#mail").val(),
                message: $("#message").val()
            },
            success: function(result) {
                console.log(result);//     does nothing
                if (result == 200) {
                    $('#myModal1').modal('show');
                }
                ;
            }
        });
    }
    else {
        $("#mail").tooltip('show');
    }
});
//login page
$("#register").click(function() {
    console.log("hello");
    $("#singin-form").hide(400);
    $("#register-form").show(200);
});
$("#alreadymember").click(function() {
    console.log("hello");
    $("#register-form").hide(400);
    $("#singin-form").show(200);
});
*/ 

//smooth scrolling
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      if (this.hash !== "") {

        event.preventDefault();

        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  

          window.location.hash = hash;
        });
      } 
    });
  });


  // contact form validation 

const name = document.getElementById('name')
const email = document.getElementById('email')



const checkName = () => {
    let valid = false;

    const nameValue = name.value.trim();

    if(nameValue === ''){
        // show error
        // add error  
        setErrorFor(name, 'Name cannot be blank');
    }else{
        // add success class
        setSuccessFor(name);
        valid=true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const emailValue = email.value.trim();

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }else{
        setSuccessFor(email);
        valid =  true;
    }
    return valid;
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

form.addEventListener('submit' , (e) => {
    

    // validate fields
    let isNameValid = checkName(),
        isEmailValid = checkEmail();

    let isFormValid = isNameValid && isEmailValid;
    //submit if the form is valid
    if (isFormValid) {
        
    }else {
        e.preventDefault();
    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'email':
            checkEmail();
            break;
    }
}));