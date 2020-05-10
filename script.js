// Email validation

const validateInput = () => {
    const email = document.getElementById('email-input').value;
    const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if(!email) setState('error');
    else{
        let emailStatus = regex.test(String(email).toLowerCase());
        if (emailStatus) setState("success");
        else setState("error");
    }
}

// Handle error and success response
const setState = (state) => {
    const input = document.getElementById("email-input");
        input.classList.remove("input--error","input--success");
        input.classList.add("input--" +state);
        input.parentElement.classList.remove("label--error","label--success");
        input.parentElement.classList.add("label--" +state);
        input.value = '';
  }

//   Handle button submit click 
  const submit = document.getElementById("btn-submit");
    submit.addEventListener("click", function(event){
  event.preventDefault();
  validateInput();
});