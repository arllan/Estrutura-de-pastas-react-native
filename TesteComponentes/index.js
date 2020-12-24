import React from 'react';
import Exemplo01 from './pages/comunicacao-direta-exemplo01';
import { Filho, RecebeFilhos } from './pages/comunicacao-direta-exemplo02';
import {Pai} from './pages/comunicacao-indireta-exemplo01';
import RenderizacaoCondicional from './pages/renderizacao-condicional-style';

export default function TesteComponentes() {
 return (
    <>
        <RenderizacaoCondicional/>
        <RenderizacaoCondicional/>
    </>
  );
}

/* EXEMPLO 01

    Exemplo simples de comunicação direta. Passagem de parametro
    <Exemplo01 cor='blue' largura={100} comprimento={100}/>

    Exemplo pratico
    <>
        <Exemplo01 cor='blue' largura={100} comprimento={100}/>
        <Exemplo01 cor='orange' largura={120} comprimento={120}/>
        <Exemplo01 cor='red' largura={150} comprimento={150}/>
        <Exemplo01 cor='green' largura={170} comprimento={170}/>
    </>
*/

/* EXEMPLO 02
    Exemplo mostra a como criar um componente que recebe outros componentes dentro dele
    <>
        <RecebeFilhos nome='Pai1' sobrenome='Pai2'>
            <Filho  nome='arllan' sobrenome='pablo'/>
        </RecebeFilhos>
    </>
*/

/* EXEMPLO 03
    // mostra como faz a comunicação indireta
    <Pai/>
*/

/* EXEMPLO 04 
    //Exemplo mostrando na prática como fazer a renderização condicional
    <>
        <RenderizacaoCondicional/>
        <RenderizacaoCondicional/>
    </>
*/
