var app = app || {};

(function() {
    var settings = window.navigator.mozSettings;
    if (!settings) {
        console.log('no settings');
        return;
    }
    var reqEnabled = settings.createLock().get('bluetooth.enabled');
    reqEnabled.onsuccess = function () {
        var isBluetoothEnabled = reqEnabled.result['bluetooth.enabled'];
        console.log('AAAAAAAAA: ' + isBluetoothEnabled);
    };
    app.setOption = function(value) {
        var reqSet = settings.createLock().set({'bluetooth.enabled': value});
        window.close();
    }
})();
