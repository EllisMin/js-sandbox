// Example of asynchronous JS
/**
 * Synchronous: Code is run line after another
 * Asynchronous: runs in the "background", works on their own.
 *              pass in callbacks that run once work is finished
 *              move on immediately: non-blocking
 *      i.e. use it to defer actions into the future
 * Example: processing image:
 * processLargeImage(image, () => {
 *  console.log("Image Processed");
 * });
 */
const second = () => {
  //   console.log("Second"); ///

  // Runs after 2 second
  setTimeout(() => {
    console.log("Async fcn inside second()");
  }, 2000);
};

const first = () => {
  console.log("First"); ///
  second();
  console.log("END");
};

first();
