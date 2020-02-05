const defaultOptions = {
    open: true,
    cleanOnRestart: false,
    disableLogger: true,
    maxRecords: 100,
    editor: 'code'
};

function configureSetting() {
    return {
        defaultEnable: true,
        userOptionsField: 'monitor',
        configureEnableField: 'enable',
    }
}

function parser(rawUserConfig) {
    if (rawUserConfig && typeof rawUserConfig === 'object') {
        return {
            ...defaultOptions,
            ...rawUserConfig
        }
    }
    else {
        return defaultOptions;
    }
}

module.exports = {
    configureSetting,
    parser
};