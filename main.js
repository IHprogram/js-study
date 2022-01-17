const a = "aです！";
console.log('こんにちは');

function b() {
  console.log(this, arguments, a)
}

b();
