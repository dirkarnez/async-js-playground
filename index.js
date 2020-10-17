var retry = require("retry.js");

var config = {
    retryAfter: 0,
    maxAttempts: 10,
    expectedResult: 5
};

retry.run(function () {
    return Math.floor(Math.random() * 11);
}, config)
.then(function(data) {
    console.log(data);
})
.catch(function () {
    console.error("given up");
});