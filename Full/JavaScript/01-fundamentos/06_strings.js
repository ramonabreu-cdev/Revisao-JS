const escola = "DevAbreu"

//encontrando a letra no índice
console.log(escola.charAt(3))

//pegando o valor na tabela unicode/ask
console.log(escola.charCodeAt(3))

//descobrir o índice
console.log(escola.indexOf('A'))

//subString imprime apartir do índice indicado
console.log(escola.substring(3))

//SubString com intervalo
console.log(escola.substring(0,3))

//Concatenando Strings
console.log('Escola '.concat(escola).concat("!"))

//Substituir String com a função Replace
console.log(escola.replace(2 , 'r'))

//construindo um Array
console.log('JS,Dart,Python'.split(','))


