// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("CLLocationManagerDelegate");
exports.CLLocationManagerDelegate = CLLocationManagerDelegate = objc.bindProtocol(foundation.Protocol,
  function CLLocationManagerDelegate () {
    return CLLocationManagerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Responding to Location Events
    didUpdateToLocation:   objc.optionalMethod ("locationManager:didUpdateToLocation:fromLocation:"),
    didFailWithError:      objc.optionalMethod ("locationManager:didFailWithError:"),

    // Responding to Heading Events
    didUpdateHeading:                objc.optionalMethod ("locationManager:didUpdateHeading:"),
    shouldDisplayHeadingCalibration: objc.optionalMethod ("locationManagerShouldDisplayHeadingCalibration:"),

    // Responding to Region Events
    didEnterRegion:     objc.optionalMethod ("locationManager:didEnterRegion:"),
    didExitRegion:      objc.optionalMethod ("locationManager:didExitRegion:"),
    monitoringDidFail:  objc.optionalMethod ("locationManager:monitoringDidFailForRegion:withError:"),
    didStartMonitoring: objc.optionalMethod ("locationManager:didStartMonitoringForRegion:"),

    // Responding to Authorization Changes
    didChangeAuthorizationStatus: objc.optionalMethod ("locationManager:didChangeAuthorizationStatus:")

});
