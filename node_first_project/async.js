// setTimeout(()=>{
//     console.log('This is after 2 seconds');

// }, 2000);

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve('Promise Resolved');
//     }, 2000);
//     reject('Promise Rejected');
//     return promise;

// });

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching user data...");

        setTimeout(() => {
            const users = {
                1: { name: "John Doe", age: 25 },
                2: { name: "Jane Smith", age: 30 }
            };

            if (users[userId]) {
                resolve(users[userId]); // Data found, resolve the promise
            } else {
                reject("User not found"); // No user found, reject the promise
            }
        }, 2000); // Simulate a 2-second delay
    });
}

// Using the Promise
fetchUserData(1)
    .then(user => {
        console.log("User Data:", user.name);
    })
    .catch(error => {
        console.error("Error:", error);
    });


