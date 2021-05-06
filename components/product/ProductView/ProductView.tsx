import { FC } from 'react'
import s from './ProductView.module.css'
import Link from 'next/link'
import { Button } from '@components/ui'
import cn from 'classnames'

type productType = {
    _id: string
    image :{
        sourceUrl: string
    }
    name: string
    price: string
    description: string
}

interface Props {
    className?: string
    children?: any
    product: productType
}

const ProductView: FC <Props> = ({ product }) => {
        
    return (
        <div className={cn(s.root, 'fit')}>

            <div key={product._id} className={cn(s.productDisplay)}>

                <a>
                    <img src={product.image.sourceUrl} alt={`Preview of ${product.name}`} />

                </a>


            </div>
            <div className={cn(s.sidebar)}>
                <div className="pb-14">
                    <h1 className="font-bold uppercase mb-5 text-4xl">{product.name}</h1>
                    <p className="font-semibold text-lg">$ {product.price} USD </p>
                    <p className="mt-6">{product.description}</p>
                </div>
                <p>
                    <Button 
                        className="snipcart-add-item"
                        dataItemId={product._id}
                        dataItemImage={product.image.sourceUrl}
                        dataItemName={product.name}
                        dataItemUrl={`/product/${product._id}`}
                        dataItemPrice={product.price} />
                </p>
            </div>
        </div>
    )
}

export default ProductView