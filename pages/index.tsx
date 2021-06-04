import Error from "next/error"
import Head from 'next/head'
import { Layout } from '@components/common'
import { Thumbnail } from '@components/product'
import TakeShape from '../providers/takeshape'
import styles from '@styles/Home.module.css';
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
        <title>Storefront</title>
      </Head>

      <div className={styles.grid}>


        {
          products.map(product => {
            return (
              <Thumbnail key={product._id} product={product} />
            );
          })}
      </div>

    </div>
  )
}

export async function getStaticProps() {

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