cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-actionsheet.ActionSheet",
      "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
      "pluginId": "cordova-plugin-actionsheet",
      "clobbers": [
        "window.plugins.actionsheet"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryEntry",
      "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryReader",
      "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "cordova-plugin-file.Entry",
      "file": "plugins/cordova-plugin-file/www/Entry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.File",
      "file": "plugins/cordova-plugin-file/www/File.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "cordova-plugin-file.FileEntry",
      "file": "plugins/cordova-plugin-file/www/FileEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.FileError",
      "file": "plugins/cordova-plugin-file/www/FileError.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "cordova-plugin-file.FileReader",
      "file": "plugins/cordova-plugin-file/www/FileReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "cordova-plugin-file.FileSystem",
      "file": "plugins/cordova-plugin-file/www/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadOptions",
      "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadResult",
      "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "cordova-plugin-file.FileWriter",
      "file": "plugins/cordova-plugin-file/www/FileWriter.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "cordova-plugin-file.Flags",
      "file": "plugins/cordova-plugin-file/www/Flags.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "cordova-plugin-file.LocalFileSystem",
      "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.Metadata",
      "file": "plugins/cordova-plugin-file/www/Metadata.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "cordova-plugin-file.ProgressEvent",
      "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems",
      "file": "plugins/cordova-plugin-file/www/fileSystems.js",
      "pluginId": "cordova-plugin-file"
    },
    {
      "id": "cordova-plugin-file.requestFileSystem",
      "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.isChrome",
      "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.iosFileSystem",
      "file": "plugins/cordova-plugin-file/www/ios/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems-roots",
      "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.fileSystemPaths",
      "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "cordova-plugin-advanced-http.cookie-handler",
      "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.dependency-validator",
      "file": "plugins/cordova-plugin-advanced-http/www/dependency-validator.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.error-codes",
      "file": "plugins/cordova-plugin-advanced-http/www/error-codes.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.global-configs",
      "file": "plugins/cordova-plugin-advanced-http/www/global-configs.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.helpers",
      "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.js-util",
      "file": "plugins/cordova-plugin-advanced-http/www/js-util.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.local-storage-store",
      "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.lodash",
      "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.messages",
      "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.ponyfills",
      "file": "plugins/cordova-plugin-advanced-http/www/ponyfills.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.public-interface",
      "file": "plugins/cordova-plugin-advanced-http/www/public-interface.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.tough-cookie",
      "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.url-util",
      "file": "plugins/cordova-plugin-advanced-http/www/url-util.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.http",
      "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
      "pluginId": "cordova-plugin-advanced-http",
      "clobbers": [
        "cordova.plugin.http"
      ]
    },
    {
      "id": "cordova-plugin-app-version.AppVersionPlugin",
      "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
      "pluginId": "cordova-plugin-app-version",
      "clobbers": [
        "cordova.getAppVersion"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-background-mode.BackgroundMode",
      "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
      "pluginId": "cordova-plugin-background-mode",
      "clobbers": [
        "cordova.plugins.backgroundMode",
        "plugin.backgroundMode"
      ]
    },
    {
      "id": "cordova-plugin-badge.Badge",
      "file": "plugins/cordova-plugin-badge/www/badge.js",
      "pluginId": "cordova-plugin-badge",
      "clobbers": [
        "cordova.plugins.notification.badge"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-firebase-analytics.FirebaseAnalytics",
      "file": "plugins/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js",
      "pluginId": "cordova-plugin-firebase-analytics",
      "merges": [
        "cordova.plugins.firebase.analytics"
      ]
    },
    {
      "id": "cordova-plugin-firebase-messaging.FirebaseMessaging",
      "file": "plugins/cordova-plugin-firebase-messaging/www/FirebaseMessaging.js",
      "pluginId": "cordova-plugin-firebase-messaging",
      "merges": [
        "cordova.plugins.firebase.messaging"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.Coordinates",
      "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "Coordinates"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "PositionError"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.Position",
      "file": "plugins/cordova-plugin-geolocation/www/Position.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "Position"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "cordova.exec"
      ]
    },
    {
      "id": "cordova-plugin-local-notification.LocalNotification",
      "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
      "pluginId": "cordova-plugin-local-notification",
      "clobbers": [
        "cordova.plugins.notification.local"
      ]
    },
    {
      "id": "cordova-plugin-local-notification.LocalNotification.Core",
      "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
      "pluginId": "cordova-plugin-local-notification",
      "clobbers": [
        "cordova.plugins.notification.local.core",
        "plugin.notification.local.core"
      ]
    },
    {
      "id": "cordova-plugin-local-notification.LocalNotification.Util",
      "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
      "pluginId": "cordova-plugin-local-notification",
      "merges": [
        "cordova.plugins.notification.local.core",
        "plugin.notification.local.core"
      ]
    },
    {
      "id": "cordova-plugin-nativegeocoder.NativeGeocoder",
      "file": "plugins/cordova-plugin-nativegeocoder/www/NativeGeocoder.js",
      "pluginId": "cordova-plugin-nativegeocoder",
      "clobbers": [
        "nativegeocoder"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-request-location-accuracy.RequestLocationAccuracy",
      "file": "plugins/cordova-plugin-request-location-accuracy/www/ios/RequestLocationAccuracy.js",
      "pluginId": "cordova-plugin-request-location-accuracy",
      "clobbers": [
        "cordova.plugins.locationAccuracy"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
      "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
      "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
      "clobbers": [
        "launchnavigator"
      ]
    },
    {
      "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LocalForage",
      "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/localforage.v1.5.0.min.js",
      "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
      "clobbers": [
        "localforage"
      ]
    },
    {
      "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LaunchNavigator",
      "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/ios/launchnavigator.js",
      "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
      "merges": [
        "launchnavigator"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-actionsheet": "2.3.3",
    "cordova-plugin-add-swift-support": "2.0.2",
    "cordova-plugin-file": "6.0.2",
    "cordova-plugin-advanced-http": "3.0.0",
    "cordova-plugin-androidx": "3.0.0",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-app-version": "0.1.9",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-background-mode": "0.7.3",
    "cordova-plugin-badge": "0.8.8",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-firebase-analytics": "5.0.0",
    "cordova-plugin-firebase-messaging": "5.0.1",
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-plugin-inappbrowser": "4.0.0",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "4.2.1",
    "cordova-plugin-local-notification": "0.9.0-beta.2",
    "cordova-plugin-nativegeocoder": "3.4.1",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-request-location-accuracy": "2.3.0",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-support-android-plugin": "1.0.2",
    "cordova-support-google-services": "1.4.1",
    "uk.co.workingedge.phonegap.plugin.launchnavigator": "5.0.4"
  };
});