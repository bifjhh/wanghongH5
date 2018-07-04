'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"http://www.whxq.fenbot.com/api"',
    API_ROOT: '"http://www.whxq.fenbot.com/api"',
})