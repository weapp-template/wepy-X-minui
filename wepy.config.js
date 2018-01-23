const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: true,
  // build: {
  //   web: {
  //     htmlTemplate: 'index.html',
  //     htmlOutput: path.join('web', 'index.html'),
  //     jsOutput: path.join('web', 'index.js')
  //   }
  // },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: isProd
    },
    stylus: {
      compress: isProd
    },
    // sass: {
    //   outputStyle: 'compressed'
    // },
    babel: {
      sourceMap: !isProd,
      presets: [
        'env'
      ],
      plugins: [
        'syntax-export-extensions',
        'transform-class-properties',
        'transform-export-extensions',
        'transform-decorators-legacy',
        'transform-object-rest-spread'
      ]
    }
  },
  plugins: !isProd ? {} : {
    uglifyjs: {
      filter: /\.js$/,
      config: {}
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}
