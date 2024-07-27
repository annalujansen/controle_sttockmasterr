import styles from "~/styles/dashboard/dashboardMain.module.css"
import {TabelaDashboard} from "../_components/dashboard/TabelaDashboard";
import Logout from "../_components/logout";



export default function Homepage() {
  return (
    <main className= {styles.dashboardMain}>
      <Logout/>
      <h1>Dashboard</h1>
      <TabelaDashboard/>
    </main>
  );
}