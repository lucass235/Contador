let valor = 0;
let id = 0;

function contador(e) {
  e.innerHTML = ++valor;
}

function zerar(e) {
  valor = 0;
  e.innerHTML = --valor;
}

//Retorna o próximo ID válido para ao paragrafo que será criada
function getNextId() {
  return ++id;
}

//Sua função, chamada no click do botão
function criar() {
  //Pego o ID
  let id = getNextId();

  const title = document.getElementById("titulo").value; //Pego o valor do input do titulo para cada div
  const div = document.createElement("div"); //Cria uma div
  const button = document.createElement("button"); //Cria um botão
  const p = document.createElement("p"); // Cria um parágrafo
  const p2 = document.createElement("p"); //Cria um parágrafo

  p2.id = ++id; //Defino o ID para cada novo parágrafo

  p.innerHTML = title; //Defino o texto do parágrafo
  button.innerHTML = "Zerar"; //Defino o texto do botão
  p2.innerHTML = valor; //Defino o texto do parágrafo

  div.onclick = function () {
    contador(p2);
  }; //Defino o evento de click para cada div
  button.onclick = function () {
    zerar(p2);
  }; //Defino o evento de click para cada botão

  div.appendChild(p); //Adiciona o parágrafo a div
  div.appendChild(p2); //Adiciona o parágrafo a div
  div.appendChild(button); //Adiciona o botão a div

  div.style.backgroundColor = "#f0" + id.toString();

  document.querySelector(".space").appendChild(div); //Adiciona a div criada ao documento
  console.log(div);
}
