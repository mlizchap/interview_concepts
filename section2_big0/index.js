
const everyone = ['dory', 'marlin', 'gill', 'nemo'];
const nemo = ['nemo'];

const large = new Array(100000).fill('nemo');

const { performance } = require('perf_hooks');

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log("found NEMO!")
        }
    }
    let t1 = performance.now();
    console.log(`performance took ${t1 - t0}`);
}

// findNemo(large);