import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from './Header.module.scss'
import ProfileTab from './ProfileTab'

// const inter = Inter({ subsets: ['latin'] })

export default function HeaderRight({ isLoggedIn }) {
  return isLoggedIn
    ? <ProfileTab />
    : <div>
      <span>{"Don't have an account? Signup now"}</span>
    </div>
}
