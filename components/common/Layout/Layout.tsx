import cn from 'classnames'
import s from './Layout.module.css'
import React, { FC } from 'react'
import { Button, Navbar, Footer } from '@components/common'
import dynamic from 'next/dynamic'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'


const FeatureBar = dynamic(
    () => import('@components/common/FeatureBar'),
    //dynamicProps
  )

const Layout: FC = ({children}) => {
    const { acceptedCookies, onAcceptCookies } = useAcceptCookies()

    return (
        <div className={cn(s.root)}>
            <Navbar/>
            {children}
            <Footer/>

            <FeatureBar
          title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
          hide={acceptedCookies}
          action={
            <Button className="mx-5" onClick={() => onAcceptCookies()}>
              Accept cookies
            </Button>
          }
        />
        </div>
    )
}


export default Layout