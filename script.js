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