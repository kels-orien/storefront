import '../styles/globals.css'
import { FC } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'

const Comp: FC = ({ children }) => <> {children} </>

function MyApp({ Component, pageProps }: AppProps) {

  const Layout = (Component as any).Layout || Comp

  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>)
}

export default MyApp
