import React, { useState } from "react";
import "./styles.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="container-header">
      <p className="logo">LOGO</p>

      <button className="menu-button" onClick={toggleMenu}>
        {menuOpen ? "Close" : "Menu"}
      </button>

      <nav className={`nav-header ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a>
              <span>Sobre</span>
            </a>
          </li>
          <li>
            <a>
              <span>Cursos</span>
            </a>
          </li>
          <li>
            <a>
              <span>Depoimentos</span>
            </a>
          </li>
          <li>
            <a>
              <span>Contato</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
