//CONSTRUIR UMA LISTA DE OBJETOS
let listaDeUsuarios = [
    {
        nomeCompleto : "Edulado Capacho",
        emailUsuario : "101010",
        senhaUsuario : "123456",
        avatar : "url"
    },
    {
        nomeCompleto : "José das Couves",
        emailUsuario : "101010",
        senhaUsuario : "123456",
        avatar : "url"
    },
    {
        nomeCompleto : "Paulo Cabuloso",
        emailUsuario : "101010",
        senhaUsuario : "123456",
        avatar : "url"
    },
    {
        nomeCompleto : "Leonaldo Tufo",
        emailUsuario : "101010",
        senhaUsuario : "123456",
        avatar : "url"
    },
    {
        nomeCompleto : "Bianca Ritz",
        emailUsuario : "101010",
        senhaUsuario : "123456",
        avatar : "url"
    }
];

//ADICIONANDO A LISTA DE USUÁRIOS NO LOCAL-STORAGE
localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

//RECUPERANDO OS ELEMENTOS INPUTS DO FORM
//Fiz uma alteração no HTML para RM apenas. Mas aqui deixei como email.
const inputEmail = document.querySelector("#idRm");
const inputSenha = document.querySelector("#idPass");
const msgStatus = document.querySelector("#msg");

//CAPTURA DE TODOS OS ELEMENTOS
addEventListener("click",(evt)=>{

    //CRIANDO UM OBJETO PARA ARMAZENAR OS DADOS DO FORM!
    let usuarioLogado = {
        emailUsuarioLogado : inputEmail.value,
        senhaUsuarioLogado : inputSenha.value
    }

    let usuarioValidado = {};

    //Recuperando um elemento do DOM
    if(evt.target.id == "btnSubmit"){
              
    //   listaDeUsuarios.forEach( (usuario)=>{

    //       if (usuarioLogado.emailUsuarioLogado == usuario.emailUsuario && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario) {
    //           console.log("VALIDADO!");
    //       }

    //   });

    //RECUPERANDO DO LOCAL-STORAGE A LISTA DE USUÁRIOS
    let listaDosUsuarios = JSON.parse(localStorage.getItem("listaUser"));
    
    for (let x = 0; x < listaDosUsuarios.length; x++) {
          if (usuarioLogado.emailUsuarioLogado == listaDosUsuarios[x].emailUsuario && usuarioLogado.senhaUsuarioLogado == listaDosUsuarios[x].senhaUsuario) {
              //Passando para o Obj usuarioValidado o obj que foi validado.
              usuarioValidado = listaDosUsuarios[x];
              break;
          }
    }


    if(usuarioLogado.emailUsuarioLogado == usuarioValidado.emailUsuario && usuarioLogado.senhaUsuarioLogado == usuarioValidado.senhaUsuario){
        msgStatus.setAttribute("style","color:green");
        msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} logou com sucesso!!</strong></span>`;

        //Adicionando o USUARIO-VALIDADO no localStorage
        localStorage.setItem("user-validado", JSON.stringify(usuarioValidado));

        //Criando um token com Math.
        const token = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2);
        //Adicionando o token no localStorage
        localStorage.setItem("user-token", token);

        //Redirect
        setTimeout(()=>{
            window.location.href = "../index.html";
        },3000);
        
    }else{
        msgStatus.setAttribute("style","color:red");
        msgStatus.innerHTML = "<span><strong>Nome de usuário ou senha inválidos...</strong></span>";
    }

}

});