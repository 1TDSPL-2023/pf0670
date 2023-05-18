//CONSTRUIR UMA LISTA DE OBJETOS
// let listaDeUsuarios = [
//     {
//         nomeCompleto : "Edulado Capacho",
//         emailUsuario : "dudu@email.com",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "José das Couves",
//         emailUsuario : "jose@email.com",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Paulo Cabuloso",
//         emailUsuario : "paulo@email.com",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Leonaldo Tufo",
//         emailUsuario : "lele@email.com",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Mathias Aires",
//         emailUsuario : "momo@email.com",
//         senhaUsuario : "123456"
//     }
// ];

//ADICIONANDO A LISTA DE USUÁRIOS NO LOCAL-STORAGE
// localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

//RECUPERANDO OS ELEMENTOS INPUTS DO FORM
const inputEmail = document.querySelector("#idEmail");
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

        //Redirect
        window.location.href = "../index.html";
        
    }else{
        msgStatus.setAttribute("style","color:red");
        msgStatus.innerHTML = "<span><strong>Nome de usuário ou senha inválidos...</strong></span>";
    }

}

});