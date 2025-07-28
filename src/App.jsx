import React, { useEffect, useState } from "react";
import MyDocument from "./components/documentPDF/myDocument";

const dadosMock = {
  colaborador: "Nathalia Martins",
  data: "24/07/2025",
  atividades: [
    { hora: "09:00", descricao: "Revisão de layout", status: "concluída" },
    { hora: "11:30", descricao: "Daily com o time", status: "concluída" },
    { hora: "15:00", descricao: "Bugfix API login", status: "pendente" },
  ],
};

function DocumentViewer() {
  const [PDFViewer, setPDFViewer] = useState(null);

  useEffect(() => {
    // Importa dinamicamente apenas no browser
    import("@react-pdf/renderer").then((module) => {
      setPDFViewer(() => module.PDFViewer);
    });
  }, []);

  return (
    <div style={{ padding: "1rem", height: "600px" }}>
      <h1>
        Olá, <span>{dadosMock.colaborador}</span> seu relatório está pronto!
      </h1>

      {PDFViewer && (
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <MyDocument {...dadosMock} />
        </PDFViewer>
      )}
    </div>
  );
}

export default DocumentViewer;
