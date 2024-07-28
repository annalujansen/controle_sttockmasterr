import { DeleteProduct } from '../_components/deleteProduct';
import styles from '~/styles/products.module.css';

export default function DeleteProductPage() {
    return (
        <div className={styles.container}>
            <h1>Deletar Produto</h1>
            <DeleteProduct />
        </div>
    );
}