import { TBodyDashboard} from "./TBodyDashboard";
import styles from "~/styles/dashboard/dashboardTable.module.css"

export function TabelaDashboard(){
    return(
        <table className= {styles.dashboardTable}>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade em estoque</th>
                    <th>Unidades Vendida</th>
                </tr>
            </thead>
            <TBodyDashboard/>
        </table>
    )
}