const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

//Var não tem escopo de função
funcs[2]()
funcs[5]()