// Promises; to avoid callback hell (from 02-callback.js)

const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    const someID = [1, 2, 3, 4];
    // When promise is successful
    resolve(someID);
    // setTimeout is always successful, so no need for reject, when it's unsuccessful
    // Assume it's failed
    // reject(someID);
  }, 1000);
});

const getDog = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dog = {
        name: "doggo",
        age: 1
      };
      resolve(dog);
    }, 1000);
  });
};

const getCat = dog => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        const cat = {
          name: "cat",
          age: dog.age
        };
        resolve(cat);
      },
      1000,
      dog
    );
  });
};

// Catching error when fail (when reject is used from getIds promise)
// ids = someID from getIds
getIds
  .then(ids => {
    console.log(ids);
    return getDog(ids[2]);
  })
  .then(retDog => {
    console.log(retDog);
    return getCat(retDog);
  })
  .then(retCat => {
    console.log(retCat);
  })
  .catch(e => {
    // console.log(e);
    console.log("ERROR");
  });
