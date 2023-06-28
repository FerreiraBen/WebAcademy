const signupForm = document.getElementById('signup-form')

if(signupForm){
    signupForm.onsubmit = () => {
        const senha = document.getElementById('senha').value
        const confirmSenha = document.getElementById('confirm-senha').value
        if(senha !== confirmSenha){
            document.getElementById('confirm-senha-error').innerHTML = "Senhas nao coincidem!"
        }
    }
}