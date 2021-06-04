import cn from 'classnames'
import type { GetServerSidePropsContext, InferGetServerSidePropsType} from 'next'
import { useRouter } from 'next/router'
import { Layout } from '@components/common'
import { Thumbnail } from '@components/product'
import TakeShape from '@providers/takeshape'
import { searchQuery } from '@providers/graphql'
import { Grid, Skeleton } from '@components/ui'
import styles from '@styles/Home.module.css';
import rangeMap from '@lib/range-map'

export default function Search({ data, query }: InferGetServerSidePropsType<typeof getServerSideProps> ) {
  
  const router = useRouter()

  const refreshData = (query) => {
   if ( router.query.q !== query )  {
    router.replace(router.asPath);
   }
  }


  refreshData(query)
  

  return (

    <div className="col-span-8 order-3 lg:order-none">
       {data ? (
                <>
                  <span
                    className={cn('animated', {
                      fadeIn: data.found,
                      hidden: !data.found,
                    })}
                  >
                    Showing {data.products.items.length} results{' '}
                    {query && (
                      <>
                        for "<strong>{query}</strong>"
                      </>
                    )}
                  </span>
                  <span
                    className={cn('animated', {
                      fadeIn: !data.found,
                      hidden: data.found,
                    })}
                  >
                    {data.products.items.length === 0 ? (
                      <>
                        There are no products that match "<strong>{query}</strong>"
                      </>
                    ) : (
                      <>
                      </>
                    )}
                  </span>
                </>
              ) : query ? (
                <>
                  Searching for: "<strong>{query}</strong>"
                </>
              ) : (
                <>Searching...</>
              )}


      { data ? (<div className ={styles.grid}>{data.products.items.map((product: any)=> {
            return (
              <Thumbnail key={product._id} product = {product}/>
            );
          })}</div>) : (
        <Grid layout="normal">
          {rangeMap(12, (i) => (
            <Skeleton
              key={i}
              className="w-full animated fadeIn"
              height={200}
            />
          ))}
        </Grid>
      )}
    </div>
  )
}


export async function getServerSideProps( context:GetServerSidePropsContext) {

  const { q } = context.query
  console.log("query:", q)
  const res = {
    props: {
      errors: null,
      data: null,
      query: q
    }
  };


  try {

    res.props.data = await TakeShape.graphql(searchQuery(q));
    console.log("data2: ", res.props.data)
    return res
  } catch (error) {
    console.error(error);
    res.props.errors = [error.message];
  }
  return res;
}
Search.Layout = Layout
