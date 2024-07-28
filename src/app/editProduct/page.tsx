import { EditProduct } from '../_components/editeProduct';
import styles from '~/styles/products.module.css';

export default function EditProductPage() {
    return (
        <div className={styles.container}>
            <h1>Editar Produto</h1>
            <EditProduct />
        </div>
    );
}