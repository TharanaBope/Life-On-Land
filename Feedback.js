const form = document.getElementById('form'); //get references to the form and input fields
const username = document.getElementById('username');
const email = document.getElementById('email');


form.addEventListener('submit', function(e) {
    e.preventDefault(); //prevent the default form submission

    validateInputs(); //validate the inputs when the form is submitted
});

function setError(element, message) { //function to set error messages for invalid inputs

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message; //setthe error message
    inputControl.classList.add('error');
    inputControl.classList.remove('success'); //remove the success class
}

function setSuccess(element) { //function to indicate successful input validation
    
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(email) { //function to validate email format using a regular expression
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputs() { //function to validate the form inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    
    let nameValid = false;
    let emailValid = false;
    if(usernameValue === '') { //validate username
        setError(username, 'Name is required');
    } else {
        setSuccess(username);
        nameValid = true;
    }

    if(emailValue === '') { //validate email
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        emailValid = true;
    }

    if (nameValid && emailValid) {
        submitForm();
    }
}


const allStar = document.querySelectorAll('.rating .star') //get all star elements and the rating input element
const ratingValue = document.querySelector('.rating input')

allStar.forEach(function(item, idx) { //add click event listeners to each star element
    item.addEventListener('click', function() {
        let click = 0;
        ratingValue.value = idx + 1;

        allStar.forEach(function(i) { //reset the appearance of all stars
            i.classList.replace('bxs-star', 'bx-star');
            i.classList.remove('active');
        });
        for (let i = 0; i < allStar.length; i++) { //set the appearance of the stars up to the clicked star
            if (i <= idx) {
                allStar[i].classList.replace('bx-star', 'bxs-star');
                allStar[i].classList.add('active');
            } else {
                allStar[i].style.setProperty('--i', click);
                click++;
            }
        }
    });
});



 

    function handleUserFriendlyChange() { //function to handle changes in the user-friendly radio buttons
        const radios = document.querySelectorAll('input[name="user-friendly"]');
        const reasonTextarea = document.getElementById('reasonTextarea'); 
        
    
        radios.forEach(function(radio) {
            radio.addEventListener('change', function() {
                if (this.value === 'no') {
                    reasonTextarea.setAttribute('required', 'required');
                } else {
                    reasonTextarea.removeAttribute('required');
                    
                }
            });
        });
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        handleUserFriendlyChange();
    });
    


const formReset = document.getElementById("form");

formReset.addEventListener("reset", function() {
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("mailError").innerHTML = "";

   

    //reset borders
    const nameBox = document.getElementById("username").parentNode;
    if (nameBox.classList.contains('success')){
        nameBox.classList.remove('success');
    }
    if (nameBox.classList.contains('error')){
        nameBox.classList.remove('error');
    }
    const mailBox = document.getElementById("email").parentNode;
    if (mailBox.classList.contains('success')){
        mailBox.classList.remove('success');
    }
    if (mailBox.classList.contains('error')){
        mailBox.classList.remove('error');
    }
    

    //reset stars
    const stars = document.getElementsByClassName('star');
    for (i=0; i<stars.length; i++) {
        if(stars[i].classList.contains("active")) {
            stars[i].classList.remove("active");
            stars[i].classList.remove("bxs-star");
            stars[i].classList.add("bx-star");
        }
        else {
            break;
        }
    }
});



function submitForm() { //function to submit the form
    
    document.getElementById('form').submit();
}




