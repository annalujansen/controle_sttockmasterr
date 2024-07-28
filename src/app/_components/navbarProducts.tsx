import Link from 'next/link';
import styles from '~/styles/NavbarProducts.module.css';

export default function NavbarProducts() {
  return (
    <div className={styles.navbar}>
      <Link href="/deleteProduct" className={styles.link}>Deletar</Link>
      <Link href="/editProduct" className={styles.link}>Editar</Link>
      <Link href="/createProduct" className={styles.link}>Criar</Link>
      <Link href="/product" className={styles.link}>Ver</Link>
    </div>
  );
}
