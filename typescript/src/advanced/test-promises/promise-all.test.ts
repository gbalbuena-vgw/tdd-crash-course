test('number', () => {
    const n = 3;
    expect(n).toEqual(3);
});

test('promise resolve', () => {
    const promise1 = Promise.resolve(3);
    expect(promise1).toBeInstanceOf(Promise);
    promise1.then(p => expect(p).toEqual(3));
});

test('new promise resolve', () => {
    const promise1 = new Promise((resolve, reject) => {
        resolve(1);
    });
    expect(promise1).toBeInstanceOf(Promise);
    promise1.then(p => expect(p).toEqual(1));
});

test('new promise reject', () => {
    const promise1 = new Promise((resolve, reject) => {
        reject(123);
    });
    expect(promise1).toBeInstanceOf(Promise);
    promise1.then(p => {
        fail('it should not reach here');
    }).catch(err => {
        expect(err).toEqual(123);
    });
});

test('promise all resolve', () => {
    const promise1 = Promise.resolve(1);
    const promise2 = 2;
    const promise3 = new Promise((resolve, reject?) => {
        setTimeout(() => {
          resolve(3);
        }, 100);
      });
    Promise.all([promise1, promise2, promise3])
    .then((values) => {
        expect(values).toEqual([1,2,3]);
    });
});

test('promise all reject', () => {
    const promises = Promise.all(
        [1, 2, 3, Promise.reject(444)]
    );
    promises.then(val => {
        fail('it should not reach here');
    }).catch(err => {
        expect(err).toEqual(444);
    });
});


