module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          }, {
              loader: "sass-loader",
          }],
      },
      {
        test: /\.svg$|\.ttf?|\.woff$|\.woff2|\.eof|\.eot|\.cur/,
        loader: 'file-loader'
      }
    ]
  },
    devServer: {
     hot: true,

        overlay: {
            errors: true,
            warnings: true,
        },

        port: 8080,

    },
}
