import { FC } from 'react'
import cn from 'classnames'
import s from 'Container.module.css'


const Container : FC = ({ children }) => {

        return (
            <div className='mx-auto max-w-8xl px-6'>
            {children}
            </div>
        )
}


export default Container