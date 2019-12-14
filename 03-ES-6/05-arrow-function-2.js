// Arrow Function 2: lexical 'this'

// ES 5
var box5 = {
  color: "brown",
  position: 1,
  clickMe: function() {
    // this here points to box5
    var self = this;

    document.querySelector(".box-1").addEventListener("click", function() {
      // this here points to the DOM element
      var str = "box number: " + self.position + " and is " + self.color;
      console.log(str);
    });
  }
};
box5.clickMe();

// ES 6
const box6 = {
  color: "coral",
  position: 2,
  clickMe: function() {
    document.querySelector(".box-2").addEventListener("click", () => {
      // this here points to box6
      var str = "box number: " + this.position + " and is " + this.color;
      console.log(str);
    });
  }
};
box6.clickMe();

// Arrow function on clickMe()
const box6_2 = {
  color: "coral",
  position: 2,
  clickMe: () => {
    document.querySelector(".box-2").addEventListener("click", () => {
      // this here points to global object (window)
      var str = "box number: " + this.position + " and is " + this.color;
      console.log(str);
    });
  }
};
box6_2.clickMe();

// More Example

var friends = ["friend1", "friend2", "friend3"];

function Person(name) {
  this.name = name;
}

// ES 5
Person.prototype.myFriends = function(friends) {
  //   var arr = friends.map(function(e) {
  //       // this here points to window(global)
  //     return this.name + " is friends with " + e;
  //   });

  var arr = friends.map(
    function(e) {
      // this here points to window(global)
      return this.name + " is friends with " + e;
    }.bind(this)
  );
  console.log(arr); ///
};

var ellis = new Person("Ellis").myFriends(friends);

// ES 6
Person.prototype.myFriends2 = function(friends) {
  var arr = friends.map(e => this.name + " is friends with " + e);
  console.log(arr); ///
};
var john = new Person("John").myFriends2(friends);
