// This file is part of coffeekit.  for licensing information, see the LICENSE file

function NSRect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

NSRect.getTypeSignature = function() {
  return "{CGRect={CGPoint=ff}{CGSize=ff}}";
};
