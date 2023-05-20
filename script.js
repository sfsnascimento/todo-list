function adicionaNaLista() {
  const botao = document.querySelector('#criar-tarefa');

  botao.addEventListener('click', function() {
    const entradaTexto = document.getElementById('texto-tarefa');
    const elementoPai = document.getElementById('lista-tarefas');
    const lista = document.createElement('li');
    elementoPai.appendChild(lista);
    lista.innerText = entradaTexto.value;
    entradaTexto.value = '';
  });
}
adicionaNaLista();

function adicionaRetiraBackground() {
  const list = document.getElementById('lista-tarefas');
  list.addEventListener('click', function (event) {
    const listaEl = document.getElementsByTagName('li');
    for (let index = 0; index < listaEl.length; index += 1) {
      listaEl[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
adicionaRetiraBackground();

function riscaItem() {
  const risca = document.getElementById('lista-tarefas');
  risca.addEventListener('dblclick', function(event) {
    event.target.classList.toggle('completed');
  });
}
riscaItem();

function apagaTodosItems() {
  const apagaEl = document.getElementById('apaga-tudo');
  apagaEl.addEventListener('click', function() {
    //source:https://www.javascripttutorial.net/javascript-dom/javascript-removechild/
    const elementoPai = document.getElementById('lista-tarefas');
    while (elementoPai.firstChild) {
      elementoPai.removeChild(elementoPai.firstChild);
    } 
  });
}
apagaTodosItems();

function removeTarefasFinalizadas() {
  const removeFinalizadas = document.getElementById('remover-finalizados');
  removeFinalizadas.addEventListener('click', function() {
    const finalizadas = document.getElementsByClassName('completed');
    while (finalizadas[0]) {
      finalizadas[0].remove();
    } 
  });
}
removeTarefasFinalizadas();

function salvaLista() {
  const botaoSalva = document.getElementById('salvar-tarefas');
  botaoSalva.addEventListener('click', function() {
    const salva = document.getElementsByTagName('li');
    const objetoJson = {};
    for (let index = 0; index < salva.length; index += 1) {
      objetoJson.lista = salva[index];
      
    }
    console.log(objetoJson);
  });
}
salvaLista();

function removeSelecionado() {
  const selecionado = document.getElementById('remover-selecionado');
  selecionado.addEventListener('click', function() {
    const selecionadoEl = document.getElementsByClassName('selected');
    while (selecionadoEl[0]) {
      selecionadoEl[0].remove();
    } 
  });
}
removeSelecionado();
