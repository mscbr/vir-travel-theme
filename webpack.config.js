module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'index.js'
    }
};