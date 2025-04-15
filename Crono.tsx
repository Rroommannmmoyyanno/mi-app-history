import React from "react";
import { Chrono } from "react-chrono";
import "./Crono.css";
const data = [
  {
    title: "1817",
    cardTitle: "Cruce de los Andes",
    cardSubtitle: "San Martín cruza la cordillera",
    cardDetailedText: "Una de las mayores hazañas militares.",
    children: (
      <div style={{ marginTop: "1rem" }}>
        <button
          className="timeline-button"
          onClick={() => alert("¡Más info sobre el cruce!")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Saber más
        </button>
      </div>
    ),
  },
  {
    title: "1812",
    cardTitle: "Revolución de Mayo",
    cardSubtitle: "San Martín se une a la lucha por la independencia.",
    cardDetailedText:
      "Se alistó en el ejército y comenzó su carrera militar en la lucha por la independencia del continente.",
  },
  {
    title: "1816",
    cardTitle: "Declaración de la Independencia",
    cardSubtitle: "San Martín lucha por la independencia de Argentina.",
    cardDetailedText:
      "En 1816, tras intensos combates, San Martín fue clave en la lucha por la independencia de Argentina, y se convocó el Congreso de Tucumán.",
  },
  {
    title: "1817",
    cardTitle: "Cruce de los Andes",
    cardSubtitle: "San Martín cruza la Cordillera de los Andes.",
    cardDetailedText:
      "En enero de 1817, San Martín y su ejército cruzaron los Andes para liberar Chile del dominio español, lo que resultó ser una de las mayores hazañas militares.",
  },
  {
    title: "1818",
    cardTitle: "Batalla de Maipú",
    cardSubtitle: "San Martín vence a los realistas en Chile.",
    cardDetailedText:
      "El 5 de abril de 1818, San Martín y sus tropas vencieron a las fuerzas realistas en la Batalla de Maipú, consolidando la independencia de Chile.",
  },
  {
    title: "1821",
    cardTitle: "Independencia de Perú",
    cardSubtitle: "San Martín declara la independencia de Perú.",
    cardDetailedText:
      "El 28 de julio de 1821, San Martín proclamó la independencia de Perú en Lima.",
  },
  {
    title: "1824",
    cardTitle: "Encuentro con Bolívar",
    cardSubtitle: "San Martín se encuentra con Simón Bolívar.",
    cardDetailedText:
      "En 1824, San Martín se retiró de la vida política y se encontró con Simón Bolívar en Guayaquil, después de lo cual se retiró definitivamente de la lucha.",
  },
  {
    title: "1850",
    cardTitle: "Muerte de San Martín",
    cardSubtitle: "José de San Martín fallece en Francia.",
    cardDetailedText:
      "José de San Martín murió el 17 de agosto de 1850 en la ciudad de Boulogne-sur-Mer, Francia, tras una vida dedicada a la lucha por la independencia de América.",
  },
];

export default function MiLineaDeTiempo() {
  return (
    <div>
      {/* Header con barra de navegación */}
      <header className="header">
        <div className="logo">
          <h1>José de San Martín</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#timeline">Línea de Tiempo</a>
            </li>
            <li>
              <a href="#about">Acerca de</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Línea de tiempo */}
      <div className="timeline-container" id="timeline">
        <Chrono items={data} mode="VERTICAL" />
      </div>
    </div>
  );
}
