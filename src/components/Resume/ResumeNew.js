import React, { useState, useEffect } from "react";
import "./index.css";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Muzzammil_Nawab.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const LETTER_RATIO = 8.5 / 11;
const PAGE_MARGIN  = 160;

const getPageWidth = () => {
  const vw = window.innerWidth * 0.9;
  const vh = window.innerHeight - PAGE_MARGIN;
  return Math.min(vw, vh * LETTER_RATIO);
};

function ResumeNew() {
  const [pageWidth, setPageWidth] = useState(getPageWidth());

  useEffect(() => {
    const onResize = () => setPageWidth(getPageWidth());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Container fluid className="resume-section fill-vh d-flex flex-column">
      <Particle />

      {/* top button */}
      <Row className="justify-content-center mb-3" style={{ zIndex: 2 }}>
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: 250 }}>
          <AiOutlineDownload /> &nbsp;Download CV
        </Button>
      </Row>

      {/* PDF — row ignores clicks except on the actual document */}
      <Row
        className="flex-grow-1 justify-content-center"
        style={{ pointerEvents: "none" }}          // transparent parts don't eat clicks
      >
        <Document
          file={pdf}
          className="d-flex justify-content-center"
          style={{ pointerEvents: "auto" }}        // <Page> remains interactive
        >
          <Page pageNumber={1} width={pageWidth} />
        </Document>
      </Row>

      {/* bottom button */}
      <Row className="justify-content-center mt-3" style={{ zIndex: 2 }}>
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: 250 }}>
          <AiOutlineDownload /> &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
