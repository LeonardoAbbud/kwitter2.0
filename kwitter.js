function addUser() {
    // Armazena um valor em uma chave específica no armazenamento local.
userName= document.getElementById("userName").value;
localStorage.setItem("userName", userName);
 //"setItem" é um método do objeto localStorage que permite armazenar um valor em uma chave específica
// A variável UserName receberá o valor armazenado anteriormente sob a chave "userName" no armazenamento local.
window.location = "kwitterRoom.html";
// Redireciona o navegador do usuário para outra página da web.

}