let form = document.querySelector('form');
let email = document.getElementById('email');
let textForm = document.getElementById('textForm');
let textEmail = document.getElementById('textEmail');

form.addEventListener('submit', (e) => {
    // if(email.value == '') {
    //  textForm.textContent = 'Você precisa preencher o Email'   
    // } else if(validatorEmail(email.value) === true) {
    //      console.log(email.value);
    //      textForm.textContent = "";
    //      textEmail.textContent = "";
    // }
    
    // else {
    //   console.log("Requisição Não Atendida");   
    // }
     
    e.preventDefault()
});


// email.addEventListener("keyup", () => {
//     if(validatorEmail(email.value) !== true) {
//       textEmail.textContent = "o formato do email deve ser Ex: exemplo@abc.com"
//     }else {
//       textEmail.textContent = "";
//     }
// });

// function validatorEmail(email) {
//     let emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
//     return emailPattern.test(email)
// };