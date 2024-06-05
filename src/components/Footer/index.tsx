import React from "react";
import "./styles.css";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="single_footer">
              <h4>Para começar</h4>
              <ul className="ul-init">
                <li>
                  <a href="#" className="a-init">
                    Dicas de Estudo
                  </a>
                </li>
                <li>
                  <a href="#" className="a-init">
                    Ensino Digital
                  </a>
                </li>
                <li>
                  <a href="#" className="a-init">
                    Mercado de trabalho
                  </a>
                </li>
                <li>
                  <a href="#" className="a-init">
                    Suporte técnico
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="single_footer single_footer_address">
              <h4>Estude conosco</h4>
              <ul>
                <li>
                  <a href="#" className="a-init">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="a-init">
                    Porque Nossos Cursos?
                  </a>
                </li>
                <li>
                  <a href="#" className="a-init">
                    Imersões
                  </a>
                </li>
                <li>
                  <a href="#" className="a-init">
                    Contate-nos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="single_footer single_footer_address">
              <h4>Nossas redes sociais</h4>
            </div>
            <div className="social">
              <ul>
                <li>
                  <a href="#">
                    <i>
                      <FaWhatsapp />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <FaInstagram />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <FaFacebook />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i></i>
                    <MdEmail />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="full-width">
            <p className="finish">
              &copy; {new Date().getFullYear()} - Todos os direitos reservados{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
