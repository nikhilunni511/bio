import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from './Header.module.scss'

// const inter = Inter({ subsets: ['latin'] })

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src={"/logo_design_sample_flower.png"} width={34} height={32} alt={'logo'}></Image>
            </div>
            <div>
                <span>{"Don't have an account? Signup now"}</span>
            </div>
        </header>
    )
}
