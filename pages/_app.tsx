import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'

import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress

// import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '../styles/custom/antd.custom.scss'
import '../styles/custom/socialIcons.scss'
import '../styles/globals.css'
import { useEffect } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

  const calculateVh = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(() => {
    // Initial calculation
    calculateVh()

    // Re-calculate on resize
    window.addEventListener('resize', calculateVh)

    // Re-calculate on device orientation change
    window.addEventListener('orientationchange', calculateVh)
  }, [])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* <!-- Primary Meta Tags --> */}
        <title>IAMFFZ.ME</title>
        <meta name="title" content="Hello World! | IAMFFZ.ME" />
        <meta name="description" content="Welcome to my website." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iamffz.me/" />
        <meta property="og:title" content="Hello World! | IAMFFZ.ME" />
        <meta property="og:description" content="Welcome to my website." />
        <meta property="og:image" content="/assets/images/og-image.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://iamffz.me/" />
        <meta property="twitter:title" content="Hello World! | IAMFFZ.ME" />
        <meta property="twitter:description" content="Welcome to my website." />
        <meta property="twitter:image" content="/assets/images/og-image.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
