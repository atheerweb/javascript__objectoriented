//factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

//constructor function
function Circle() {
  let radius;
  Object.defineProperty(this, "radius", {
    get: function () {
      return radius;
    },
    set: function (value) {
      radius = value;
    },
  });
}

const another = new Circle();

