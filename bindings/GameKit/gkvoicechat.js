// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKVoiceChat = GKVoiceChat = objc.bindClass(foundation.NSObject,
  function GKVoiceChat () {
    return GKVoiceChat.__super__.constructor.apply(this, arguments);
  }, {

    // Determining Whether Voice Chat Is Available
    isVoIPAllowed: objc.staticSelector("isVoIPAllowed"),

    // Starting and Stopping Voice Chat
    start: objc.instanceSelector("start"),
    stop: objc.instanceSelector("stop"),

    // Transmitting to Other Players
    active: objc.instanceProperty(),

    // Receiving Updates About Other Participants
    playerStateUpdateHandler: objc.instanceProperty(),

    // Controlling Chat Volume
    setMute: objc.instanceSelector("setMute:forPlayer:"),
    volume: objc.instanceProperty(),

    // Channel Properties
    name: objc.instanceProperty(),
    playerIDs: objc.instanceProperty()

});