// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UILocalNotification");
exports.UILocalNotification = UILocalNotification = objc.bindClass(foundation.NSObject,
  function UILocalNotification () {
    return UILocalNotification.__super__.constructor.apply(this, arguments);
  }, {

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

});