import React, { useState } from "react";
import "./styles.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    course: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <section className="section-contact">
      <div>
        <h1 id="h1-courses">
          Vamos<span id="span-courses">Começar</span>.
        </h1>
      </div>

      <div className="section-registration">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form1">
              <label>
                Nome:
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Email:
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Telefone:
                <input
                  className="input"
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form2">
              <label>
                Observações:
                <textarea
                  className="input"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Curso:
                <select
                  name="course"
                  className="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" className="select">
                    Selecione um curso
                  </option>
                  <option value="Finanças para Todos" className="select">
                    Finanças para Todos
                  </option>
                  <option value="Renda Fixa Descomplicada" className="select">
                    Renda Fixa Descomplicada
                  </option>
                  <option
                    value="Investindo em Fundos Imobiliários"
                    className="select"
                  >
                    Investindo em Fundos Imobiliários
                  </option>
                  <option value="Dominando a B3" className="select">
                    Dominando a B3
                  </option>
                  <option value="Mercado de Ações dos EUA" className="select">
                    Mercado de Ações dos EUA
                  </option>
                  <option
                    value="Gestão de Carteiras Eficiente"
                    className="select"
                  >
                    Gestão de Carteiras Eficiente
                  </option>
                </select>
              </label>
            </div>

            <button type="submit" className="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
