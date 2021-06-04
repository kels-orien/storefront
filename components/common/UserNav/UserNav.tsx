import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import s from './UserNav.module.css'
import cn from 'classnames'
import { CartIcon, AccountIcon } from "../../icons"



const UserNav: FC = () => {
   

    return (
        <nav className={cn(s.root)}>
            <div className={s.mainContainer}>
            <ul className={s.list}>
                <li className={s.item} >
                    <a href="/" className="snipcart-checkout">
                    <CartIcon/>
                    </a>   
                </li>
                <li className={s.item}>
                <AccountIcon/>
                </li>
            </ul>

            </div>
            

        </nav>
        )
}

export default UserNav