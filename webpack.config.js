const path = require('path')
const fs = require('fs')

const lessToJs = require('less-vars-to-js')
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-theme-vars.less'), 'utf8'))
themeVariables['@icon-url'] = "'//localhost:8080/fonts/iconfont'"

module.exports = {
  entry: [
    './www/frontend/src/index'
  ],
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'less-loader',
            options: {
              modifyVars: themeVariables,
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /flexboxgrid/
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'svgr/webpack']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'www/frontend/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './www/frontend/dist',
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://192.168.99.100:8080'
    }
  }
}
