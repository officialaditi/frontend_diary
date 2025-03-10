// A simple function to simulate fetching data from an API
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data fetched successfully!";
      resolve(data); // Resolving the promise after 2 seconds
    }, 2000);
  });
}

// Async function that uses await to pause execution until fetchData completes
async function getData() {
  console.log("Fetching data...");

  // Await the fetchData function to complete
  const result = await fetchData();

  // Once the promise resolves, log the result
  console.log(result); // This will print after 2 seconds
}

getData(); // Calling the async function

// challenge:

let fileDowload = (fileNo, time, isDowloaded) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isDowloaded) {
        console.log(`File ${fileNo} downloaded Successfully`);
        resolve();
      } else {
        reject(`Wouldn't able to download this file`);
      }
    }, time);
  });
};

let Files = async () => {
  try {
    await fileDowload(1, 2000, true);
    await fileDowload(2, 4000, true);
    await fileDowload(3, 3000, false);
  } catch (error) {
    console.log(error);
  }
};
Files();
