
let valor = 0
let valor2 = 4
let id = 0;
function contador(e) {
    let elemento = e.target.id;
    if (elemento == "contador1") {
        ++valor;
        var resul = document.getElementById("resultado")
        resul.textContent = valor;
    } else if (elemento == "contador2"){
        ++valor2;
        var resul = document.getElementById("resultado2")
        resul.textContent = valor2;
    }
    
}

function zerar(e) {
    valor = 0;
    var resul = document.getElementById("resultado")
    resul.textContent = valor
}



  //Retorna o próximo ID válido para a DIV que será criada
  function getNextId() {
    return ++id;
  }

  //Sua função, chamada no click do botão
  function criar(){
      //Pego o ID
      let id = getNextId();
      const body = document.getElementById('body');
      const text = document.getElementById('titulo').value;

      const elementDiv = document.createElement("div");
      elementDiv.id = id;
      const elemText = document.createTextNode(text)
      const elemH1 = document.createElement("h1");
      const elementButton = document.createElement("button");
      const labelButton = document.createTextNode("Zerar");
      const labelContador = document.createElement("label");
      const textContador = document.createTextNode("Contador: ")
     labelContador.appendChild(textContador)
      elementButton.appendChild(labelButton)
      elemH1.appendChild(elemText)
      elementDiv.appendChild(elemH1);
      elementDiv.appendChild(labelContador)
      elementDiv.appendChild(elementButton)
      elementDiv.style.backgroundColor = "#f0" + id.toString();
    //    body.appendChild(elemText);
       body.appendChild(elementDiv);
      console.log(elemText);
      console.log(elementDiv);
  }













//   //Crio a DIV
//   let divElement = document.createElement("div");
//   //Pego a DIV onde a nova DIV será criada, sempre na DIV mãe
//   let divContador = document.getElementById("contador");

//   //A ideia do ID é que ele seja um elemento único, ou seja, não se repita
//   divElement.setAttribute('id', 'box' + id.toString());

//   //CSS
//   divElement.style.width = "100%";
//   divElement.style.height = "50px";

//   //Essa parte é mais para deixar claro que outras divs estão sendo criadas, criando um degrade
//   divElement.style.backgroundColor = "#f0" + id.toString();

//   //Adiciono a nova DIV na DIV mãe
//   //Aqui poderia ser por exemplo document.body.appendChild, adicionando assim o elemento criado diretamente no body
//   divContador.appendChild(divElement);