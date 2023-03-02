import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfEnglish from "../../Assets/CV-English-Olivera-Nicolas.pdf";
import pdfSpanish from "../../Assets/CV-Español-Olivera-Nicolas.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =  "https://raw.githubusercontent.com/minikastek/portfolio/master/src/Assets/CV-English-Olivera-Nicolas.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col>
            <Button
              variant="primary"
              href={pdfEnglish}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV in English
            </Button>
          </Col>
          <Col>
            <Button
              variant="primary"
              href={pdfSpanish}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Descargar CV en Español
            </Button>
          </Col>
        </Row>

        <Row className="resume">
          <Document file={pdfEnglish} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col>
            <Button
              variant="primary"
              href={pdfEnglish}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV in English
            </Button>
          </Col>
          <Col>
            <Button
              variant="primary"
              href={pdfSpanish}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Descargar CV en Español
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
