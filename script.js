function adicionaNaLista () {
  let botao = document.querySelector('#criar-tarefa');

  botao.addEventListener('click', function () {
    let entradaTexto = document.getElementById('texto-tarefa');
    let elementoPai = document.getElementById('lista-tarefas');
    let lista = document.createElement('li');
    elementoPai.appendChild(lista);
    lista.innerText = entradaTexto.value;
    entradaTexto.value = '';
  });
}
adicionaNaLista();

function mudaCor () {
  let listaOrdenada = document.getElementById('lista-tarefas');
  listaOrdenada.addEventListener('click', function(event) {
   event.target.classList.add('selected');
  });
    
}
mudaCor();
