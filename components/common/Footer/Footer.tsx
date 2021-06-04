import { FC } from 'react'
import s from './Footer.module.css'
import cn from 'classnames'


interface Props {
    children?: any
}

const Footer: FC<Props> = () => {


    return (
        <footer className={cn(s.root)}>

            <div className={cn(s.bottom)}>
                <div>
                    <span>&copy; 2021 Korien, Inc. All rights reserved.</span>
                </div>
                <div className="flex items-center text-primary">
                    <span className="text-primary">Crafted by</span>
                    <a
                        rel="noopener"
                        href="https://korien.vercel.app"
                        aria-label="Vercel.com Link"
                        target="_blank"
                        className="text-primary font-bold hover:text-gray-400"
                        
                    >
                    <span className="ml-1">Korien</span> 
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer