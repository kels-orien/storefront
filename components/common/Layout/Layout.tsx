import cn from 'classnames'
import s from './Layout.module.css'
import React, { FC } from 'react'


const Layout: FC = ({children}) => {

    return (
        <div className={cn(s.root)}>
            {children}
        </div>
    )
}


export default Layout