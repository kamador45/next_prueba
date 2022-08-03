import {FC} from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import {Navbar} from "../Navbar";


interface Props {
    children: React.ReactNode;
}

export const MainLayout:FC<Props> = ({children}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next - Kevin A.</title>
                <meta name={'description'} content={'Home page'}/>
            </Head>
            <Navbar/>
            <main className={styles.main}>
                { children }
            </main>
        </div>
    )
}