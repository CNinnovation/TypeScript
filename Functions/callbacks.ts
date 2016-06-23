var foo = function() {
  console.log('foo');
}

function bar(cb : () => void) {
  console.log('bar');
  cb();
}

bar(foo);
