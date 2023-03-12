import LogoutButton from 'components/Buttons/Logout'
import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from './ProfileTab.module.scss'

// const inter = Inter({ subsets: ['latin'] })

export default function ProfileTab() {
  return (
    <div>
      <LogoutButton />
    </div>
  )
}
