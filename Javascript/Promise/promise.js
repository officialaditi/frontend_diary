// let promise = new Promise((resolve, reject) => {
// //   console.log("Hello im an promise..");
// //   let success = false;
// //   if (success) {
// //     resolve("yes we got sucesss");
// //   } else {
// //     reject("work hard"); // the reject will automate it an error and will show as error in console
// //   }
// // });

// let myPromise = new Promise((resolve, reject) => {
//   let fileDownloaded = true;

//   setTimeout(() => {
//     if (fileDownloaded) {
//         resolve("📂 File downloaded successfully!");
//       } else {
//         reject("❌ Download failed!");
//       }
//   }, 3000)
// });

// myPromise.then((message) => console.log(message)).catch((message) => console.log(message));
// console.log('Wait your file is Downloading...')

////////////////////////////////////////////////////////////////////////////////////////////////

// 🔹 Challenge 1: Simulate Multiple Async Operations
// You need to create a function downloadFiles() that:

// Simulates downloading three different files.
// Each download takes 2 seconds.
// The files should be downloaded in sequence (one after another).
// Use Promises to handle this.
// After downloading all three files, print "All files downloaded successfully!".
// If any file fails to download, print "Download failed!" for that file.

function downloadFile(fileNumber) {
    return new Promise((resolve, reject) => {
      let fileDownloaded = true; // Set this to false to simulate failure
  
      setTimeout(() => {
        if (fileDownloaded) {
          console.log(`File ${fileNumber} downloaded successfully.`);
          resolve(); // Resolve the promise when the file is successfully downloaded
        } else {
          reject(`File ${fileNumber} download failed.`);
        }
      }, 2000); // Simulating a 2-second download time
    });
  }
  
  function downloadFiles() {
    downloadFile(1)
      .then(() => downloadFile(2)) // Only start the next file if the previous one is successful
      .then(() => downloadFile(3))
      .then(() => {
        console.log("All files downloaded successfully!");
      })
      .catch((error) => {
        console.log(error); // If any file fails, catch the error and print it
      });
  }
  
  downloadFiles();
  