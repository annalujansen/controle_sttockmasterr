import styles from "~/styles/dashboard/dashboardMain.module.css"
import {TabelaDashboard} from "../_components/dashboard/TabelaDashboard";



export default function Homepage() {
  return (
    <main className= {styles.dashboardMain}>
      <h1>Dashboard</h1>
      <TabelaDashboard/>
    </main>
  );
}