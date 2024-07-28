"use client"
import { signOut } from 'next-auth/react';
import styles from '~/styles/estoque.module.css'

export default function Logout() {

 

  return (
    <div>
      <header className={styles.header}>
        <button className={styles.buttonHeader} onClick={() => signOut () }>Logout</button>
      </header>
    </div>
  );
}
