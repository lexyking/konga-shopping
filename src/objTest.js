const obj = {
  name: 'lexy',
  surname: 'king',
  age: 12
}

const arr = [
  {...obj},
  {...obj, school: 'les bourgeons'},
  {...obj, city: 'lyon'}
]

let result = arr.slice(0,1)

console.log({ arr }, { result})