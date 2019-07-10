const properties = {
    foo: 'boo',
    bar: 'soap',
    fum: 'bum',
    quux: 'what?',
    spam: 'low sodium',
};
for (const key in properties) {
        console.log(key);
        console.log(properties[key]);
    }