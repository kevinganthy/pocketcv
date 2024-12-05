import '@/app/sytles/globals.css'

import { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
    return <>
        <Component {...pageProps} />
        <Script src="https://unpkg.com/@phosphor-icons/web"/>
    </>;
}