// This file is part of coffeekit.  for licensing information, see the LICENSE file

function NSSize(width, height) {
  this.width = width;
  this.height = height;
}

NSSize.getTypeSignature = function() {
  return "{CGSize=ff}";
};
