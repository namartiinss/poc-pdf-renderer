import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
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
  return (
    <div style={{ padding: '1rem', height: '600px', }}>
      <h1>
        Olá, <span>{dadosMock.colaborador}</span> seu relatório está pronto!
      </h1>
      <PDFViewer style={{ width: '100%', height: '100%' }}>
        <MyDocument {...dadosMock} style={{ text: 60, }} />
      </PDFViewer>
    </div>
  );
}

export default DocumentViewer;
