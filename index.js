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

//stop watch excercise

function StopWatch() {
  //properties
  let startTime,
    endTime,
    duration,
    startT = 0;

  //methods
  this.start = function () {
    startTime = new Date();
    startT = startTime.getTime();
  };
  this.stop = function () {
    endTime = new Date();
    let stopT = endTime.getTime();
    let seconds = stopT - startT;
    duration = seconds;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

// proper ES6 oop
class User {
  constructor(email, userName) {
     this.email = email;
    this.userName = userName;
  }
}
function Usser(email, userName) {
  this.email = email;
  this.userName = userName;
}
// prototype
User.prototype.login = function () {
  console.log("heyy");
};
User.prototype.logOut = function () {
  console.log("he yy");
};

class ahmed extends User {
    constructor() {
        super();
        console.log("hi")
    }
}

// constructor function inherteince
function loly(...args) {
  Usser.apply(this, args);
}

const userOne = new ahmed();