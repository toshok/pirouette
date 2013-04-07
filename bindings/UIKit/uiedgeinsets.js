// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIEdgeInsets");
class UIEdgeInsets {
  constructor(top, left, bottom, right) {
    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }

  static get(zero) {
    return new UIEdgeInsets (0, 0, 0, 0);
  }
}