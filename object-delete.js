
const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
  function keyDeleter(obj) {
    // your code here
    delete obj.foo;
    delete obj.bar;
    return obj;
  }