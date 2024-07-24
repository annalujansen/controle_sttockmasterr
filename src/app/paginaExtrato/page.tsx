import styles from "~/styles/paginaExtrato/extratoMain.module.css"
import { TabelaExtrato } from "../_components/paginaExtrato/TabelaExtrato";



export default function Homepage() {
  return (
    <main className= {styles.extratoMain}>
      <h1>Extrato</h1>
      <TabelaExtrato/>
    </main>
  );
}