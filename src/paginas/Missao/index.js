import React from 'react';

import EstruturaPagina from '../../componentes/EstruturaPagina';


import './estilo.css';

const Missao = () => {
    return (
        <EstruturaPagina>

            <div className="contato-container">
                <h2 className="titulo-sessao">Nossa <b>Missão</b></h2>
                <div className="texto-container">
                    <p className="texto">Para distribuir mais sorrisos e conquistar mais pessoas á Dentes Saudaveis, se propoem a arrumar seu maior bem "Teu sorriso"<br/> Para que mais sorrisos sejam dados em mais pessoas se sintam felizes sorria sem medo com <b>Dentes Saudáveis</b></p>
                    </div>
                    <div className="nossa-missao">
                        
                        <div className="card">
                            <h3 className="titulo-card">Distribua Sorrisos</h3>
                            
                            <img className="img-aparelho" src="assets/missao.jpg" alt="mulher sorrindo" title="Sorriso" />
                        </div>
                        <div className="card">
                            <h3 className="titulo-card">Mais Pessoas sorrindo</h3>
                            
                            <img className="img-aparelho" src="assets/missao2.jpg" alt="mulher sorrindo" title="Sorriso" />
                        </div>
                        <div className="card">
                            <h3 className="titulo-card">Dentes Saudaveis</h3>
                            
                            <img className="img-aparelho" src="assets/missao3.jpg" alt="mulher sorrindo" title="Sorriso" />
                        </div>
                        <div className="card">
                            <h3 className="titulo-card">Cuidados</h3>
                           
                            <img className="img-aparelho" src="assets/missao4.jpg" alt="mulher sorrindo" title="Sorriso" />
                        </div>
                    </div>

                </div>
            
        </EstruturaPagina>
    );
}


export default Missao;