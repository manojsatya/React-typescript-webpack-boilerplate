const webpack = require('webpack')


module.exports = {
    mode: 'production',
    devtool: 'source-map', // controls generation of source maps
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Manoj production') // Used for API endpoints
        })
    ]
}