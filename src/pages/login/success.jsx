import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect } from 'react'

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard');
  }, []);
  return (
    <>

      <main>
        <p>
          Get started by editing&nbsp;
        </p>
      </main>
    </>
  )
}
