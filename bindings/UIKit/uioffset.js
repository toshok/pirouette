// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIOffset");
function UIOffset(horizontal, vertical) {
  this.horizontal = horizontal;
  this.vertical = vertical;
}

Object.defineProperty (UIEdgeinsets, "zero", {
			 get: function() { new UIOffset (0, 0); },
			 configurable: false
		       });
