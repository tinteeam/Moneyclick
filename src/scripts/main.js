// config requirejs
requirejs.config({
    baseUrl: './',
    paths: {
        'MclickCounter': '../mclick-counter/src/index'
    },
    shim: {
        'MclickCounter': {
            exports: 'MclickCounter'
        }
    }
})

requirejs(['MclickCounter'], function(MclickCounter) {
    console.log('MclickCounter loaded:', MclickCounter.version());
});