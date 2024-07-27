"use client"
import { useRouter } from 'next/navigation';
import styles from '~/styles/estoque.module.css'

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div>
      <header className={styles.header}>
        <button className={styles.buttonHeader} onClick={handleLogout}>Logout</button>
      </header>
    </div>
  );
}
