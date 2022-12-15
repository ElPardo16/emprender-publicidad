import Head from 'next/head'
import Footer from "./Footer";
import Header from "./Header";
import Menu from './Menu';

export default function Layout({children, title}) {
    return (
        <>
            <Head>
                <title>Emprender Publicidad | {title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu/>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}