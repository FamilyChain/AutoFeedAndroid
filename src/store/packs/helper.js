module.exports = {
    emptynotify: (state) => {
        state.msgnotif = null;
        state.notiftype = null;
    },
    shownotify: (state, data) => {
        state.msgnotif = data.msgnotif;
        state.notiftype = data.notiftype;
    },
    emptyloading: (state) => {
        state.stateloading = false;
    },
    showloading: (state) => {
        state.stateloading = true;
    }
};
