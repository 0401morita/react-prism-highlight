const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    'react-prism-highlight': path.resolve('src','components','app.tsx')
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          { loader: "ts-loader" }
        ],
      },{
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: { plugins: [
              autoprefixer()
            ]},
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".sass", ".scss", ".css"]
  }
}