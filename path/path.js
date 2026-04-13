const path = require('path');

console.log("Basename ", path.basename("C:\\temp\\arquivo.html"));
console.log("Normalize ", path.normalize("C:\\temp/dir//subdir/dir/.."));
console.log("Join path ", path.join("/teste", "teste2", "teste3/teste4", "dir2", "."));
console.log("Resolve ", path.resolve("path.js"));
console.log("Extention ", path.extname("path.js"));