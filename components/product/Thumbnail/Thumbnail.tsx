import { FC } from 'react'
import s from './Thumbnail.module.css'
import Link from 'next/link'


type productType = {
    _id: string
    image: {
        sourceUrl: string
    }
    name: string
    price: string
}

interface Props {
    className?: string
    children?: any
    product: productType
}

const Thumbnail: FC<Props> = ({ product }) => {

    return (
        
            <div key={product._id} className={s.card}>
                <Link href={`/product/${product._id}`}>
                    <a>
                        <img src={product.image.sourceUrl} alt={`Preview of ${product.name}`} />
                        <p className={s.cardDescription}>{product.name}</p>
                        <p>${product.price}</p>
                    </a>
                </Link>
            </div>
    
    )
}

export default Thumbnail