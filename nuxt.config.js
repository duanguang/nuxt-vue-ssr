var webpack = require('webpack')
const session = require('express-session');
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function getWebpackPlugin() {
  if (process.env.NODE_ENV === 'production') {
    return [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_console: true
          },
          mangle: {
            safari10: true
          }
        }
      })
    ]
  }
  return []
}
module.exports = {
  router: {
    base: '/',
    scrollBehavior: function (to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '在线报关-进口报关代理-出口报关代理-云枢纽.境岸通在线报关平台',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '电商前台项目'
      }
    ],

    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/static/favicon.ico'
    }]
  },
  /*
   ** Add server middleware
   ** Nuxt.js uses `connect` module as server
   ** So most of express middleware works with nuxt.js server middleware
   */
  serverMiddleware: [
    // body-parser middleware
    // session middleware
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000
      }
    }),
    // Api middleware
    // We add /expressApi/login & /expressApi/logout routes
  ],
  css: [
    'ant-design-vue/dist/antd.css',
    'iview/dist/styles/iview.css',
    // { src: 'iview/src/styles/index.less', lang: 'less' },
    {
      src: '~assets/common.less',
      lang: 'less'
    },
    'swiper/dist/css/swiper.css',
  ],
  plugins: [{
      src: '@/plugins/antd.js',
      ssr: true
    },
    {
      src: '@/plugins/iview.js',
      ssr: true
    },
    {
      src: '@/plugins/swiper.js',
      ssr: false
    },
  ],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['iview'],
    extractCSS: true,
    filenames: {
      app: ({
        isDev
      }) => isDev ? '[name].js' : '[name].[chunkhash].js',
    },
    babel: {
      plugins: [
        ["@babel/plugin-proposal-decorators", {
          "legacy": true
        }],
        ["@babel/plugin-proposal-class-properties", {
          "loose": true
        }],
        ["import",
          {
            "libraryName": "ant-design-vue",
            "libraryDirectory": "lib"
          },
          "ant-design-vue"
        ],
        ["import", {
          "libraryName": "iview",
          "libraryDirectory": "src/components"
        }, 'iview']
      ]
    },
    extend(config, {
      isDev,
      isClient,
      isServer
    }) {

      // if (isServer) {
      //    config['externals'] = [nodeExternals({ whitelist: [/iview$/] })];
      // }
      // if(isClient){
      //   console.log(config)
      //   config.entry['polyfill'] = ['babel-polyfill']
      // }
    },
    vendor: ['axios'],
    plugins: getWebpackPlugin(),
    presets({
      isServer
    }) {
      const targets = isServer ? {
        node: '9.8.0'
      } : {
        ie: '11'
      }
      return [
        [require.resolve('@nuxt/babel-preset-app'), {
          targets
        }]
      ]
    }
  },
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    less: './assets/*.less'
  },
  dev: (process.env.NODE_ENV !== 'production')
}
