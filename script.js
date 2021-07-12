function adicionaNaLista () {
  const botao = document.querySelector('#criar-tarefa');

  botao.addEventListener('click', function () {
    const entradaTexto = document.getElementById('texto-tarefa');
    const elementoPai = document.getElementById('lista-tarefas');
    const lista = document.createElement('li');
    elementoPai.appendChild(lista);
    lista.innerText = entradaTexto.value;
    entradaTexto.value = '';
  });
}
adicionaNaLista();

function adicionaRetiraBackground () {
  const list = document.getElementById('lista-tarefas');
  list.addEventListener('click', function (event) {
    let listaEl = document.getElementsByTagName('li');
    for (let index = 0; index < listaEl.length; index += 1) {
      listaEl[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
adicionaRetiraBackground ();
