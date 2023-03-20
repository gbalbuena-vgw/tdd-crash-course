function delay(t, v) {
    return new Promise(resolve => setTimeout(resolve, t, v));
}

function hello123(name) {
    const promises = [];
    [1,2,3].forEach(n => {
        promises.push(delay(1000, `${name} ${n}`));
    });
    return Promise.all(promises);
}

hello123('hello').then(el => {
    console.log(el); // [ 'hello 1', 'hello 2', 'hello 3' ]
});
