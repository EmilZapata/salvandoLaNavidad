const fs = require('fs')
fs.readFile(process.argv[2],(err, data)=>{
if(err) throw err
const str = data.toString()
console.log(str.split('\n').length - 1)
})
