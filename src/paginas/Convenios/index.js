import React from 'react';

import EstruturaPagina from '../../componentes/EstruturaPagina';


import './estilo.css';

const Convenios = () => {
    return (
        <EstruturaPagina>
            <div className="contato-container">
                <div className="lista-convenios">

                    <div className="card-convenio">
                        <img className="img-convenio" src="assets/plano1.png" alt="mulher sorrindo" title="Sorriso" />
                        <h3 className="titulo-card-convenio"> Hapvida + Odonto </h3>
                        <p className="texto-card">A operadora cearense, líder em planos de saúde no Norte e Nordeste do Brasil, também mostra sua força no plano odonto, produto em que possui 1,88 milhão de beneficiários, é a 4ª colocada no ranking.!</p>
                        <p>Empresa de capital aberto em 2018, opera na bolsa de valores B3 de São Paulo sob o código HAPV3.</p>
                    </div>
                    <div className="card-convenio">
                        <img className="img-convenio" src="assets/plano2.png" alt="mulher sorrindo" title="Sorriso" />
                        <h3 className="titulo-card-convenio">SulAmérica Odonto</h3>
                        <p className="texto-card">A tradicional companhia de seguros brasileira ocupa a 5ª posição, com 1,63 milhão de beneficiários de planos odontológicos. Este grupo segurador atua em diversos segmentos, inclusive planos médicos, onde é a 5ª maior operadora do país.</p>
                        <p>Empresa de capital aberto, opera na bolsa de valores B3 de São Paulo sob os códigos SULA11 e SULA4.</p>
                        <p>Sua rede credenciada é nacional, sendo que dois terços dos beneficiários estão nos estados de São Paulo e Rio de Janeiro.</p>
                    </div>
                    <div className="card-convenio">
                        <img className="img-convenio" src="assets/plano3.jpg" alt="mulher sorrindo" title="Sorriso" />
                        <h3 className="titulo-card-convenio">MetLife Dental</h3>
                        <p className="texto-card">A seguradora MetLife está em 6º lugar no ranking, com 976 mil pessoas com plano odontológico. Esta tradicional companhia americana tem atuação em mais de 40 países, e no Brasil atua também com seguros de vida e previdência.</p>
                        <p>Oferece atendimento em todo Brasil, com presença mais marcante no sudeste, região que concentra 76% dos beneficiários. Com uma linha odontológica diversificada, atende clientes de diferentes perfis.</p>
                    </div>
                    <div className="card-convenio">
                        <img className="img-convenio" src="assets/plano4.jpg" alt="mulher sorrindo" title="Sorriso" />
                        <h3 className="titulo-card-convenio">São Francisco Odonto</h3>
                        <p className="texto-card">A 7ª colocada, com 644 mil beneficiários, é a São Francisco Odontologia, empresa do Grupo São Francisco, com sede no interior de São Paulo.!</p>
                        <p>Oferece ampla cobertura, com destaque para os estados de SP, MG, MT, MS e GO.</p>
                    </div>
                </div>

            </div>


        </EstruturaPagina>
    );
}


export default Convenios;