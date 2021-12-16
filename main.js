//gerando senhas aleatórias

var password = ''
var password_abc = "abcdefhiquwyryrotpqlamsmcncvwiqlejtpqi"

for(let i = 1;i <= 8;i++) {
  var string_password = password_abc.charAt(Math.floor(Math.random() * password_abc.length))
  password += string_password
}

//gerando nomes aleatórios

var name = ''
var name_abc = ["João","Vitor","Henrique","Gabriel","Marcelo","Marco","Bernardo","Otoniel","Kaique"]

var name_pick = Math.floor(Math.random() * name_abc.length)
name = name_abc[name_pick]

//obtendo as informações dos inputs

var info = document.getElementsByClassName("info")

var user_name = info[0]
var user_password = info[1]

//vendo se e válido

var check = () => {
 
  if(user_name.value != name) {
    console.log("nome inválido")
  } else {
    if(user_password.value != password) {
      console.log("senha inválida") 
    } else {
      login(user_name.value,user_password.value)
    }
  }
}

//logando

var login = (nome,senha) => {
  var menu = document.querySelector("div.menu")
  menu.style.display = "none"
  alert("Acesso autorizado")
  
}

console.log(name)
console.log(password)