import { FC } from 'react'
import s from 'Head.module.css'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'

const Head: FC = () => {


    return (
        <>
            <DefaultSeo { ...config}/>
            <NextHead>
                <meta name = 'viewport' content= 'width-device-width, initial-scale=1'/>
                <link rel = 'manifest' href = '/site.webmainifest' key = 'site-manifest'/>

            </NextHead>
        </>
    )
}


export default Head