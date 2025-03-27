import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../utils/fontawesome";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
    const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
    
    return (
        <Layout>
            <Head>
                <link rel="icon" type="image/png" href={`${basePath}/favicon.png`} />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;