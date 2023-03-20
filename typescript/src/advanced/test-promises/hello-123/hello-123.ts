export function delay(t: number, v: string): Promise<string> {
    return new Promise<string>(resolve => setTimeout(resolve, t, v));
}

export function hello123(name: string): Promise<string[]> {
    const promises: Promise<string>[] = [];
    [1,2,3].forEach(n => {
        if (name === 'boom!' && n === 3) {
            promises.push(Promise.reject('boom!!!!'));
        } else {
            promises.push(delay(1000, `${name} ${n}`));
        }
    });
    return Promise.all(promises);
}