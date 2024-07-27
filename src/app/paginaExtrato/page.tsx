import styles from "~/styles/paginaExtrato/extratoMain.module.css"
import { TabelaExtrato } from "../_components/paginaExtrato/TabelaExtrato";
import Logout from "../_components/logout";



export default function Homepage() {
  return (
    <main className= {styles.extratoMain}>
      <Logout/>
      <h1>Extrato</h1>
      <TabelaExtrato/>
    </main>
  );
}