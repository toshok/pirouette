// This file is part of coffeekit.  for licensing information, see the LICENSE file

class NSRect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  static getTypeSignature() { return "{CGRect={CGPoint=ff}{CGSize=ff}}"; }
}
