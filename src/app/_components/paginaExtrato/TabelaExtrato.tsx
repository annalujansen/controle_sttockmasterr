import { TBodyExtrato } from "./TBodyExtrato";
import styles from "~/styles/paginaExtrato/tabelaExtrato.module.css"

export function TabelaExtrato(){
    return(
        <table className= {styles.tabelaExtrato}>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade em Estoque</th>
                    <th>Vendas Recentes</th>
                    <th>Unidades Vendida</th>
                    <th>Extrato</th>
                </tr>
            </thead>
            <TBodyExtrato/>
        </table>
    )
}