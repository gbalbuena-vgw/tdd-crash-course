function delay(t, v) {
    return new Promise(resolve => setTimeout(resolve, t, v));
}

function hello123(name) {
    const promises = [];
    [1,2,3].forEach(n => {
        if (name === 'boom!' && n === 3) {
            promises.push(Promise.reject('boom!!!!'));
        } else {
            promises.push(delay(1000, `${name} ${n}`));
        }
    });
    return Promise.all(promises);
}

hello123('hello').then(el => {
    console.log(el); // [ 'hello 1', 'hello 2', 'hello 3' ]
}).catch((reason)=> {
    console.log(reason);
});


hello123('boom!').then(el => {
    console.log(el);
}).catch((reason)=> {
    console.log(reason); // 'boom!!!!'
});
