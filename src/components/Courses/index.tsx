import React from "react";
import "./styles.css";

export function Courses() {
  return (
    <section className="section-courses">
      <div>
        <h1 id="h1-courses">
          Nossos<span id="span-courses">Cursos</span>.
        </h1>
      </div>
      <div id="div-courses">
        <div className="div1-courses">
          <h2>
            Transforme suas <span id="span-courses">finanças</span> e
            potencialize seus <span id="span-courses">investimentos</span>.
          </h2>
          <br />
          <p>
            Explore nossas imersões do Mercado Financeiro e consiga
            rentabilidades que vão além das expectativas, garantindo um futuro
            financeiro próspero!
          </p>
        </div>
        <div className="div2-courses">
          <div className="courses-flex">
            <div className="edit-courses">
              <p>
                <span id="span-courses">
                  <b>Finanças para Todos:</b>
                </span>
                <br /> Ponto de partida para sua jornada no mundo dos
                investimentos.
              </p>
              <p>240h</p>
            </div>
            <div className="edit-courses">
              <p>
                <span id="span-courses">
                  <b>Renda Fixa Descomplicada:</b>
                </span>
                <br /> Dominando CDB, LCI, LCA e Marcação a Mercado.
              </p>
              <p>320h</p>
            </div>
            <div className="edit-courses">
              <p>
                <span id="span-courses">
                  <b>Investindo em Fundos Imobiliários:</b>
                </span>
                <br /> Estratégias para ganhos a longo prazo.
              </p>
              <p>320h</p>
            </div>
          </div>
          <div className="courses-flex">
            <div className="edit-courses">
              <p>
                <span id="span-courses">
                  <b>Dominando a B3:</b>
                </span>
                <br /> Obtenha confiança enquanto multiplica seu patrimônio em
                ações brasileiras.
              </p>
              <p>250h</p>
            </div>
            <div className="edit-courses">
              <p>
                <span id="span-courses">
                  <b>Mercado de Ações dos EUA:</b>
                </span>
                <br /> Invista na economia mais sólida do mundo.
              </p>
              <p>320h</p>
            </div>
            <div className="edit-courses">
              <p>
                <span id="span-courses">
                  <b>Gestão de Carteiras Eficiente:</b>
                </span>
                <br /> Obtenha fluxos de controle para a sua carteira de
                investimentos.
              </p>
              <p>320h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
