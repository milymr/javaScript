//pasta node -> pasta modulo os 
//importa o modulo os
const os = require("os") 

console.log("Sistema operacional: ", os.platform())
console.log("arquitetura:", os.arch())
console.log("memoria livre:", os.freemem (), "bytes")
console.log("memória livre:", os.totalmem (), "bytes")
                                                                                     