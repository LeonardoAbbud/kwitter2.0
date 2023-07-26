// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR07UfEw3X8LvzrvJYXSUiDSj_qsMPf7g",
  authDomain: "kwitter-d68f4.firebaseapp.com",
  databaseURL: "https://kwitter-d68f4-default-rtdb.firebaseio.com",
  projectId: "kwitter-d68f4",
  storageBucket: "kwitter-d68f4.appspot.com",
  messagingSenderId: "687833770259",
  appId: "1:687833770259:web:0dc8a2dc8a07fa175fd2e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Eles podem ser representados como uma variável e um valor pode ser representado como o valor de uma variável.
//O símbolo “/” representa a raiz, ou seja, a pasta principal ou a pasta inicial no banco de dados.
//firebase.database().ref("/").child(user_name).update({purpose : "adding user" :  É o valor da pasta, já que uma pasta vazia não pode ser adicionada.




userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

//Permite que o valor armazenado no "localStorage" seja exibido na página da web para o usuário.

function addRoom() {
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose: "adicionar nome de sala"
  });

  // firebase.database() retorna uma referência para o serviço de banco de dados do Firebase.
  //  .ref("/") retorna uma referência para a raiz do banco de dados.
  // .child(roomName) retorna uma referência para um nó filho com o nome especificado pela variável roomName.
  //.update({ purpose: "adicionar nome de sala" }) atualiza o valor do nó especificado com um novo objeto 
  // JavaScript contendo uma chave "purpose" e o valor "adicionar nome de sala". 

  localStorage.setItem("roomName", roomName);

  window.location = "kwitterPage.html";
}

function getData() {
  firebase.database().ref("/").on('value',function (snapshot) 
  {
    // firebase.database() retorna uma referência para o serviço de banco de dados do Firebase.
    // .ref("/") retorna uma referência para a raiz do banco de dados.
    // .on('value', function(snapshot) se inscreve no evento "value" do nó especificado. 
    //Sempre que os dados mudarem ou quando a função for chamada pela primeira vez, 
    //a função de retorno de chamada será executada com um objeto snapshot que contém uma cópia dos dados 
    //atuais do nó especificado.

      document.getElementById("output").innerHTML = "";

      //document.getElementById("output").innerHTML = ""; limpa o conteúdo do elemento HTML com o ID "output".

      snapshot.forEach(function (childSnapshot) 

      // snapshot.forEach(function (childSnapshot) itera sobre cada filho do nó especificado usando a função forEach().
      {
        childKey = childSnapshot.key;

        // childKey = childSnapshot.key; atribui a chave do filho atual a uma variável childKey.

        roomNames = childKey;

        // roomNames = childKey; atribui o valor da variável childKey a uma variável.

        console.log("Nome da Sala - " + roomNames);

        //essa linha de código se inscreve em um evento no banco de dados do 
        //Firebase Realtime Database para obter os nomes das salas armazenadas e exibi-los no console do navegador. 
        
        row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";

        // Cria uma string HTML com uma classe e um ID dinâmicos, além de um evento de clique.
        // Adiciona a string HTML ao conteúdo existente do elemento HTML com o ID "output".
        // O código anterior está dentro de duas funções aninhadas, 
        // que são chamadas quando um objeto JSON é recebido de um servidor.


        document.getElementById("output").innerHTML += row;
      });
    });

}

getData();

function redirectToRoomName(name) {

  //  Essa função recebe um argumento chamado name e realiza três ações:

  console.log(name);

  // Imprime o valor de name no console do navegador usando console.log().

  localStorage.setItem("roomName", name);

  // Armazena o valor de name no objeto localStorage do navegador.

  window.location = "kwitterPage.html";

  // Redireciona o navegador para uma página chamada "kwitterPage.html".

}

function logout() {

  // Define uma função que faz logout de um usuário.

localStorage.removeItem("userName");
localStorage.removeItem("roomName");

// Remove dois itens do localStorage.

  window.location = "index.html";
}

// Redireciona o navegador para a página "index.html".



                                                            