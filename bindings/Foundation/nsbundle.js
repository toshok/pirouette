// This file is part of Pirouette.  for licensing information, see the LICENSE file

var NSBundle;
_exports.NSBundle = NSBundle = NSObject.extendClass("NSBundle", () => ({

  // Initializing an NSBundle
  bundleWithURL: objc.staticSelector("bundleWithURL:"),
  bundleWithPath: objc.staticSelector("bundleWithPath:"),
  initWithURL: objc.instanceSelector("initWithURL:"),
  initWithPath: objc.instanceSelector("initWithPath:"),

  // Getting an NSBundle
  bundleForClass: objc.staticSelector("bundleForClass:"),
  bundleWithIdentifier: objc.staticSelector("bundleWithIdentifier:"),
  mainBundle: objc.staticProperty(),
  allBundles: objc.staticProperty(),
  allFrameworks: objc.staticProperty(),

  // Getting a Bundled Class
  classNamed: objc.instanceSelector("classNamed:"),
  principalClass: objc.instanceSelector(),

  // Finding Resources
  pathForResource: objc.instanceSelector("pathForResource:ofType:"),
  //XXX pathForResourceInDirectory: objc.staticSelector("pathForResource:ofType:inDirectory:"),
  pathForResourceInDirectory: objc.instanceSelector("pathForResource:ofType:inDirectory:"),
  pathForResourceInDirectoryForLocalization: objc.instanceSelector("pathForResource:ofType:inDirectory:forLocalization:"),

  //XXX pathsForResourcesOfType: objc.staticSelector("pathsForResourcesOfType:inDirectory:"),
  pathsForResourcesOfType: objc.instanceSelector("pathsForResourcesOfType:inDirectory:"),
  pathsForResourcesOfTypeForLocalization: objc.instanceSelector("pathsForResourcesOfType:inDirectory:forLocalization:"),

  URLForResource: objc.instanceSelector("URLForResource:withExtension:"),
  URLForResourceInSubdirectory: objc.instanceSelector("URLForResource:withExtension:subdirectory:"),
  URLForResourceForlocalization: objc.instanceSelector("URLForResource:withExtension:subdirectory:localization:"),
  URLForResourceInBundleWithURL: objc.staticSelector("URLForResource:withExtension:subdirectory:inBundleWithURL:"),

  URLsForResourcesWithExtension: objc.instanceSelector("URLsForResourcesWithExtension:subdirectory:"),
  URLsForResourcesWithExtensionForLocalization: objc.instanceSelector("URLsForResourcesWithExtension:subdirectory:localization:"),
  URLsForResourcesWithExtensionInBundleWithURL: objc.staticSelector("URLsForResourcesWithExtension:subdirectory:inBundleWithURL:"),

  resourcePath: objc.instanceSelector(),

  // Getting the Bundle Directory
  bundleURL: objc.instanceProperty({ set: null }),
  bundlePath: objc.instanceProperty({ set: null }),

  // Getting Bundle Information
  bundleIdentifier: objc.instanceProperty({ set: null }),
  infoDictionary: objc.instanceProperty({ set: null }),
  objectForInfoDictionaryKey: objc.instanceSelector("objectForInfoDictionaryKey:"),
  builtInPlugInsURL: objc.instanceProperty({ set: null }),
  builtInPlugInsPath: objc.instanceProperty({ set: null }),
  executableURL: objc.instanceProperty({ set: null }),
  executablePath: objc.instanceProperty({ set: null }),
  URLForAuxiliaryExecutable: objc.instanceSelector("URLForAuxiliaryExecutable:"),
  pathForAuxiliaryExecutable: objc.instanceSelector("pathForAuxiliaryExecutable:"),
  privateFrameworksURL: objc.instanceProperty({ set: null }),
  privateFrameworksPath: objc.instanceProperty({ set: null }),
  sharedFrameworksURL: objc.instanceProperty({ set: null }),
  sharedFrameworksPath: objc.instanceProperty({ set: null }),
  sharedSupportURL: objc.instanceProperty({ set: null }),
  sharedSupportPath: objc.instanceProperty({ set: null }),
  resourceURL: objc.instanceProperty({ set: null }),

  // Managing Localized Resources
  localizedStringForKey: objc.instanceSelector("localizedStringForKey:value:table:"),

  // Loading a Bundle’s Code
  executableArchitectures: objc.instanceProperty({ set: null }),
  preflightAndReturnError: objc.instanceSelector("preflightAndReturnError:"),
  load: objc.instanceSelector(),
  loadAndReturnError: objc.instanceSelector("loadAndReturnError:"),
  isLoaded: objc.instanceProperty({ set: null }),
  unload: objc.instanceSelector(),

  // Managing Localizations
  preferredLocalizationsFromArray: objc.staticSelector("preferredLocalizationsFromArray:"),
  preferredLocalizationsFromArrayForPreferences: objc.staticSelector("preferredLocalizationsFromArray:forPreferences:"),
  localizations: objc.instanceProperty({ set: null }),
  developmentLocalization: objc.instanceProperty({ set: null }),
  preferredLocalizations: objc.instanceProperty({ set: null }),
  localizedInfoDictionary: objc.instanceProperty({ set: null })
}));
