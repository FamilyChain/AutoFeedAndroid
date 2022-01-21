const { LocalStorage } = require('quasar'),
    { ethers } = require("ethers"),
    { showloading, emptyloading, shownotify } = require('./helper');

module.exports = async (state, data) => {
    showloading(state);
    try {
        const wallet = new ethers.Wallet(data.privatekey);
        LocalStorage.set('datalogin', {
            privatekey: data.privatekey,
            address: await wallet.getAddress()
        });
        shownotify(state, {
            msgnotif: 'Login is success',
            notiftype: 1
        });
        setTimeout(() => {
            emptyloading(state);
            window.location = '/#/';
        }, 3000);
    } catch(err) {
        emptyloading(state);
        shownotify(state, {
            msgnotif: 'Request is fail',
            notiftype: 0
        });
    }
}