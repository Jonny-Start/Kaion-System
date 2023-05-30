import React from "react";
import "./Help.css";
import { BasicLayout } from "../../components/BasicLayout";

function Help() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <BasicLayout idContent="Help" backgroundImage={true}>
      <div className="accordion">
        <div
          className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}
          key={1}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(1)}>
            <h3>Título del elemento 1</h3>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>Contenido del elemento 1</p>
          </div>
        </div>

        <div
          className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}
          key={2}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(2)}>
            <h3>Título del elemento 2</h3>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>Contenido del elemento 2</p>
          </div>
        </div>

        <div
          className={`accordion-item ${activeIndex === 3 ? "active" : ""}`}
          key={3}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(3)}>
            <h3>Título del elemento 3</h3>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>Contenido del elemento 3</p>
          </div>
        </div>

        <div
          className={`accordion-item ${activeIndex === 4 ? "active" : ""}`}
          key={4}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(4)}>
            <h3>Título del elemento 4</h3>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>Contenido del elemento 4</p>
          </div>
        </div>

        <div
          className={`accordion-item ${activeIndex === 5 ? "active" : ""}`}
          key={5}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(5)}>
            <h3>Título del elemento 5</h3>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>Contenido del elemento 5</p>
          </div>
        </div>

        <div
          className={`accordion-item ${activeIndex === 6 ? "active" : ""}`}
          key={6}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(6)}>
            <h3>Título del elemento 6</h3>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>Contenido del elemento 6</p>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}

export { Help };
