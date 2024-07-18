"use client";
import styles from '~/styles/login.module.css';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';


export default function Login() {
  const session = useSession();
//   const router = useRouter();
  function handleClickSignIn() {
    signIn("google")
    // router.push("/")
  }

  return (
    <main className={styles.main}>
        <div className={styles.container}>
            <h2 className={styles.heading}>Login</h2>
            <form action="#">
                <div className={styles.usuario}>
                    <input type="text" name="usuario" id="usuario" placeholder="Usuário" autoComplete="off" />
                </div>
                <div className={styles.senha}>
                    <input type="password" name="senha" id="senha" placeholder="Senha" autoComplete="off" />
                </div>
                <div className={styles.entrar}>
                    <input type="submit" value="Continuar"/>
                </div>
            </form>
            <div className={styles.botao}>
                <button className={styles.buttonIn} onClick={handleClickSignIn}>Entrar com Google</button>
            </div>
        </div>
    </main>
  );
};
