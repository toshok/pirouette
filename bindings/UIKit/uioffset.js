// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIOffset");
class UIOffset {
  constructor(horizontal, vertical) {
    this.horizontal = horizontal;
    this.vertical = vertical;
  }

  static get(zero) {
    return new UIOffset(0, 0);
  }
}
