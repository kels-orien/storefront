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


export const productQuery = (slug: string) => `

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

export const productsIdQuery = `

        query {
          products: getProductList {
            items {
              _id
            }
          }
}`