import React from "react";
import "./styles.css";

export function Home2() {
  return (
    <section className="section-home">
      <div>
        <img src="/img-home5.png" alt="" />
      </div>
      <div className="div-home">
        <h1 className="h1-home">
          Qual será o próximo passo para construir um futuro de{" "}
          <span className="span-header">liberdade financeira?</span>
        </h1>
        <p className="p-home">
          Te ajudaremos a reinventar seu futuro.{" "}
          <b>
            <span className="span-header">Comece hoje!</span>
          </b>
        </p>
      </div>
    </section>
  );
}
