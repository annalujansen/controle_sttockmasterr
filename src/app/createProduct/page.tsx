import {CreateProduct} from '../_components/createProduct';
import styles from '../styles/products.module.css';

export default function CreateProductPage() {
    return (
        <div className={styles.container}>
            <h1>Criar Produto</h1>
            <CreateProduct />
        </div>
    );
}

