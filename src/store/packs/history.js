const { LocalStorage } = require('quasar'),
    format = require('date-format'),
    { ethers } = require('ethers'),
    AutoFeedABI = require('../abi/AutoFeed.json'),
    { showloading, emptyloading, shownotify } = require('./helper');

module.exports = { //fb1a8121384e8cc2caeb5e13d85e8e11b94f6e2a784cb143775b2f0a082eed36
    showhistory: async (state) => {
        showloading(state);
        try {
            const accountWallet = LocalStorage.getItem('datalogin'),
                provider = new ethers.providers.JsonRpcProvider(state.rpcUrl),
                wallet = new ethers.Wallet(accountWallet.privatekey, provider),
                instance = new ethers.Contract(state.contractAddress, AutoFeedABI.abi, wallet),
                getId = await instance.functions.currentIds(),
                numFrom = Number(getId) - 1,
                history = await instance.functions.showHistory(numFrom, numFrom > 5 ? (numFrom - 5) : 0),
                length = history[0].length;
            let result = [];
            for (let i = 0; i < length; i++) {
                result.push({
                    id: Number(history[0][i]),
                    time: format(new Date(Number(history[1][i] * 1000)).toLocaleString("en-US", {timeZone: "Asia/Kolkata"}))
                });
                if ((i + 1) >= length) {
                    state.datahistory = result;
                    emptyloading(state);
                }
            }
        } catch(err) {
            state.statusapp = null;
            shownotify(state, {
                msgnotif: 'Get data history is fail',
                notiftype: 0
            });
            setTimeout(() => {
                emptyloading(state);
                window.location.reload();
            }, 3000);
        }
    }
};