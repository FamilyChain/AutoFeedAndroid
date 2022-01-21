const { LocalStorage } = require('quasar'),
    { ethers } = require("ethers");

const emptyloading = (state) => {
    state.stateloading = false;
};

const showloading = (state) => {
    state.stateloading = true;
};

module.exports = {
    emptynotify: (state) => {
        state.msgnotif = null;
        state.notiftype = null;
    },
    shownotify: (state, data) => {
        state.msgnotif = data.msgnotif;
        state.notiftype = data.notiftype;
    },
    emptyloading: emptyloading,
    showloading: showloading,
    loadlogin: async (state) => {
        showloading(state);
        if (LocalStorage.getItem('datalogin')) {
            let datalogin = LocalStorage.getItem('datalogin'),
                wallet = new ethers.Wallet(datalogin.privatekey),
                address = await wallet.getAddress();
            emptyloading(state);
            if (address == datalogin.address) {
                state.datalogin = datalogin;
            } else {
                LocalStorage.clear();
                window.location = '/#/login';
            }
        } else {
            emptyloading(state);
            LocalStorage.clear();
            window.location = '/#/login';
        }
    }
};
