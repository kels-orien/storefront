# StoreFront 
Ecommerce web application (storefront) created using Nextjs(Typescript), Takeshape CMS, and Snipcart

## Pages
* Index Page (Home Page)

![alt-text](https://res.cloudinary.com/dofiasjpi/image/upload/v1623078616/storefront/home.png)

* Product Detail Page

![alt-text](https://res.cloudinary.com/dofiasjpi/image/upload/v1623078616/storefront/product-detail-page.png)



* Search Page

![alt-text](https://res.cloudinary.com/dofiasjpi/image/upload/v1623078616/storefront/search-page.png)


* Cart Page
![alt-text](https://res.cloudinary.com/dofiasjpi/image/upload/v1623078616/storefront/cart-summary.png)


* Checkout

![alt-text](https://res.cloudinary.com/dofiasjpi/image/upload/v1623078616/storefront/checkout-page.png)


* Payment

![alt-text](https://res.cloudinary.com/dofiasjpi/image/upload/v1623078616/storefront/payment.png)

## To deploy this project

1. Clone the repo & install the dependencies

```sh
git clone https://github.com/kels-orien/storefront.git

cd storefront

npm install
```

2. Click on the Links to create  [Snipcart](https://snipcart.com) account

3. Create a file called `.env.local` at the root of the project with:

    `NEXT_PUBLIC_SNIPCART_API_KEY="[Your Snipcart API Key]"
    `   

4. Click on the Link to create [TakeShape](https://www.takeshape.io) account. 

5. Go to [project start page](https://www.takeshape.io/start/) and deploy the online shop pattern. After creating the project go to the API tab(section) and copy the project id(example project id: 977c7ac5-7503-49df-ae45-b0805e6fe535) from the API Endpoint( example API Endpoint: https://api.takeshape.io/project/977c7ac5-7503-49df-ae45-b0805e6fe535/v3/graphql) from bottom left side of the page. Add  project id to your `.env.local` file.

    `
     NEXT_PUBLIC_TAKESHAPE_PROJECT_ID="[Your Takeshape Project ID]
    `

6. Create an API key by clicking on the API key navigation link and the `create new API key` button, Add a title and set permissions to read.  Add the API Key to your `.env.local` file for Takeshape CMS 
   
    `
    NEXT_PUBLIC_TAKESHAPE_KEY="[Your Takeshape API key]"
    `
