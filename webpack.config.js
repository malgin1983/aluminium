const path = require('path')
module.exports ={
    mode: "development",
    entry: {
        main: './public/scripts/index.js',
        sliderBottom: './public/scripts/bottom-slider.js',
        contacts: './public/scripts/contacts.js'
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'public', 'scripts')
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            // Loading images
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            },

            // Loading fonts
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },

            // Loading CSS
            {
                test: /\.(css)$/,
                use: 'style-loader'
            },

        ]
    },
}