const { LocalStorage } = require('quasar'),
    { ethers } = require('ethers'),
    AutoFeedABI = require('../abi/AutoFeed.json'),
    { showloading, emptyloading, shownotify } = require('./helper');

module.exports = {
    getonoff: async (state) => {
        showloading(state);
        try {
            const accountWallet = LocalStorage.getItem('datalogin'),
                provider = new ethers.providers.JsonRpcProvider(state.rpcUrl),
                wallet = new ethers.Wallet(accountWallet.privatekey, provider),
                instance = new ethers.Contract(state.contractAddress, AutoFeedABI.abi, wallet),
                getStatus = await instance.functions.paused();
            emptyloading(state);
            state.statusiot = getStatus[0];
        } catch(err) {
            emptyloading(state);
            state.statusiot = null;
            shownotify(state, {
                msgnotif: 'Get data status activated is fail',
                notiftype: 0
            });
        }
    },
    setonoff: async(state) => {
        showloading(state);
        try {
            const accountWallet = LocalStorage.getItem('datalogin'),
                provider = new ethers.providers.JsonRpcProvider(state.rpcUrl),
                wallet = new ethers.Wallet(accountWallet.privatekey, provider),
                instance = new ethers.Contract(state.contractAddress, AutoFeedABI.abi, wallet),
                getStatus = await instance.functions.paused();
            !getStatus[0] ? await instance.functions.pause() : await instance.functions.unpause();
            shownotify(state, {
                msgnotif: getStatus[0] ? 'Auto feed is non activated' : 'Auto feed is activated',
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
};