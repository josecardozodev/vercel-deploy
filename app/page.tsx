
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  // Data predefinida: 31 de dezembro de 2026, às 23h59
  const dataAlvo = new Date("2026-12-10T23:59:00-03:00").getTime();

  const [tempoRestante, setTempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  const [finalizado, setFinalizado] = useState(false);

  useEffect(() => {
    function atualizarContador() {
      const agora = Date.now();
      const diferenca = dataAlvo - agora;

      if (diferenca <= 0) {
        setTempoRestante({
          dias: 0,
          horas: 0,
          minutos: 0,
          segundos: 0,
        });

        setFinalizado(true);
        return;
      }

      setTempoRestante({
        dias: Math.floor(diferenca / (1000 * 60 * 60 * 24)),
        horas: Math.floor(
          (diferenca / (1000 * 60 * 60)) % 24
        ),
        minutos: Math.floor(
          (diferenca / (1000 * 60)) % 60
        ),
        segundos: Math.floor(
          (diferenca / 1000) % 60
        ),
      });

      setFinalizado(false);
    }

    atualizarContador();

    const intervalo = setInterval(atualizarContador, 1000);

    return () => clearInterval(intervalo);
  }, [dataAlvo]);

  return (
    <main>
      <h1>Contagem Regressiva</h1>

      <p>Tempo restante até o fim do semestre:</p>

      {finalizado ? (
        <h2>O evento chegou!</h2>
      ) : (
        <section className="contador">
          <div>
            <strong>{tempoRestante.dias}</strong>
            <span>Dias</span>
          </div>

          <div>
            <strong>{tempoRestante.horas}</strong>
            <span>Horas</span>
          </div>

          <div>
            <strong>{tempoRestante.minutos}</strong>
            <span>Minutos</span>
          </div>

          <div>
            <strong>{tempoRestante.segundos}</strong>
            <span>Segundos</span>
          </div>
        </section>
      )}


<section className="lista-informacoes">
  
<article className="item-divider"></article>

  <h1>Trabalhos Anteriores</h1>
  <article className="item-horizontal">
    <div className="item-imagem">
      <img src="/karakura.png" alt="Imagem do primeiro item" />
    </div>

    <strong className="item-numero">01.</strong>

    <div className="item-texto">
      <h2>Karakura Store</h2>
      <p>
        Um dos meus primeiros projetos no curso. 
        Foi feito na disciplina de LAEC, na qual nos foi pedido um site 
        focando no Frontend e em sites de E-commerce, 
        onde eu adicionei o tema do anime Bleach.
      </p>
    </div>
  </article>

  <article className="item-horizontal">
    <div className="item-imagem">
      <img src="/runtracker.png" alt="Imagem do segundo item" />
    </div>

    <strong className="item-numero">02.</strong>

    <div className="item-texto">
      <h2>Run Tracker</h2>
      <p>
        Na disciplina de Introdução à IA, 
        foi feita uma aplicação centrada em ter várias 
        calculadoras relacionadas a corridas e maratonas, 
        fazendo cálculos pluviométricos e de velocidade. 
      </p>
    </div>
  </article>

  <article className="item-horizontal">
    <div className="item-imagem">
      <img src="/agrocalc.png" alt="Imagem do terceiro item" />
    </div>

    <strong className="item-numero">03.</strong>

    <div className="item-texto">
      <h2>Agro Calc</h2>
      <p>
        Na disciplina de Complementação, 
        fomos desafiados a fazer a aplicação AgroCalc.
        Unindo Frontend e Python, foram feitas páginas 
        com funcionalidades que auxiliariam agrônomos.
      </p>
    </div>
  </article>

  <article className="item-horizontal">
    <div className="item-imagem">
      <img src="/gcsi.png" alt="Imagem do quarto item" />
    </div>

    <strong className="item-numero">04.</strong>

    <div className="item-texto">
      <h2>Alteração de Imagem - GCSI</h2>
      <p>
        Um dos únicos trabalhos que contém Frontend nesse semestre, foi feito na disciplina de GCSI.
        É uma aplicação que altera uma imagem ao acionar o botão.
      </p>
    </div>
  </article>
</section>


    </main>
  );
}
