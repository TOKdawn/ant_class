var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        public: '/gas/dist',
        filename: 'build.js'
    }
}