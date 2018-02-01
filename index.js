const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){

return kittens.push(name)
}
destructivelyAppendKitten('Ralph')

function destructivelyPrependKitten(name){
return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
