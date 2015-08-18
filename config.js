var dest = './build'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ

module.exports = {
  // 出力先の指定
  dest: dest,

  // jsのビルド設定
  js: {
    src: src + '/js/**',
    dest: dest + '/js'
    // uglify: false
  },

  // webpackの設定
  webpack: {
    entry: {
        app: src + '/js/app.js'
    },
    output: {
      filename: '[name].bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
      ]
    }
  }
}
