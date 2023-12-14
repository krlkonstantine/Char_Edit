import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import {wrapper} from "@/state/store";
import {Suspense} from "react";
import {useTranslation} from "react-i18next";

function App({Component, pageProps}: AppProps) {
    const {t, i18n} = useTranslation()

    return (
        <Suspense fallback={<h1>Loading</h1>}>
            <Component {...pageProps} />
        </Suspense>
        )

}

export default wrapper.withRedux(App)