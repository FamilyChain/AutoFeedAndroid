const { LocalStorage } = require('quasar'),
    { ethers } = require("ethers");

module.exports = async (state, data) => {
    try {
        const wallet = new ethers.Wallet(data.privatekey);
        LocalStorage.set('datalogin', {
            privatekey: data.privatekey,
            address: await wallet.getAddress()
        });
        return true;
    } catch(err) {
        return err;
    }
}