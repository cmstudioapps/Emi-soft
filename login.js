var nome = localStorage.getItem("nome") 
var email = localStorage.getItem("email")

if (!nome) {
  
  var login = document.getElementById('caixaForm')
  login.showModal()
  
  
  
}

function entrar() {
  var name = document.getElementById("nome").value
  
  nome = name 
  localStorage.setItem("nome",nome)
  
  var emaill = document.getElementById("e-mail").value
  
  email = emaill
  localStorage.setItem("email",email)
  
  var bt = document.getElementById("bt")
  
  bt.innerHTML = "Aguarde..."
  
  bt.style.padding = "20px"
  bt.style.backgroundColor = "greenyellow"
  bt.style.color = "black"
  bt.style.fontWeight = "bold"
  bt.style.border = "none"
  bt.style.borderRadius = "20px"
}