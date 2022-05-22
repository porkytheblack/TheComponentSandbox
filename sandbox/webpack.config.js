const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    resolve: {
        fallback: {
            "path": false,
            "assert": false,
            "util": false,
            "stream": false,
            "constants": false
        }
    }
}