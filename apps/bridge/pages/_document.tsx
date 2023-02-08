/* eslint-disable jsx-a11y/iframe-has-title */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      // eslint-disable-next-line no-param-reassign
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html translate="no">
        <Head>
          <title>Sakai Vault</title>
          <meta name="description" content="Decentralized Perpetual Exchange | The next generatiom of DeFi." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
          <link rel="apple-touch-icon" sizes="57x57" href="https://sakaivault.io/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="https://sakaivault.io/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="https://sakaivault.io/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="https://sakaivault.io/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="https://sakaivault.io/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="https://sakaivault.io/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="https://sakaivault.io/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="https://sakaivault.io/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://sakaivault.io/favicon/apple-icon-180x180.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://sakaivault.io/favicon/android-icon-192x192.png"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="https://sakaivault.io/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="https://sakaivault.io/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://sakaivault.io/favicon/favicon-16x16.png" />

          <link rel="shortcut icon" href="https://sakaivault.io/favicon/favicon.ico" />
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTAG}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
          <div id="portal-root" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
