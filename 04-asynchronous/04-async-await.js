// Async / Await available from ES 8 (ES2017)

// code from 03-promises.js
const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    const someID = [1, 2, 3, 4];
    resolve(someID);
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
// async fcn await
async function aw() {
  // awaits stops executing code until a promise is fulfilled
  // await has to be inside async function
  const ids = await getIds; // when fail, error is thrown
  console.log(ids);
  const retDog = await getDog();
  console.log(retDog);
  const retCat = await getCat(retDog);
  console.log(retCat);
  return retCat;
}
// const res = aw();
// console.log(res);

// Use then() to wait for the result
aw().then(res => console.log(res));


// getIds
//   .then(ids => {
//     console.log(ids);
//     return getDog(ids[2]);
//   })
//   .then(retDog => {
//     console.log(retDog);
//     return getCat(retDog);
//   })
//   .then(retCat => {
//     console.log(retCat);
//   })
//   .catch(e => {
//     // console.log(e);
//     console.log("ERROR");
//   });
