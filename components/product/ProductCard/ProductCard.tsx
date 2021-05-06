import { FC } from 'react'
import s from './ProductCard.module.css'


const ProductCard : FC = ({children}) => {


    return (
        <div className = "mx-auto px-4">
            {children}
        </div>
    )

}

export default ProductCard