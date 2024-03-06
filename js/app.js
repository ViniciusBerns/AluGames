function alterarStatus(num) {
    let gameClicado = document.getElementById('game-'+num);
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let imagem = gameClicado.querySelector('.dashboard__item__img');

    let jogosAlugados = 0;

    if (!(botao.classList.contains('dashboard__item__button--return'))) {
            botao.classList.add('dashboard__item__button--return');
            botao.innerHTML = 'Devolver';
            imagem.classList.add('dashboard__item__img--rented');
        } else {
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'Alugar';
            imagem.classList.remove('dashboard__item__img--rented');
            alert('Devolução concluída');
        }

        for (let i = 1; i < 4; i++) {
            if (document.getElementById("game-"+i).querySelector('.dashboard__item__button').classList.contains('dashboard__item__button--return')){
                jogosAlugados = jogosAlugados + 1;
            }
        }

        console.log(`Quantidade de jogos alugados: ${jogosAlugados}`);
}
