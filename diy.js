function myAttempt() {
    var rand = Math.random();
	if(rand < 0.8) {
		throw new Error(`attempt f up with ${rand}`);
	} else {
        console.log(`attempt ${rand}`);
		return rand;
	}
}

const myAttemptAsPromiseFunction = () => new Promise((r, j) => {
    try {
        r(myAttempt())
    } catch(e) {
        j(e);
    }
})

async function retry(maxTry) {
    for (var i = 0; i < maxTry; i++) {
        try {
            return await myAttemptAsPromiseFunction();
        } catch (e) {
            console.log(`retry`);
            continue;
        }
    }
}

retry(5);
