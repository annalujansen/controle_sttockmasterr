import { Products } from '../_components/products';
import styles from '../styles/products.module.css';

export default function ProductsPage() {
    return (
        <div className={styles.container}>
            <h1>Lista de Produtos</h1>
            <Products />
        </div>
    );
}
