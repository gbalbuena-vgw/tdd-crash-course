function delay(t, v) {
    return new Promise(resolve => setTimeout(resolve, t, v));
}

async function hello123(name) {
    const promises = [];
    [1,2,3].forEach(n => {
        promises.push(delay(1000, `${name} ${n}`));
    });
    return Promise.all(promises);
}

(async () => {    
    console.log(await hello123('hello'));
})();