let progresso = 20;

function aumentarBarra() {
  if (progresso < 100) {
    progresso += 20;
    const barra   = document.getElementById('barra-progresso');
    const btnNext = document.getElementById('botao');
    const btnBack = document.getElementById('botao-voltar');

    barra.style.width = progresso + '%';
    barra.setAttribute('aria-valuenow', progresso);

    mostrarTela(progresso); 
 
    if (progresso === 100) {
      btnNext.style.backgroundColor = '#433588';
      btnNext.style.borderColor     = '#44DE61';
      btnNext.textContent           = 'Minhas assinaturas';

      btnBack.textContent           = 'Página Inicial';
      btnBack.style.backgroundColor = 'transparent';
      btnBack.style.color           = '#433588';

      btnBack.removeEventListener('click', diminuirBarra);
      btnBack.addEventListener('click', paginaInicial);
    }
  }
}

function diminuirBarra() {
  if (progresso > 20) {
    progresso -= 20;
    const barra   = document.getElementById('barra-progresso');
    const btnNext = document.getElementById('botao');

    barra.style.width = progresso + '%';
    barra.setAttribute('aria-valuenow', progresso);

    mostrarTela(progresso); 

    if (progresso < 100) {
      btnNext.style.backgroundColor = '';
      btnNext.style.borderColor     = '';
      btnNext.textContent           = 'Próximo passo';

      document.getElementById('botao-voltar').textContent = 'Voltar';
    }
  }
}

function mostrarTela(valor) {
  const telas = document.querySelectorAll('.tela');
  telas.forEach(t => t.classList.remove('ativa'));

  const numeroTela = valor / 20; 
  const telaAtual = document.getElementById(`tela-${numeroTela}`);
  
  if (telaAtual) {
    telaAtual.classList.add('ativa');
  }
}

function paginaInicial() {
  window.location.href = 'index.html';
}


document.getElementById('botao-voltar').addEventListener('click', diminuirBarra);
mostrarTela(progresso); 
