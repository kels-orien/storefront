export const productsQuery = `

    query {
        products: getProductList {
          items {
                  _id
                  name
                  category {
                             _id
                              title
                          }
                  price
                  salePrice
                  sizes {
                          name
                        }
                  description
                  image {
                          _id
                          caption
                          credit
                          description
                          filename
                          mimeType
                          path
                          sourceUrl
                          title
                          uploadStatus
                        }
                }
    }
}`


export const productQuery = (slug: any) => `

    query {
        product: getProduct( _id: "${slug}") {
            _id
            colors {
                name
            }
            description
            image {
                _id
                description
                sourceUrl
            }
            name 
            price
            sizes {
                name
            } 
        }
    }
`

export const searchQuery =  (q: any ) => `

  query  {
    products: getProductList(where: {name: {match: "${q}"}}) {
      items {
          _id
      description
      image {
        sourceUrl
      }
      name
      price
    }
  }
}

`

export const productsIdQuery = `

        query {
          products: getProductList {
            items {
              _id
            }
          }
}`

