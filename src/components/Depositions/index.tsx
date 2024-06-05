import React, { useEffect, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import "./styles.css";

export function Depositions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const items = [
    {
      id: 1,
      title:
        "Aprendi muito sobre planejamento financeiro e estratégias de investimento. Obrigada por essa oportunidade!",
      description: "Maria Silva",
      icon: <RiDoubleQuotesL className="quote-icon" />,
    },
    {
      id: 2,
      title:
        "Aprendi a criar um orçamento eficiente e a investir de forma inteligente. Segui todas as imersões e pude colocar em prática até mesmo em minha empresa. Os materiais oferecidos são muito bem estruturados e os instrutores estão sempre disponíveis para tirar dúvidas.",
      description: "Pedro Oliveira",
      icon: <RiDoubleQuotesL className="quote-icon" />,
    },
    {
      id: 3,
      title:
        "Os materiais são bem organizados e os exercícios práticos ajudam a fixar o conhecimento. Aprendi sobre diversificação de investimentos!",
      description: "Ana Santos",
      icon: <RiDoubleQuotesL className="quote-icon" />,
    },
    {
      id: 4,
      title:
        "A plataforma oferece cursos abrangentes e relevantes para quem quer dominar o mundo das finanças, além disso, os instrutores são muito experientes e possuem uma metodologia de ensino muito divertida e produtiva. Recomendo.",
      description: "Rafael Costa.",
      icon: <RiDoubleQuotesL className="quote-icon" />,
    },
    {
      id: 5,
      title:
        "A plataforma é intuitiva e os instrutores são especialistas. Recomendo para quem quer melhorar suas finanças.",
      description: "André Aquino",
      icon: <RiDoubleQuotesL className="quote-icon" />,
    },
  ];

  return (
    <section className="section-depositions">
      <div>
        <h1 id="h1-depositions">
          Alguns<span id="span-depositions">Depoimentos</span>.
        </h1>
      </div>
      <div id="div-depositions">
        <div className="description">
          <h2>
            As <span id="feedback">opiniões</span> dos nossos alunos são{" "}
            <span id="feedback">valiosas</span>!
          </h2>
          <p>
            Leia os feedbacks e saiba como nossos cursos de finanças online
            ajudaram muitos a conquistar seus objetivos financeiros.
          </p>
        </div>
        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item) => (
              <div key={item.id} className="carousel-item">
                {item.icon}
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
