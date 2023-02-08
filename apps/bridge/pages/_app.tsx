import '@pancakeswap/ui/css/reset.css'
import { PancakeTheme, ResetCSS, dark, light, ModalProvider, UIKitProvider } from '@pancakeswap/uikit'
import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Script from 'next/script'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'
import Head from 'next/head'
import { Menu } from '../components/Menu'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const StyledThemeProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { resolvedTheme } = useNextTheme()
  return (
    <UIKitProvider theme={resolvedTheme === 'dark' ? dark : light} {...props}>
      {props.children}
    </UIKitProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }
  html, body, #__next {
    height: 100%;
  }
  #__next {
    display: flex;
    flex-direction: column;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}

function MyApp({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted()
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Sakai Vault Bridge | Cross-Chain Bridge Protocol | Bridge your tokens fast & secure!"
        />
        <meta name="theme-color" content="#1FC7D4" />
        <meta
          name="twitter:image"
          content="https://2447953470-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FncQ1V77B1a9EbyKYD1xJ%2Fuploads%2FpSBt196gLA1CrgWtYazd%2F325624681_1433246087420321_5902325025840769009_n.jpg?alt=media&token=049f6c4b-30a3-47ee-9967-32b9ad97ed31"
        />
        <meta
          name="twitter:description"
          content="Sakai Vault Bridge | Cross-Chain Bridge Protocol | Bridge your tokens fast & secure!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sakai Vault Bridge | Cross-Chain Bridge Protocol | Bridge your tokens fast & secure!"
        />
        <title>Bridge | Sakai Vault</title>
      </Head>
      <NextThemeProvider>
        <StyledThemeProvider>
          <ModalProvider>
            <ResetCSS />
            <GlobalStyle />
            {isMounted && (
              <>
                <Menu />
                <Component {...pageProps} />
              </>
            )}
          </ModalProvider>
        </StyledThemeProvider>
      </NextThemeProvider>
    </>
  )
}

export default MyApp
