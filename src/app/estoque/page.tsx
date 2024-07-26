"use client"
import { useRouter } from 'next/navigation';
import TabelaEstoque from '../_components/tabelaEstoque';
import styles from '~/styles/estoque.module.css'

export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div>
      <header className={styles.header}>
        <button className={styles.buttonHeader} onClick={handleLogout}>Logout</button>
      </header>
      <TabelaEstoque />
    </div>
  );
}
