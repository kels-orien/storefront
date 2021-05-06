import Error from "next/error"
import Head from 'next/head'
import Link from 'next/link'
import { Layout } from '@components/common'
import TakeShape from '../providers/takeshape'
import styles from '@styles/Home.module.css';
import { getImageUrl } from '@takeshape/routing'
import type { InferGetStaticPropsType } from 'next'
import { productsQuery } from '@providers/graphql'






export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {

  const { data, errors } = props
  if (errors && errors.length > 0) {
    return <Error statusCode={500} />
  } else if (!data) {
    return <Error statusCode={404} />
  }

  const products = data.products.items
  return (
    <div>
      <Head>
        <title>Snipcart Store</title>
      </Head>

      <div className={styles.grid}>


        {
          products.map(product => {
            return (
              <div key={product._id} className={styles.card}>
                <Link href={`/product/${product._id}`}>
                  <a>
                    <img src={product.image.sourceUrl} alt={`Preview of ${product.title}`} />
                    <h3>{product.title}</h3>
                    <p className={styles.cardDescription}>{product.name}</p>
                    <p>${product.price}</p>
                  </a>
                </Link>
              </div>
            );
          })}
      </div>

    </div>
  )
}

export async function getStaticProps(): Promise <any> {

  const res = {
    props: {
      data: null,
      errors: null
    }
  };
  try {

    res.props.data = await TakeShape.graphql(productsQuery, null);

  } catch (error) {

    console.error(error);
    res.props.errors = [error.message];

  }
  return res;
}
Home.Layout = Layout