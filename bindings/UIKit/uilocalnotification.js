// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UILocalNotification");
var UILocalNotification;
_exports.UILocalNotification = UILocalNotification = foundation.NSObject.extendClass ("UILocalNotification", () => { return {

    // Scheduling a Local Notification
    fireDate: objc.instanceProperty(),
    timeZone: objc.instanceProperty(),
    repeatInterval: objc.instanceProperty(),
    repeatCalendar: objc.instanceProperty(),

    // Composing the Alert
    alertBody: objc.instanceProperty(),
    alertAction: objc.instanceProperty(),
    hasAction: objc.instanceProperty(),
    alertLaunchImage: objc.instanceProperty(),

    // Configuring Other Parts of the Notification
    applicationIconBadgeNumber: objc.instanceProperty(),
    soundName: objc.instanceProperty(),
    userInfo: objc.instanceProperty()

}; });
