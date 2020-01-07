
const { ipcRenderer } = require('electron');
const email = "kt@co";
const password = '123456'
function ClearError(){
    document.getElementById('error').innerHTML="";
    console.log('version changes 0.0.3');

}
// listen to the add button click event
document.getElementById('loginForm').addEventListener('submit', (event) => {
    console.log('version changes 0.0.3');

    console.log(localStorage);
    console.log(event);
    event.preventDefault();
    const emailVal = document.getElementById('email').value;
    const passwordVal = document.getElementById('password').value;
    console.log(emailVal,passwordVal);
    console.log(email,password);
    if (email === emailVal && password === passwordVal) {
        localStorage.setItem('email', emailVal);
        console.log(localStorage);
        ipcRenderer.send('login-success');
    } else{
        document.getElementById('error').innerHTML="Incorrect username and password";
    }

    // ipcRenderer Event Emitter for main process
    // ipcRenderer.send('add-todo', inputValue);
    // inputValue.value = ''
});