import Head from 'next/head'
import { Navbar } from '../Navbar'
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image'

interface MainLayoutProps {
    children: React.ReactNode;
    text: string;
    href: string;
    textRoute: string;
}

export const MainLayout = ({ text, href, textRoute }: MainLayoutProps) => {

    return (
        <div style={{
            padding: '15px',
        }}>
            <Head>
                <title>Home - Initial App</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                <div className={styles.center}>
         
                    <Link href={href}>
                        <Image
                            className={styles.logo}
                            src="/next.svg"
                            alt="Next.js Logo"
                            width={300}
                            height={40}
                            priority
                        />
                    </Link>
            
                </div>

                <div className={styles.description}>
                    <p>
                        Get started by editing&nbsp;
                        <code className={styles.code}>{textRoute}</code>
                    </p>
                    <div>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{' '}
                            <h1>{text}</h1>
                        </a>
                    </div>
                </div>

            </main>

        </div>
    )
}


