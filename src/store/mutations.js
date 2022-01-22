const { showloading, emptyloading, shownotify, emptynotify, loadlogin } = require('./packs/helper'),
    login = require('./packs/login'),
    { getonoff, setonoff } = require('./packs/onoff'),
    { showhistory } = require('./packs/history');

export default {
    showloading,
    emptyloading,
    shownotify,
    emptynotify,
    loadlogin,
    login,
    getonoff,
    setonoff,
    showhistory
};
