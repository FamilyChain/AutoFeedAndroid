const { LocalStorage } = require('quasar'),
    { ethers } = require('ethers'),
    AutoFeedABI = require('../abi/AutoFeed.json');

module.exports = {
    getonoff: async (state) => {
        try {
            const accountWallet = LocalStorage.getItem('datalogin'),
                provider = new ethers.providers.JsonRpcProvider(state.rpcUrl),
                wallet = new ethers.Wallet(accountWallet.privatekey, provider),
                instance = new ethers.Contract(state.contractAddress, AutoFeedABI.abi, wallet),
                getStatus = await instance.functions.paused();
            return getStatus[0];
        } catch(err) {
            return err;
        }
    },
    setonoff: async(state) => {
        try {
            console.log(1);
            const accountWallet = LocalStorage.getItem('datalogin'),
                provider = new ethers.providers.JsonRpcProvider(state.rpcUrl),
                wallet = new ethers.Wallet(accountWallet.privatekey, provider),
                instance = new ethers.Contract(state.contractAddress, AutoFeedABI.abi, wallet),
                getStatus = await instance.functions.paused(),
                result = !getStatus[0] ? await instance.functions.pause() : await instance.functions.unpause();
            return result;
        } catch(err) {
            return err;
        }
    }
};