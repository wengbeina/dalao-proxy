const version = require('../package.json').version;

const config = {
    version: version,
    // custom config file path
    configFilename: 'dalao.config.json',
    cacheDirname: '.dalao-cache',
    watch: true,
    // proxy server
    host: 'localhost',
    port: 8000,
    // target(for proxy)
    target: 'target.example.com',
    // request
    cache: false,
    cacheContentType: [
        "application/json"
    ],
    // max cache time: [`time unit`, `digit`]
    // if `digit` set to `*`, permanently valid
    cacheMaxAge: ['second', 0],
    // response cache filter: [`path`, `value`]
    // e.g. ['code', 200]
    // empty array means do no filtering
    responseFilter: ['code', 200],
    info: true,
    debug: false,
    // extra
    headers: {
    },
    proxyTable: {
        "/": {
            path: "/"
        }
    },
    plugins: [
        "BuildIn:plugin/proxy-cache",
        "BuildIn:plugin/check-version",
    ]
};

module.exports = config;