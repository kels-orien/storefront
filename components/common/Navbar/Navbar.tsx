import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import cn from 'classnames'
import Container from '../../ui/Container'
import { UserNav, Searchbar } from "../../common"
import { Logo } from "@components/icons"

const Navbar: FC = () => {
  return (
    <div className={cn(s.root)}>
      <Container>
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
          <div className="flex items-center flex-1">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo/>
              </a>
            </Link>


          </div>

          <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div>

          <div className="flex justify-end flex-1 space-x-8">
            <UserNav />
          </div>
        </div>


        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div>
      </Container>
    </div>)
}

export default Navbar