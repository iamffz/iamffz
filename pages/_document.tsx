import { GA_TRACKING_ID } from 'lib/gtag'
import { Head, Html, Main, NextScript } from 'next/document'

const isProduction = process.env.NODE_ENV === 'production'

const Document = () => {
  return (
    <Html>
      <Head>
        {/* <!-- Google Font --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T69HL2L');`
          }}
        />
        {/* <!-- End Google Tag Manager --> */}

        {/* <!-- Google Analytics --> */}
        {isProduction && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
              }}
            />
          </>
        )}
        {/* <!-- End Google Analytics --> */}
      </Head>
      <body className="m-0 overflow-hidden bg-body bg-cover bg-center bg-no-repeat p-0">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
