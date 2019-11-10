import axios from 'axios'
// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//   router: {
//     base: '/blog-nuxt/'
//   }
// } : {}
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'yandex-verification', content: 'KEY' },
      { name: 'google-site-verification', content: 'KEY' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' }
    ]
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'blue' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/app-components.js'

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-KEY'
    // }],
    // ['@nuxtjs/yandex-metrika', {
    //   id: 'KEY',
    //   webvisor: false,
    //   clickmap: true,
    //   trackLinks: true
    // }]
  ],
  /*
  ** Build configuration
  */
  // ...routerBase,
  build: {
    vendor: [
      'vue',
      'axios'
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    routes: function () {
      return axios.get('https://blok-nuxt.firebaseio.com/posts.json')
        .then((res) => {
          const postArray = []
          for (let key in res.data) {
            postArray.push({ ...res.data[key], id: key })
          }
          // Routes
          return postArray.map((post) => {
            return '/blog/' + post.id
          })
        })
    }
  }
}
