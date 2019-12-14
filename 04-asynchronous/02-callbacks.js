// Event Loop: constantly monitor message queue and execution stack to push first
//              callback function onto execution stack
//              Refer to screenshots
// Call backs

function someFcn() {
  // 1st timer
  setTimeout(() => {
    const someData = [1, 2, 3, 4];
    console.log(someData);

    // 2nd timer
    // 3rd argument is to be used in the callback function as id
    setTimeout(
      id => {
        const dog = {
          name: "doggo",
          age: 1
        };
        console.log(`${id}: ${dog.name}`);

        // 3rd timer; too many callbacks: callback hell
        setTimeout(
          age => {
            const cat = {
              name: "cat",
              age: 3
            };
            console.log(dog.name + " and age: " + age);
          },
          1000,
          dog.age
        );
      },
      1000,
      someData[2]
    );
  }, 2000);
}

someFcn();
