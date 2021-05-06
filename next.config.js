const bundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: !!process.env.BUNDLE_ANALYZE,
  })


  module.exports =  bundleAnalyzer ({
      images: {
          domains:['res.cloudinary.com']
      },
      env: {
        TAKESHAPE_API_KEY: process.env.TAKESHAPE_API_KEY,
        TAKESHAPE_PROJECT_ID: process.env.TAKESHAPE_PROJECT_ID
    },
  })