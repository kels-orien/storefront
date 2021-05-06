import React, { FC } from 'react'
import s from './Button.module.css'
import cn from 'classnames'


interface ButtonProps {
    className?: string
    dataItemId?: string
    dataItemImage?: string
    dataItemName?: string
    dataItemUrl?: string
    dataItemPrice?: string
}


const Button: FC<ButtonProps> = ({ className, dataItemId, dataItemImage, dataItemName, dataItemUrl, dataItemPrice }) => {


    return (
        <div>
            <button
                className={cn(s.root, className, s.button)}
                data-item-id={dataItemId}
                data-item-image={dataItemImage}
                data-item-name={dataItemName}
                data-item-url={`/product/${dataItemUrl}`}
                data-item-price={dataItemPrice}>
                    ADD TO CART
                </button>
        </div>
    )
}

export default Button