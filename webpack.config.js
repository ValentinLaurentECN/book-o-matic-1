module.exports = {
    entry: './src/bookomatic.js',
    output: {
        path: './bin',
        filename: 'bookomatic.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
        }]
    },
    devServer: {
        contentBase: "./bin",
        hot: true
    },
};
