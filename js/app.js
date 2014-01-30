var app = app || {};

(function() {
    var option = 'bluetooth',
        settings = window.navigator.mozSettings;
    if (!settings) {
        console.log('no settings');
        return;
    }
    console.log('loading');
    var reqEnabled = settings.createLock().get(option + '.enabled');
    reqEnabled.onsuccess = function () {
        var isSettingEnabled = reqEnabled.result[option + '.enabled'];
        console.log('Setting is enabled: ' + isSettingEnabled);
        if(isSettingEnabled) {
            app.displayLockScreen();
        }
        else {
            app.setOption(true);
        }
    };
    app.displayLockScreen = function() {
        document.body.style.display = 'block';
        var buttonDisable = document.getElementById('button-disable');
        buttonDisable.onclick = function() {
            app.setOption(false);
        };
        var buttonCancel = document.getElementById('button-cancel');
        buttonCancel.onclick = function() {
            window.close();
        };
    }
    app.setOption = function(value) {
        console.log('setOption');
        var propertyName = option + '.enabled';
        var reqSet = settings.createLock().set({'bluetooth.enabled': value});
        console.log('we are going to close in a moment');
        reqSet.onsuccess = function () {
            console.log('close!');
            window.close();
        };
    };
})();
