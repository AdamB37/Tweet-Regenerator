const path = require('path')

module.exports = {
    entry: "./public/index.js",
    output: {
        path: path.join(__dirname, './build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
              presets:['env','react']
            },
            include: [
              path.resolve(__dirname, 'public')
            ],
            exclude: /node_modules/
        }]
    },
    node: {
      fs: "empty",
      net:"empty",
      tls:"empty",
      module:"empty"
    }
}
