let suma = 0

for(let index=2; index < process.argv.length; index++){
  suma += Number(process.argv[index])
}

console.log(suma)
