import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "grid",
    backgroundColor: "#0C0C45",
    padding: 30,
    width: 100,
  },
  section: {
    marginTop: 12,
    marginBottom: 12,
    padding: 12,
    backgroundColor: "#0C2059",
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "thin",
    marginBottom: 10,
    color: "#FDFEFF",
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "thin",
    color: "#FDFEFF",
    marginBottom: 12,
    marginTop: 12,
  },
});

// Create Document Component
const MyDocument = ({ colaborador, data, atividades }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Relatório de Atividades</Text>
      <Text style={styles.paragraph}>Colaborador: {colaborador}</Text>
      <Text style={styles.paragraph}>Data: {data}</Text>
      {atividades.map((atividade, index) => (
        <View key={index} style={styles.section}>
          <View style={styles.linha}>
            <Text style={styles.paragraph}>{atividade.hora}</Text>
            <Text style={styles.paragraph}>{atividade.descricao}</Text>
            <Text style={styles.paragraph}>
              {atividade.status === "concluída" ? "concluída" : "⏳"}
            </Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default MyDocument;
