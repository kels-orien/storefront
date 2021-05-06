
import type {
    GetStaticPropsContext,
    InferGetStaticPropsType
} from 'next'
import { ProductView, ProductCard } from '@components/product'
import { Layout } from '@components/common'
import TakeShape from '@providers/takeshape'
import { getImageUrl } from '@takeshape/routing'
import Error from "next/error";
import { productQuery, productsIdQuery } from '@providers/graphql'





export default function Slug(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const { data, errors } = props
    if (errors && errors.length > 0) {
        return <Error statusCode={500} />
    } else if (!data) {
        return <Error statusCode={404} />
    }

    
    const product = props.data.product

    return (
        <div className="container mx-auto">
            <ProductCard>

                <ProductView product={product} />


            </ProductCard>
        </div>

    )
}


export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>): Promise<any> {
    const { slug } = params;
    const res = {
        props: {
            data: null,
            errors: null
        }
    };
    const variables =  { slug };

    try {

        res.props.data = await TakeShape.graphql(productQuery(slug), variables);
        return res;
    } catch (error) {
        console.error(error);
        res.props.errors = [error.message];
    }
    return res;
}


export async function getStaticPaths(): Promise <any> {
    let paths = [];
    try {
        const data = await TakeShape.graphql(productsIdQuery);
        const createPath = (item) => ({ params: { slug: item._id } });
        paths = data.products.items.map(createPath);
    } catch (error) {
        console.error(error);
    }
    return { paths, fallback: true };
}

Slug.Layout = Layout