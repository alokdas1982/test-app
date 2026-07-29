// You are given an array of API endpoint names. 
//Print the endpoints that were called more than once along with their count.

const arr = [
    'api/getuser',
    'api/postuser',
    'api/updateuser',
    'api/getuser',
    'api/postuser',
    'api/getuser'
];

let count = {};

// Count API Endpoints
arr.forEach(item => {
    count[item] = (count[item] || 0) + 1;
});

// Print only duplicate endpoints
for (let endpoint in count) {
    if (count[endpoint] > 1) {
        console.log(`${endpoint}: ${count[endpoint]}`);
    }
}